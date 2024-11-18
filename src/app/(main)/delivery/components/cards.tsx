import { ChevronRight, MapPin, Store } from "lucide-react";

const Cards = () => {
  return (
    <div className="flex w-full gap-6">
      <div className="py-7 px-10 gap-4 hover:scale-[0.98] animate-ease flex flex-col justify-center cursor-pointer border rounded-md shadow-lg w-full h-64">
        <h5 className="text-4xl font-bold tracking-wide">Delivery</h5>
        <p className="text-[#001F54] text-xs">
          Order now and have it delivered to your doorstep!
        </p>
      </div>
      <div className="cursor-pointer relative flex items-center gap-10 group rounded-md shadow-lg bg-purple-100/50 w-full h-64 p-6">
        <div className="flex h-full w-full">
          <div className="flex flex-col justify-center relative">
            <Store className="text-navy size-32 z-1 mt-4" />
            <div className="h-full w-full grid place-items-center">
              <hr className="w-1 scale-y-105 z-0 bg-slate-500 h-full" />
            </div>
            <MapPin className="text-navy size-32 z-1 mb-4" />
          </div>
          <div className="grid place-items-center w-full">
            <div className="flex justify-between items-center w-full h-full">
              <div className="flex flex-col gap-3 items-start w-full h-full">
                <h5 className="font-medium text-2xl">Jiniso Cinere</h5>
                <p className="font-medium text-navy text-xs">0.20 km</p>
              </div>
              <ChevronRight />
            </div>
            <hr className="w-full h-[2px] bg-slate-600" />
            <button className="flex justify-between items-center w-full h-full">
              <div className="flex flex-col gap-3 items-start w-full h-full">
                <h5 className="font-medium text-2xl">Rumah</h5>
                <p className="font-medium text-navy text-xs">Jalan Pinang Kalijati, Gang Haji Ahmad...</p>
              </div>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
