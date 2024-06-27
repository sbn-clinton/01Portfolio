import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Footer />
    </main>
  );
}
