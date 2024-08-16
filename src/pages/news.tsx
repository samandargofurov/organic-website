import img from "../assets/newsImages/Banner.png";
import icon from "../assets/icon/userIcon.svg";
import arrow from "../assets/icon/Vector.svg";
import { useNavigate } from "react-router-dom";
import data from '../assets/data.json'

const News = () => {
  const filterCard = data.news;
  const navigate = useNavigate();

  const handleRedirect = (id?: any) => {
    navigate(`/aboutNew/${id}`);
  };

  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative mb-24">
          <img src={img} alt="" />
          <div className="absolute top-[38%] left-[38%]">
            <h3 className="text-[50px] text-[#274c5b] font-extrabold">
              Recent News
            </h3>
          </div>
        </div>
        <div className="container mx-auto max-w-[1050px]">
          <div className="flex flex-wrap justify-center gap-6 mb-28">
            {
              filterCard.map((item: any, index: number) => {
                return(
                  <div key={index} className="relative mb-16">
              <div>
                <img src={item.image} alt="" width={513} />
              </div>
              <div className="absolute top-0 left-0 py-8 px-8">
                <div className="flex flex-col gap-[120px]">
                  <div className="bg-white w-16 h-16 rounded-full flex flex-col justify-center items-center">
                    <h3 className="text-xl font-extrabold text-[#274c5b]">{item.date}</h3>
                    <p className="text-lg font-bold text-[#274c5b]">{item.month}</p>
                  </div>

                  <div className="shadow-2xl bg-white w-[450px] rounded-3xl p-8 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <img src={icon} alt="icon" width={15} />
                      <h4 className="text-sm font-normal text-[#274c5b]">
                        By Rachi Card
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#274c5b] text-lg font-bold">
                      {item.title}
                      </p>
                      <p className="text-[#525C60] text-sm w-80 font-normal">
                      {item.description}
                      </p>
                    </div>
                      <button onClick={() => handleRedirect(item.id)} className="flex items-center w-[105px] gap-2 transition-all duration-500 hover:gap-4 text-sm font-bold text-[#274c5b] mt-3">
                        Read More
                        <div className="bg-[#335B6B] inline-block rounded-full p-1">
                          <img src={arrow} alt="" />
                        </div>
                      </button>
                  </div>
                </div>
              </div>
            </div>
                )
              })
            }            
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
