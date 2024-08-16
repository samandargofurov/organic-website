import { useState, useEffect } from "react";
import background3 from "../../assets/homeImages/Background3.png";
import star from "../../assets/icon/Star.svg";
import data from "../../assets/data.json"

const TestimonialSection = () => {
  const testimonials = data.slider

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container mx-auto max-w-[1440px]">
      <div className="relative">
        <div>
          <img src={background3} alt="" />
        </div>
        <div className="absolute top-28 left-[24%] text-center flex flex-col items-center justify-center">
          <h2 className="font-[YellowTail] text-[24px] text-[#7EB693]">
            Testimonial
          </h2>
          <p className="text-[32px] font-bold text-[#274c5b] mb-10">
            What Our Customer Saying?
          </p>

          <div className="flex flex-col gap-2 items-center">
            <div>
              <img
                className="rounded-full"
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                width={110}
                height={105}
              />
            </div>
            <div className="flex items-center gap-1 mt-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img key={i} src={star} alt="star" width={18} />
                ))}
            </div>
            <div>
              <p className="text-[#525C60] text-[14px] w-[500px] mb-5 mt-6">
                {testimonials[currentSlide].text}
              </p>
              <h3 className="text-xl text-[#274c5b] font-bold">
                {testimonials[currentSlide].name}
              </h3>
              <span className="text-sm text-[#525C60]">
                {testimonials[currentSlide].role}
              </span>

              <div className="flex gap-2 justify-center mt-5">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      index === currentSlide ? "bg-[#7EB693]" : "bg-[#C4C4C4]"
                    }`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-10 items-center justify-center border-t-2 pt-16 pl-10 pr-10 mt-20">
            <div className="border-[3px] border-[#7EB693] w-32 h-32 p-1 rounded-full">
              <div className="bg-[#F1F1F1] rounded-full flex flex-col items-center justify-center w-[114px] h-[115px]">
                <span className="font-extrabold text-3xl text-[#274c5b]">
                  100%
                </span>
                <span className="text-xs text-[#274c5b] font-semibold">
                  Organic
                </span>
              </div>
            </div>

            <div className="border-[3px] border-[#7EB693] w-32 h-32 p-1 rounded-full">
              <div className="bg-[#F1F1F1] rounded-full flex flex-col items-center justify-center w-[114px] h-[115px]">
                <span className="font-extrabold text-3xl text-[#274c5b]">
                  285
                </span>
                <span className="text-xs text-[#274c5b] font-semibold">
                  Active Product
                </span>
              </div>
            </div>

            <div className="border-[3px] border-[#7EB693] w-32 h-32 p-1 rounded-full">
              <div className="bg-[#F1F1F1] rounded-full flex flex-col items-center justify-center w-[114px] h-[115px]">
                <span className="font-extrabold text-3xl text-[#274c5b]">
                  350+
                </span>
                <span className="text-xs text-[#274c5b] font-semibold">
                  Organic Orchads
                </span>
              </div>
            </div>

            <div className="border-[3px] border-[#7EB693] w-32 h-32 p-1 rounded-full">
              <div className="bg-[#F1F1F1] rounded-full flex flex-col items-center justify-center w-[114px] h-[115px]">
                <span className="font-extrabold text-3xl text-[#274c5b]">
                  25+
                </span>
                <span className="text-xs text-[#274c5b] font-semibold">
                  Years of Farming
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
