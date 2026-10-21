import SiteLayout from "@/components/SiteLayout";
import DestinationDetail from "@/site-pages/DestinationDetail";
import { destinations } from "@/data/destinations";

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SiteLayout><DestinationDetail slug={slug} /></SiteLayout>;
}
