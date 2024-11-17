import React from "react";
import { Store, Earth, ChevronRight } from "lucide-react";

const Cards = () => {
  return (
    <div className="flex w-full gap-6">
      <div className="py-7 px-10 gap-4 hover:scale-[0.98] animate-ease flex flex-col justify-center cursor-pointer border rounded-md shadow-lg w-full h-32">
        <h5 className="text-4xl font-bold tracking-wide">Pick Up</h5>
        <p className="text-[#001F54] text-xs">
          Place your order on our website and pick it up{" "}
          <span className="font-bold">in-store</span>. No waiting, no hassle.
        </p>
      </div>
      <div className=" border-black cursor-pointer relative flex items-center gap-10 group border-2 rounded-md shadow-lg bg-purple-100/50 w-full h-32 p-6">
        <div className="absolute group-hover:translate-x-2 top-1/2 -translate-y-1/2 right-6 animate-ease">
          <ChevronRight className="size-4" />
        </div>
        <Store className="h-full w-16 text-[#001F54]" />
        <div className="h-16 w-[1px] bg-slate-600" />
        <div className="text-left flex flex-col w-fit text-xs justify-between h-full py-3">
          <h5 className="text-2xl font-medium">Jiniso Cinere</h5>
          <div className="flex items-center gap-4">
            <p className="text-[#001F54]">0.20 km</p>
            <div className="flex items-center gap-1">
              <Earth className="size-4" />
              <p className="text-xs font-bold">Near You</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
