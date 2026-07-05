import { NextRequest, NextResponse } from "next/server";

const crawlerPattern =
  /(gptbot|chatgpt-user|oai-searchbot|claudebot|anthropic-ai|perplexitybot|ccbot|bytespider|applebot|applebot-extended|google-extended|googlebot|googleother|google-inspectiontool|bingbot|bingpreview|duckduckbot|baiduspider|yandexbot|amazonbot|facebookbot|facebookexternalhit|meta-externalagent|diffbot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|scrapy|crawler|spider|scraper|bot\b)/i;

function unauthorizedResponse() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "www-authenticate": 'Basic realm="BMOZI", charset="UTF-8"',
      "x-robots-tag": "noindex, nofollow, noarchive, nosnippet, noimageindex",
    },
  });
}

function hasValidBasicAuth(request: NextRequest) {
  const username = process.env.BMOZI_GATE_USER;
  const password = process.env.BMOZI_GATE_PASSWORD;

  if (!username || !password) {
    return false;
  }

  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return false;
  }

  try {
    const decoded = atob(authorization.slice("Basic ".length));
    const separatorIndex = decoded.indexOf(":");

    if (separatorIndex === -1) {
      return false;
    }

    const suppliedUsername = decoded.slice(0, separatorIndex);
    const suppliedPassword = decoded.slice(separatorIndex + 1);

    return suppliedUsername === username && suppliedPassword === password;
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";

  if (crawlerPattern.test(userAgent)) {
    return new NextResponse("Crawler access is blocked.", {
      status: 403,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "x-robots-tag": "noindex, nofollow, noarchive, nosnippet, noimageindex",
      },
    });
  }

  if (!hasValidBasicAuth(request)) {
    return unauthorizedResponse();
  }

  const response = NextResponse.next();
  response.headers.set(
    "x-robots-tag",
    "noindex, nofollow, noarchive, nosnippet, noimageindex",
  );
  return response;
}

export const config = {
  matcher: "/:path*",
};
