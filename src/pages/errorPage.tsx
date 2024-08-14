import { NavLink } from "react-router-dom";
import arrow from '../assets/icon/Vector.svg'
import errorpageImg from "../assets/errorpageImages/errorpageImage.png";

const ErrorPage = () => {
  return (
    <>
      <>
        <div className="container mx-auto max-w-[1440px]">
          <div className="relative mb-28">
            <div>
              <img src={errorpageImg} alt="" />
            </div>
            <div className="absolute top-[8%] left-[60%]">
              <div className="flex flex-col">
                <div className="text-[220px] font-extrabold text-[#8FA8A8]">404</div>
                <span className="text-[#274c5b] font-bold text-[50px] absolute top-64 left-7">Page not found</span>
                <p className="text-sm text-[#525C60] pl-2 mb-9">The page you are looking for doesn't exist or has been moved</p>
                <NavLink to='/'><button className="flex items-center gap-2 text-sm font-bold text-white bg-[#274c5b] transition-all duration-500 hover:bg-[#EFD372] hover:text-[#274c5b] rounded-xl pt-[16px] pl-[24px] pr-[24px] pb-[16px]">
                Go to Homepage
                <div className="bg-[#335B6B] inline-block rounded-full p-1">
                  <img src={arrow} alt="" width={12} height={12} />
                </div>
              </button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ErrorPage;
