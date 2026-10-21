import SiteLayout from "@/components/SiteLayout";
import Destinations from "@/site-pages/Destinations";
import { getPublishedDestinations } from "@/lib/supabase/data";

export default async function Page() {
  const destinations = await getPublishedDestinations();
  return <SiteLayout><Destinations destinations={destinations} /></SiteLayout>;
}
