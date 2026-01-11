import Hero from "@/components/hero";
import About from "@/components/about";
import CollectionBrief from "@/components/collection-brief";
import FeaturedCollection from "@/components/featured-collection";
import Campaign from "@/components/campaign";
import Lookbook from "@/components/lookbook";
import Archive from "@/components/archive";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Hero />
      <About />
      <CollectionBrief />
      <FeaturedCollection />
      <Campaign />
      <Lookbook />
      <Archive />
      <Footer />
    </main>
  );
}
