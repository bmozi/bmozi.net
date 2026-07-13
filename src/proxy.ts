import { NextRequest, NextResponse } from "next/server";
import {
  ACCESS_COOKIE_NAME,
  NO_INDEX_VALUE,
  verifyAccessToken,
  verifyBasicAuthorization,
} from "@/lib/access-gate";

const crawlerPattern =
  /(gptbot|chatgpt-user|oai-searchbot|claudebot|anthropic-ai|perplexitybot|ccbot|bytespider|applebot|applebot-extended|google-extended|googlebot|googleother|google-inspectiontool|bingbot|bingpreview|duckduckbot|baiduspider|yandexbot|amazonbot|facebookbot|facebookexternalhit|meta-externalagent|diffbot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|scrapy|crawler|spider|scraper|bot\b)/i;

const publicPathPattern =
  /^\/(?:access|api\/access|_next\/static\/|brand\/|favicon\.ico|favicon-32x32\.png|apple-touch-icon\.png|icon-192\.png|icon-512\.png|manifest\.webmanifest|robots\.txt|sitemap\.xml)/;

const publicOptimizedImagePattern =
  /^\/(?:brand\/|favicon\.ico|favicon-32x32\.png|apple-touch-icon\.png|icon-192\.png|icon-512\.png)/;

function noIndexResponse(response: NextResponse) {
  response.headers.set("x-robots-tag", NO_INDEX_VALUE);
  return response;
}

function redirectToAccess(request: NextRequest) {
  const url = request.nextUrl.clone();
  const destination = request.nextUrl.clone();

  destination.pathname = "/access";
  destination.search = "";
  destination.searchParams.set("next", `${url.pathname}${url.search}`);

  return noIndexResponse(NextResponse.redirect(destination));
}

function isPublicOptimizedImage(request: NextRequest) {
  if (request.nextUrl.pathname !== "/_next/image") {
    return false;
  }

  const source = request.nextUrl.searchParams.get("url") ?? "";

  return publicOptimizedImagePattern.test(source);
}

export async function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";

  if (crawlerPattern.test(userAgent)) {
    return new NextResponse("Crawler access is blocked.", {
      status: 403,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "x-robots-tag": NO_INDEX_VALUE,
      },
    });
  }

  if (
    request.nextUrl.pathname === "/" ||
    publicPathPattern.test(request.nextUrl.pathname) ||
    isPublicOptimizedImage(request)
  ) {
    return noIndexResponse(NextResponse.next());
  }

  if (verifyBasicAuthorization(request.headers.get("authorization"))) {
    return noIndexResponse(NextResponse.next());
  }

  const hasAccess = await verifyAccessToken(
    request.cookies.get(ACCESS_COOKIE_NAME)?.value,
  );

  if (!hasAccess) {
    return redirectToAccess(request);
  }

  return noIndexResponse(NextResponse.next());
}

export const config = {
  matcher: "/:path*",
};
