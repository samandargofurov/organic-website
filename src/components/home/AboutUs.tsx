import foods from "../../assets/icon/foods.svg";
import quality from "../../assets/icon/quality.svg";
import arrow from "../../assets/icon/Vector.svg";
import background2 from "../../assets/homeImages/background2.png";

const AboutUs = () => {
  return (
    <>
        <div className="bg-[#F9F8F8]">
          <div className="container mx-auto max-w-[1320px] mb-32 pt-6 pb-8 pr-30">
            <div className="flex">
              <div>
                <img src={background2} alt="" width={700} />
              </div>
              <div className="mt-20">
                <h3 className="font-[YellowTail] text-2xl text-[#7EB693] pb-3">
                  About Us
                </h3>
                <p className="font-bold text-3xl text-[#274c5b] pb-3">
                  We Believe in Working <br /> Accredited Farmers
                </p>
                <p className="text-[#525C60] text-sm pb-11">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to <br />
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown <br /> printer took a galley.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-5">
                    <div className="bg-white p-4 inline-block rounded-2xl">
                      <img src={foods} alt="" />
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
                      <img src={quality} alt="" />
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
  )
}

export default AboutUs