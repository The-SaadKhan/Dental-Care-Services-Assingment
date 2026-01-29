import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import HowItWorks from '@/components/home/HowItWorks';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CitiesServed from '@/components/home/CitiesServed';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CitiesServed />
    </>
  );
}
