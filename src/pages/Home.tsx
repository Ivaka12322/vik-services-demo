import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden selection:bg-teal selection:text-white">
      <Navigation />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <AboutUs />
        <Gallery />
        <Pricing />
        <Process />
        <Reviews />
        <ContactInfo />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
