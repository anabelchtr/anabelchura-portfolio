import { ProfileCard } from "@/components/profile-card";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-16">
        <aside className="lg:col-span-4 xl:col-span-3">
          <div className="lg:sticky lg:top-16">
            <ProfileCard />
          </div>
        </aside>
        <main className="mt-12 lg:col-span-8 xl:col-span-9 lg:mt-0">
          <About />
          <Experience />
          <Blog />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}