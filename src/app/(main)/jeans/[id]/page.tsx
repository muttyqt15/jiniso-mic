import Daddy from "@/components/layout/daddy";
import React from "react";
import { ProductDetail } from "./components/product-detail";
import { CirclePercent } from "lucide-react";
import PromoCard from "./components/promo-card";

const ProductPage = () => {
  return (
    <Daddy className="flex-row">
      <ProductDetail />
      <div className="flex flex-col w-96 h-fit rounded-md ml-24 border border-slate-400/20 shadow-md items-center">
        <div className="flex gap-4 p-4">
          <CirclePercent />
          <h6 className="font-bold text-navy">SPECIAL PROMO</h6>
        </div>
        <p className="text-slate-400 text-[9px] text-center mb-4 px-4">
          Get extra savings with vouchers applied to every product in your
          shopping bag!
        </p>
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <div className="w-full grid place-items-center p-4 border-x">
          <p className="font-medium text-sm text-slate-500">See All</p>
        </div>
      </div>
    </Daddy>
  );
};

export default ProductPage;
