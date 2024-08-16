import arrow from "../../assets/icon/Vector.svg";
import icon from "../../assets/icon/userIcon1.svg";
import { NavLink, useNavigate } from "react-router-dom";
import data from "../../assets/data.json";

const HomeNews = () => {
  const filterCard = data.news.slice(0, 2);
  const navigate = useNavigate();

  const handleRedirect = (id?: any) => {
    navigate(`/aboutNew/${id}`);
  };

  return (
    <>
      <div className="container mx-auto max-w-[1050px]">
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col gap-3">
            <h2 className="font-[YellowTail] text-3xl text-[#7EB693]">News</h2>
            <p className="font-extrabold text-4xl text-[#274c5b]">
              Discover weekly content about <br /> organic food, & more
            </p>
          </div>
          <div>
            <NavLink to="/news">
              <button className="flex items-center gap-2 text-sm font-bold text-[#274c5b] duration-200 hover:bg-[#EFD372] hover:border-2 hover:border-transparent border-2 border-[#274c5b] rounded-2xl px-[28px] py-[18px]">
                More News
                <div className="bg-[#335B6B] inline-block rounded-full p-1">
                  <img src={arrow} alt="" />
                </div>
              </button>
            </NavLink>
          </div>
        </div>

        {/* news cards */}
        <div className="container mx-auto max-w-[1050px]">
          <div className="flex flex-wrap justify-center gap-5 mb-32">
            {filterCard.map((item, index) => {
              return (
                <div key={index} className="relative">
                  <div>
                    <img src={item.image} alt="" width={513} />
                  </div>
                  <div className="absolute top-0 left-0 py-8 px-8">
                    <div className="flex flex-col gap-[105px]">
                      <div className="bg-white w-16 h-16 rounded-full flex flex-col justify-center items-center">
                        <h3 className="text-xl font-extrabold text-[#274c5b]">
                          {item.date}
                        </h3>
                        <p className="text-lg font-bold text-[#274c5b]">
                          {item.month}
                        </p>
                      </div>
                      <div className="shadow-2xl bg-white w-[450px] rounded-3xl p-8 flex flex-col gap-2">
                        <div className="flex gap-2">
                          <img src={icon} alt="icon" width={15} />
                          <h4 className="text-sm font-normal text-[#274c5b]">
                            {item.name}
                          </h4>
                        </div>
                        <div>
                          <p className="text-[#274c5b] text-lg font-bold">
                            {item.title}
                          </p>
                          <p className="text-[#525C60] text-sm w-80 font-normal">
                            {item.description}
                          </p>
                        </div>
                          <button onClick={() => handleRedirect(item.id)} className="flex items-center gap-2 text-sm w-[155px] font-bold text-[#274c5b] duration-200 bg-[#EFD372] border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-[#274c5b] rounded-2xl px-[28px] py-[18px]">
                            Read More
                            <div className="bg-[#335B6B] inline-block rounded-full p-1">
                              <img src={arrow} alt="" />
                            </div>
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNews;
