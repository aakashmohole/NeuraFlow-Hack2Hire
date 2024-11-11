import { HeroSection } from "../components/custom/HeroSection";
import { Working } from "../components/custom/Working";
import { Features } from "../components/custom/Features";
import { Testimonial } from "../components/custom/Testimonial";
import { Footer } from "../components/custom/Footer";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Working />
      <Features />
      <Testimonial />
      <Footer />
    </>
  );
};

export default LandingPage;
