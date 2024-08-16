import star from "../../assets/icon/Star.svg";
import arrow from "../../assets/icon/Vector.svg";
import { NavLink, useNavigate } from "react-router-dom";
import cardData from "../../assets/data.json";

const Offer = () => {
  const filteredCards = cardData.products.slice(12, 16);
  const navigate = useNavigate();

  const handleRedirect = (id: number) => {
    navigate(`/shopSingle/${id}`);
  };

  return (
    <>
      <div className="bg-[#274C5B] py-32">
        <div className="container mx-auto max-w-[1050px]">
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
                  <button className="flex items-center gap-2 text-sm font-bold text-[#274c5b] duration-200 bg-[#EFD372] border-2 border-transparent hover:bg-transparent hover:text-white hover:border-2 hover:border-[#D4D4D4] rounded-2xl px-[28px] py-[18px]">
                    View All Product
                    <div className="bg-[#335B6B] inline-block rounded-full p-1">
                      <img src={arrow} alt="" />
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              {filteredCards.map((el, index) => (
                <div key={index} className="bg-[#F9F8F8] w-[247px] p-5 rounded-3xl">
                <span className="bg-[#274c5b] text-white px-4 py-2 text-xs rounded-lg">
                  {el.category}
                </span>
                <div onClick={() => handleRedirect(el.id)}>
                  <img
                    className="drop-shadow-4xl cursor-pointer w-[207px] h-56"
                    src={el.image}
                    alt={el.title}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-[#274C5B] font-bold text-md">{el.title}</h6>
                  <div className="flex items-center justify-between border-t-2 border-[#DEDDDD] pt-2">
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-[#B8B8B8] line-through">
                        {el.oldPrice}
                      </p>
                      <p className="text-sm font-semibold text-[#274C5B]">
                        {el.newPrice}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: el.rating }, (_, i) => (
                        <img key={i} src={star} alt="" className="cursor-pointer" width={13} />
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
