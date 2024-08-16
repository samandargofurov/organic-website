import Banner from "../../assets/homeImages/Banner.png";
import arrow from "../../assets/icon/Vector.svg";
import { NavLink } from "react-router-dom"

const HeroSection = () => {
  return (
    <>
        <div className="container mx-auto max-w-[1440px]">
          <div className="relative top-0 left-0">
            <img src={Banner} alt="img" />
            <div className="absolute top-[183px] left-[182px]">
              <h4 className="font-[YellowTail] text-2xl text-[#68A47F]">
                100% Natural Food
              </h4>
              <p className="text-[50px] text-[#274C5B] pb-3 font-bold w-96">
                Choose the best <br /> healthier way <br /> of life
              </p>
              <NavLink to="/explore">
                  <button className="flex items-center gap-2 text-sm font-bold text-[#274c5b] duration-200 bg-[#EFD372] border-2 border-transparent hover:bg-transparent hover:text-[#274c5b] hover:border-2 hover:border-[#274c5b] rounded-2xl px-[28px] py-[18px]">
                  Explore Now
                    <div className="bg-[#335B6B] inline-block rounded-full p-1">
                      <img src={arrow} alt="" />
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