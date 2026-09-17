import { Navigation } from "@/components/navigation/Navigation";
import { Hero } from "@/components/hero/Hero";
import { Statement } from "@/components/statement/Statement";
import { Services } from "@/components/services/Services";
import { Work } from "@/components/work/Work";
import { Process } from "@/components/process/Process";
import { Team } from "@/components/team/Team";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Statement />
        <Services />
        <Work />
        <Process />
        <Team />
      </main>
      <Contact />
    </div>
  );
}
