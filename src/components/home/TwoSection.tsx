import natural from "../../assets/homeImages/natural.png";
import offer from "../../assets/homeImages/offer.png";

const TwoSection = () => {
  return (
    <>
        <div className="container mx-auto max-w-[1000px] mt-32 mb-36">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img src={natural} alt="" />
              <div className="absolute top-[30%] left-[10%]">
                <span className="font-[YellowTail] text-2xl text-white">
                  Natural!!
                </span>
                <p className="text-[30px] font-bold text-white">
                  Get Garden <br /> Fresh Fruits
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={offer} alt="" className="rounded-e-3xl" />
              <div className="absolute top-[30%] left-[10%]">
                <span className="font-[YellowTail] text-3xl text-[#7EB693]">
                  Offer!!
                </span>
                <p className="text-[28px] font-bold text-[#274C5B]">
                  Get 10% off <br /> on Vegetables
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TwoSection