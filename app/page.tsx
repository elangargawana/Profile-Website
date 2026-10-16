import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Specialty } from '@/components/sections/Specialty';
import { Capabilities } from '@/components/sections/Capabilities';
import { SelectedWork } from '@/components/sections/SelectedWork';
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
        <About />
        <Specialty />
        <Capabilities />
        <SelectedWork />
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
