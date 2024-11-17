import Daddy from "@/components/layout/daddy";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const PersonalizePage = () => {
  return (
    <Daddy className="px-0 flex flex-row">
      <div className="w-[45%] flex flex-col p-12">
        <h1 className="text-2xl font-semibold mb-2">
          Let&apos;s Personalize Your Experience!
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Help us find the perfect fit and make your shopping even easier.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium mb-4">Body Measurements</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm mb-1">Weight</label>
                <Input placeholder="e.g., 60" className="w-full" />
              </div>
              <div>
                <label className="text-sm mb-1">Height</label>
                <Input placeholder="e.g., 170" className="w-full" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-1">Hip Size</label>
              <Input placeholder="Enter measurement" className="w-full" />
            </div>
            <div>
              <label className="text-sm mb-1">Waist Size</label>
              <Input placeholder="Enter measurement" className="w-full" />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Delivery Address</h2>
            <Input placeholder="Enter your address" className="w-full mb-4" />
            <Input placeholder="Notes (Optional)" className="w-full" />
          </div>
        </div>
      </div>

      <div className="relative flex-1 bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[10%] z-10">
            <Image
              src="/Personalize.png"
              alt="BEST"
              width={400}
              height={200}
              className="object-contain"
            />
            <div className="mt-8 space-y-4 text-purple-600">
              <p className="text-lg">610 Hangout</p>
              <p className="text-lg">415 Hands Up</p>
              <p className="text-lg">773 Weekend</p>
              <p className="text-lg">813 Hangover</p>
              <p className="text-lg">504 Get Low</p>
            </div>
          </div>
          <Image
            src="/model-image.png"
            alt="Model"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </Daddy>
  );
};

export default PersonalizePage;
