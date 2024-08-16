import background4 from "../../assets/homeImages/background4.png";

const EcoFriendly = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative">
          <div>
            <img src={background4} alt="" width={680} />
          </div>
          <div className="absolute top-16 left-[630px]">
            <div className="bg-white p-14 rounded-3xl">
              <h2 className="font-[YellowTail] text-[#7EB693] text-xl">
                Eco Friendly
              </h2>
              <p className="font-bold text-4xl text-[#274C5B]">
                Econis is a Friendly <br />
                Organic Store
              </p>
              <div className="flex flex-col gap-5 mt-5">
                <div>
                  <h6 className="font-bold text-xl text-[#274c5b]">Start with Our Company First</h6>
                  <p className="text-[#525C60] text-[14px] pt-1 -tracking-tighter">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
                <div>
                  <h6 className="font-bold text-xl text-[#274c5b]">Learn How to Grow Yourself</h6>
                  <p className="text-[#525C60] text-[14px] pt-1 -tracking-tighter">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
                <div>
                  <h6 className="font-bold text-xl text-[#274c5b]">Farming Strategies of Today</h6>
                  <p className="text-[#525C60] text-[14px] pt-1 -tracking-tighter">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcoFriendly;
