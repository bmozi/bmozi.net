import { NextRequest, NextResponse } from "next/server";
import {
  ACCESS_COOKIE_NAME,
  ACCESS_SESSION_SECONDS,
  createAccessToken,
  NO_INDEX_VALUE,
  verifyCredentials,
} from "@/lib/access-gate";

export const dynamic = "force-dynamic";

function safeNextPath(value: FormDataEntryValue | null) {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  if (value.startsWith("/api/access") || value.startsWith("/access")) {
    return "/";
  }

  return value;
}

function accessUrl(request: NextRequest, nextPath: string, error = false) {
  const url = new URL("/access", request.url);

  url.searchParams.set("next", nextPath);

  if (error) {
    url.searchParams.set("error", "1");
  }

  return url;
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");
  const nextPath = safeNextPath(formData.get("next"));

  if (!verifyCredentials(username, password)) {
    const response = NextResponse.redirect(accessUrl(request, nextPath, true), {
      status: 303,
    });
    response.headers.set("x-robots-tag", NO_INDEX_VALUE);
    return response;
  }

  const token = await createAccessToken(username);

  if (!token) {
    return new NextResponse("Access gate is not configured.", {
      status: 503,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "x-robots-tag": NO_INDEX_VALUE,
      },
    });
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url), {
    status: 303,
  });

  response.cookies.set({
    name: ACCESS_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: ACCESS_SESSION_SECONDS,
    path: "/",
  });
  response.headers.set("x-robots-tag", NO_INDEX_VALUE);

  return response;
}

export async function GET(request: NextRequest) {
  const response = NextResponse.redirect(accessUrl(request, "/", false), {
    status: 303,
  });

  response.cookies.set({
    name: ACCESS_COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
  response.headers.set("x-robots-tag", NO_INDEX_VALUE);

  return response;
}
