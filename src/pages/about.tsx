import aboutBanner from "../assets/aboutImages/aboutBanner.png";
import background1 from "../assets/aboutImages/aboutHeroImg.png";
import arrow from "../assets/icon/Vector.svg";
import tractor from "../assets/icon/tractor.svg";
import company from "../assets/icon/company.svg";

const About = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative mb-24">
          <img src={aboutBanner} alt="" />
          <div className="absolute top-[40%] left-[42%]">
            <h3 className="text-[50px] text-[#274c5b] font-extrabold">
              About Us
            </h3>
          </div>
        </div>
        <div className="container mx-auto max-w-[1350px]">
          <div className="flex">
            <div>
              <img src={background1} alt="" width={700} />
            </div>
            <div className="mt-8">
              <h3 className="font-[YellowTail] text-2xl text-[#7EB693] pb-3">
                About Us
              </h3>
              <p className="font-extrabold text-4xl w-96 text-[#274c5b] pb-3">
                We do Creative Things for Success
              </p>
              <p className="text-[#525C60] text-sm pb-11">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley. Simply
                dummy text of the printing and typesetting industry. Lorem had
                ceased to been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex gap-5">
                  <div className="bg-white p-4 inline-block rounded-2xl">
                    <img src={tractor} alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xl font-bold text-[#274C5B]">
                      Organic Foods Only
                    </span>
                    <p className="w-96 text-md">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="bg-white p-4 inline-block rounded-2xl">
                    <img src={company} alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xl font-bold text-[#274C5B]">
                      Quality Standards
                    </span>
                    <p className="w-96 text-md">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-[#fff] bg-[#274C5B] transition-all duration-500 hover:bg-[#EFD372] hover:text-[#274c5b] rounded-2xl mt-12 pt-[20px] pl-[28px] pr-[28px] pb-[20px]">
                Shop Now{" "}
                <div className="bg-[#335B6B] inline-block rounded-full p-1">
                  <img src={arrow} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
