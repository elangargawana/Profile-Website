import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Capabilities } from '@/components/sections/Capabilities';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Organization } from '@/components/sections/Organization';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Capabilities />
        <About />
        <Experience />
        <Education />
        <Organization />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
