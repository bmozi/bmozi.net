export const ACCESS_COOKIE_NAME = "bmozi_access";
export const ACCESS_SESSION_SECONDS = 60 * 60 * 12;
export const NO_INDEX_VALUE =
  "noindex, nofollow, noarchive, nosnippet, noimageindex";

type GateCredentials = {
  username: string;
  password: string;
};

type SessionPayload = {
  u: string;
  exp: number;
};

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

function getGateCredentials(): GateCredentials | null {
  const username = process.env.BMOZI_GATE_USER;
  const password = process.env.BMOZI_GATE_PASSWORD;

  if (!username || !password) {
    return null;
  }

  return { username, password };
}

function constantTimeEqual(left: string, right: string) {
  const length = Math.max(left.length, right.length);
  let result = left.length === right.length ? 0 : 1;

  for (let index = 0; index < length; index++) {
    result |= (left.charCodeAt(index) || 0) ^ (right.charCodeAt(index) || 0);
  }

  return result === 0;
}

function bytesToBase64Url(bytes: Uint8Array) {
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function base64UrlToBytes(value: string) {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/");
  const normalized = padded.padEnd(
    padded.length + ((4 - (padded.length % 4)) % 4),
    "=",
  );
  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index++) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function encodePayload(payload: SessionPayload) {
  return bytesToBase64Url(textEncoder.encode(JSON.stringify(payload)));
}

function decodePayload(value: string): SessionPayload | null {
  try {
    const decoded = textDecoder.decode(base64UrlToBytes(value));
    const parsed = JSON.parse(decoded) as Partial<SessionPayload>;

    if (typeof parsed.u !== "string" || typeof parsed.exp !== "number") {
      return null;
    }

    return { u: parsed.u, exp: parsed.exp };
  } catch {
    return null;
  }
}

async function signingKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    textEncoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

async function sign(value: string, secret: string) {
  const key = await signingKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, textEncoder.encode(value));

  return bytesToBase64Url(new Uint8Array(signature));
}

function sessionSecret(credentials: GateCredentials) {
  return [
    "bmozi-access-v1",
    credentials.username,
    credentials.password,
    process.env.BMOZI_GATE_SESSION_SECRET ?? "",
  ].join(":");
}

export function verifyCredentials(username: string, password: string) {
  const credentials = getGateCredentials();

  if (!credentials) {
    return false;
  }

  return (
    constantTimeEqual(username, credentials.username) &&
    constantTimeEqual(password, credentials.password)
  );
}

export async function createAccessToken(username: string) {
  const credentials = getGateCredentials();

  if (!credentials) {
    return null;
  }

  const payload = encodePayload({
    u: username,
    exp: Math.floor(Date.now() / 1000) + ACCESS_SESSION_SECONDS,
  });
  const signature = await sign(payload, sessionSecret(credentials));

  return `${payload}.${signature}`;
}

export async function verifyAccessToken(token?: string) {
  const credentials = getGateCredentials();

  if (!credentials || !token) {
    return false;
  }

  const [payload, suppliedSignature] = token.split(".");

  if (!payload || !suppliedSignature) {
    return false;
  }

  const parsed = decodePayload(payload);

  if (!parsed || parsed.exp < Math.floor(Date.now() / 1000)) {
    return false;
  }

  const expectedSignature = await sign(payload, sessionSecret(credentials));

  return (
    constantTimeEqual(suppliedSignature, expectedSignature) &&
    constantTimeEqual(parsed.u, credentials.username)
  );
}

export function verifyBasicAuthorization(authorization: string | null) {
  if (!authorization?.startsWith("Basic ")) {
    return false;
  }

  try {
    const decoded = atob(authorization.slice("Basic ".length));
    const separatorIndex = decoded.indexOf(":");

    if (separatorIndex === -1) {
      return false;
    }

    return verifyCredentials(
      decoded.slice(0, separatorIndex),
      decoded.slice(separatorIndex + 1),
    );
  } catch {
    return false;
  }
}
