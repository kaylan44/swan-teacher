import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Lessons from "@/components/Lessons";
import Trial from "@/components/Trial";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Lessons />
        <Trial />
        <Credentials />
        <Pricing />
        <Testimonials />
        <Personal />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
