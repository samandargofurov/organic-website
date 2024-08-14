import Banner from "../../assets/homeImages/Banner.png";
import arrow from "../../assets/icon/Vector.svg";
import { NavLink } from "react-router-dom"

const HeroSection = () => {
  return (
    <>
        <div className="container mx-auto max-w-[1440px]">
          <div className="relative top-0 left-0">
            <img src={Banner} alt="img" />
            <div className="absolute top-44 left-48">
              <h4 className="font-[YellowTail] text-2xl text-[#68A47F]">
                100% Natural Food
              </h4>
              <p className="text-[50px] text-[#274C5B] pb-3 font-bold w-96">
                Choose the best <br /> healthier way <br /> of life
              </p>
              <NavLink to="/explore">
                <button className="flex items-center gap-2 text-sm font-bold text-[#274C5B] bg-[#EFD372] transition-all duration-300 hover:bg-transparent hover:border-2 hover:pt-[18px] hover:pl-[25px] hover:pr-[25px] hover:pb-[18px] rounded-2xl pt-[16px] pl-[24px] pr-[24px] pb-[16px]">
                  Explore Now
                  <div className="bg-[#274C5B] inline-block rounded-full p-1">
                    <img src={arrow} alt="" width={12} height={12} />
                  </div>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
    </>
  )
}

export default HeroSection