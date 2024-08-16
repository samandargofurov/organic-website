import juice from "../assets/homeImages/juice.png";
import food from "../assets/homeImages/food.png";
import cookies from "../assets/homeImages/cookis.png";
import HeroSection from "../components/home/HeroSection";
import CategoriesSection from "../components/home/CategoriesSection";
import TestimonialSection from "../components/home/TestimonialSection";
import AboutUs from "../components/home/AboutUs";
import TwoSection from "../components/home/TwoSection";
import Offer from "../components/home/Offer";
import EcoFriendly from "../components/home/EcoFriendly";
import HomeNews from "../components/home/HomeNews";

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

        {/* eco friendly */}
        <EcoFriendly />

        {/* organic products */}
        <div className="bg-[#F1F8F4] py-20 mb-40">
          <div className="flex gap-7 justify-between">
          <div>
            <div className="relative">
              <div><img className="w-[512px] h-[413px]" src={juice} alt="" /></div>
            <div className="absolute top-44 left-32 text-center bg-white py-5 px-12 rounded-xl text-[#274c5b] font-medium text-sm">Organic Juice</div>
            </div>
          </div>
          <div className="relative">
            <div>
              <img className="w-[512px] h-[413px]" src={food} alt="" />
            </div>
            <div className="absolute top-44 left-[140px] text-center bg-white py-5 px-12 rounded-xl text-[#274c5b] font-medium text-sm">Organic Food</div>
          </div>
          <div className="relative">
            <div>
              <img className="w-[512px] h-[413px]" src={cookies} alt="" />
            </div>
            <div className="absolute top-44 left-[140px] text-center bg-white py-5 px-12 rounded-xl text-[#274c5b] font-medium text-sm">Nuts Cookis</div>
          </div>
          </div>
        </div>

        {/* news */}
        <HomeNews />

      </div>
    </>
  );
};

export default Home;
