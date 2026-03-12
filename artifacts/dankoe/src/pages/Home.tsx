import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Resources } from "@/components/sections/Resources";
import { Blog } from "@/components/sections/Blog";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Resources />
      <Blog />
      <Footer />
    </main>
  );
}
