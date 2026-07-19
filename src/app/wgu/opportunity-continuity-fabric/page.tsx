import type { Metadata } from "next";
import { WguStrategyPage } from "@/components/wgu-strategy-page";
import { wguStrategyPages } from "@/lib/wgu-strategy-pages";

const page = wguStrategyPages["opportunity-continuity-fabric"];

export const metadata: Metadata = {
  title: page.metadataTitle,
  description: page.description,
  alternates: { canonical: `/wgu/${page.slug}` },
};

export default function OpportunityContinuityFabricPage() {
  return <WguStrategyPage page={page} />;
}

