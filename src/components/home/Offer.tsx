import star from "../../assets/icon/Star.svg";
import arrow from "../../assets/icon/Vector.svg";
import { NavLink } from "react-router-dom";
import cardData from "../../assets/data.json";

const Offer = () => {
  const filteredCards = cardData.slice(1, 3);

  return (
    <>
      <div className="bg-[#274C5B] py-32">
        <div className="container mx-auto max-w-[1000px]">
          <div className="flex flex-col gap-14">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <h4 className="font-[YellowTail] text-2xl text-[#7EB693]">
                  Offer
                </h4>
                <p className="text-white font-semibold text-3xl">
                  We Offer Organic For You
                </p>
              </div>
              <div>
                <NavLink to="/shop">
                  <button className="flex items-center mx-auto gap-2 text-sm font-bold text-[#274c5b] bg-[#EFD372] duration-200 hover:bg-transparent hover:border-2 hover:text-[#fff] hover:px-[25px] hover:py-[19px] rounded-2xl px-[24px] py-[18px]">
                    View All Product
                    <div className="bg-[#335B6B] inline-block rounded-full p-1">
                      <img src={arrow} alt="" />
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>
            {/* Faqat o'rtadagi ikkita kartani chiqarish */}
            <div className="flex flex-wrap gap-5">
              {filteredCards.map((card, index) => (
                <div key={index} className="bg-[#F9F8F8] w-[235px] p-7 rounded-3xl">
                  <span className="bg-[#274c5b] text-white px-4 py-2 text-xs rounded-lg">
                    {card.category}
                  </span>
                  <div>
                    <img
                      className="drop-shadow-4xl"
                      src={card.image}
                      alt={card.title}
                      width={300}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h6 className="text-[#274C5B] font-bold text-lg">
                      {card.title}
                    </h6>
                    <div className="flex items-center justify-between border-t-2 border-[#DEDDDD] pt-2">
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-[#B8B8B8] line-through">
                          {card.oldPrice}
                        </p>
                        <p className="text-md font-semibold text-[#274C5B]">
                          {card.newPrice}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: card.rating }, (_, i) => (
                          <img key={i} src={star} alt="" width={15} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
