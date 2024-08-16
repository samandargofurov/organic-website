import img from "../assets/shopImages/Banner (2).png";
import star from "../assets/icon/Star.svg";
import { useNavigate } from "react-router-dom";
import cardData from "../assets/data.json";

const Shop = () => {
  const filteredCards = cardData.products.slice(0, 12);
  const navigate = useNavigate();

  const handleRedirect = (id: number) => {
    navigate(`/shopSingle/${id}`);
  };
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative mb-24">
          <img src={img} alt="" />
          <div className="absolute top-[35%] left-[45%]">
            <h3 className="text-[60px] text-[#274c5b] font-extrabold">Shop</h3>
          </div>
        </div>
        <div className="container mx-auto max-w-[1050px]">
          <div className="flex flex-wrap gap-5 mb-36">
            {filteredCards.map((el, index) => (
              <div
                key={index}
                className="bg-[#F9F8F8] w-[247px] p-7 rounded-3xl"
              >
                <span className="bg-[#274c5b] text-white px-4 py-2 text-xs rounded-lg">
                  {el.category}
                </span>
                <div
                  className="cursor-pointer"
                  onClick={() => handleRedirect(el.id)}
                >
                  <img
                    className="drop-shadow-4xl w-56 h-52"
                    src={el.image}
                    alt={el.title}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-[#274C5B] font-bold text-lg">
                    {el.title}
                  </h6>
                  <div className="flex items-center justify-between border-t-2 border-[#DEDDDD] pt-2">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-[#B8B8B8] line-through">
                        {el.oldPrice}
                      </p>
                      <p className="text-md font-semibold text-[#274C5B]">
                        {el.newPrice}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: el.rating }, (_, i) => (
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
    </>
  );
};

export default Shop;
