import SiteLayout from "@/components/SiteLayout";
import DestinationDetail from "@/site-pages/DestinationDetail";
import { destinations } from "@/data/destinations";
import { getPublishedDestination } from "@/lib/supabase/data";

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = await getPublishedDestination(slug);
  return <SiteLayout><DestinationDetail slug={slug} destination={destination} /></SiteLayout>;
}
