import { NextRequest, NextResponse } from "next/server";

const crawlerPattern =
  /(gptbot|chatgpt-user|oai-searchbot|claudebot|anthropic-ai|perplexitybot|ccbot|bytespider|applebot|applebot-extended|google-extended|googlebot|googleother|google-inspectiontool|bingbot|bingpreview|duckduckbot|baiduspider|yandexbot|amazonbot|facebookbot|facebookexternalhit|meta-externalagent|diffbot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|scrapy|crawler|spider|scraper|bot\b)/i;

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
