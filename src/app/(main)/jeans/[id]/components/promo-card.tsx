import { TicketPercent } from "lucide-react";
import React from "react";

const PromoCard = () => {
  return (
    <div className="flex items-center py-4 gap-2 w-full border-y justify-center group">
      <TicketPercent className="group-hover:translate-x-[2px] animate-ease w-8 mr-2" />
      <div className="group-hover:translate-x-[2px] animate-ease flex flex-col justify-center">
        <p className="group-hover:translate-x-[2px] animate-ease font-bold text-slate-600">
          REDEEM JINIJOY
        </p>
        <p className="group-hover:translate-x-[2px] animate-ease text-[8px] text-slate-500 font-semibold">
          24 Nov 2024
        </p>
      </div>
    </div>
  );
};

export default PromoCard;
