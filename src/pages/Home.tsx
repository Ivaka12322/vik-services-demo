import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';
import Pricing from '../components/Pricing';
import Expertise from '../components/Expertise';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden selection:bg-teal selection:text-white">
      <Navigation />
      <main className="flex flex-col gap-6 md:gap-8 py-6 md:py-8">
        <Hero />
        <Services />
        <AboutUs />
        <Gallery />
        <Pricing />
        <Expertise />
        <Process />
        <Reviews />
        <ContactInfo />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
