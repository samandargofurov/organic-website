import HeroSection from "../components/home/HeroSection";
import CategoriesSection from "../components/home/CategoriesSection";
import TestimonialSection from "../components/home/TestimonialSection";
import AboutUs from "../components/home/AboutUs";
import TwoSection from "../components/home/TwoSection";
import Offer from "../components/home/Offer";

const Home = () => {

  return (
    <>
      <div className="relative">
        {/* hero */}
        <HeroSection />

        {/* two sections */}
        <TwoSection />

        {/* about us */}
        <AboutUs />

        {/* categories */}
        <CategoriesSection />

        {/* testimonial */}
        <TestimonialSection />

        {/* offer */}
        <Offer />
      </div>
    </>
  );
};

export default Home;
