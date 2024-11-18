"use client";
import Daddy from "@/components/layout/daddy";
import { ChevronRight, TicketPercent } from "lucide-react";
import { useState } from "react";

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState("pick-up");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Daddy>
      {/* Tabs */}
      <div className="grid grid-cols-3 border-b text-gray-600">
        <button
          onClick={() => handleTabClick("pick-up")}
          className={`pb-4 font-bold ${
            activeTab === "pick-up"
              ? "text-navy border-b-2 border-navy animate-ease"
              : "hover:text-gray-800"
          }`}>
          PICK UP
        </button>
        <button
          onClick={() => handleTabClick("try-on")}
          className={`pb-4 font-bold ${
            activeTab === "try-on"
              ? "text-navy border-b-2 border-navy animate-ease"
              : "hover:text-gray-800"
          }`}>
          TRY ON RESERVATION
        </button>
        <button
          onClick={() => handleTabClick("delivery")}
          className={`pb-4 font-bold ${
            activeTab === "delivery"
              ? "text-navy border-b-2 border-navy animate-ease"
              : "hover:text-gray-800"
          }`}>
          DELIVERY
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "pick-up" && <PickUpTab />}
        {activeTab === "try-on" && <TryOnTab />}
        {activeTab === "delivery" && <DeliveryTab />}
      </div>
    </Daddy>
  );
}

function PickUpTab() {
  return (
    <div className="w-full flex lg:flex-row justify-between">
      <div className="w-1/2 flex flex-col">
        <p className="font-medium">My Orders</p>
        <div className="flex justify-between items-center">
          <p className="font-bold mt-6 text-sm">Jiniso Cinere</p>
          <p className="font-medium text-blu mt-6 text-sm">16/11/2024 10:00</p>
        </div>
        <div className="mt-4 flex flex-col md:flex-row justify-between items-start py-4">
          {/* Product Details */}
          <div className="flex h-[320px]">
            <img
              src="/PRODUCTS/JINISO - Ultra Highwaist Loose Jeans 219 LEVEL UP 1.webp"
              alt="Product Image"
              className="w-56 h-full object-cover"
            />
            <div className="ml-4 space-y-2">
              <p className="text-gray-800 font-medium">
                JINISO - Ultra Highwaist Loose Jeans 219 LEVEL UP
              </p>
              <div className="flex items-center space-x-2">
                <button className="rounded-sm border border-black/70 p-2 text-xs">
                  Size 27
                </button>
                <div className="rounded-full bg-gray-500 size-10 grid place-items-center text-[#fff] text-xs">
                  216
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-navy font-bold text-lg">
                    Rp 201.500,00
                  </span>
                  <span className="bg-teal text-xs px-2 text-[#fff] rounded-full py-1">
                    67%
                  </span>
                </div>
                <span className="line-through text-gray-400 text-xs">
                  Rp 627.143,00
                </span>
              </div>
              <p className="text-sm text-gray-500">Qty: 1</p>
              <p className="text-base text-gray-900 font-medium flex justify-between">
                <span>Total: </span>
                <span>Rp 201.500,00</span>
              </p>
              <p className="text-xs text-gray-400">
                Taxes, discounts, and shipping fees are calculated at checkout.
              </p>

              {/* Actions */}
              <div className="mt-4 md:mt-0 space-y-2 flex flex-col">
                <button className="bg-navy text-semi py-2 px-4">
                  COMPLETE PURCHASE
                </button>
                <button className="border border-navy text-navy py-2 px-4">
                  TRY IT ON STORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Redeem Rewards */}
      <div className="mt-6 p-4 flex flex-col justify-center text-left max-w-96">
        <p className="font-semibold text-gray-800">Redeem Your Rewards</p>
        <p className="text-xs text-gray-500">
          Choose Your Voucher, Payment Promotion, Redeem e-Gift Card, and J
          Points!
        </p>
        <button className="flex justify-between mt-4 text-semi py-2 px-4 bg-teal/50 border-2 border-dashed border-navy items-center">
          <div className="space-x-2 flex">
            <TicketPercent className="text-navy" />
            <p className="text-[#625F66] font-bold">Redeem Now!</p>
          </div>
          <ChevronRight className="text-navy" />
        </button>
      </div>
    </div>
  );
}

function TryOnTab() {
  return (
    <div className="w-full flex lg:flex-row justify-between">
      <div className="w-1/2 flex flex-col">
        <p className="font-medium">My Reservations</p>
        <div className="flex justify-between items-center">
          <p className="font-bold mt-6 text-sm">
            Appointment: <span className="font-medium">APJNS0012</span>
          </p>
          <p className="font-medium text-blu mt-6 text-sm gap-3 flex">
            <span className="font-bold text-[#000]">Jiniso Cinere</span>
            16/11/2024
          </p>
        </div>
        <div className="mt-4 flex flex-col md:flex-row justify-between items-start py-4">
          {/* Product Details */}
          <div className="flex h-[320px]">
            <img
              src="/PRODUCTS/JINISO - Ultra Highwaist Loose Jeans 219 LEVEL UP 1.webp"
              alt="Product Image"
              className="w-56 h-full object-cover"
            />
            <div className="ml-4 space-y-2">
              <p className="text-gray-800 font-medium">
                JINISO - Ultra Highwaist Loose Jeans 219 LEVEL UP
              </p>
              <div className="flex items-center space-x-2">
                <button className="rounded-sm border border-black/70 p-2 text-xs">
                  Size 27
                </button>
                <div className="rounded-full bg-gray-500 size-10 grid place-items-center text-[#fff] text-xs">
                  216
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-navy font-bold text-lg">
                    Rp 201.500,00
                  </span>
                  <span className="bg-teal text-xs px-2 text-[#fff] rounded-full py-1">
                    67%
                  </span>
                </div>
                <span className="line-through text-gray-400 text-xs">
                  Rp 627.143,00
                </span>
              </div>
              <p className="text-sm text-gray-500">Qty: 1</p>
              <p className="text-base text-gray-900 font-medium flex justify-between">
                <span>Total: </span>
                <span>Rp 201.500,00</span>
              </p>
              <p className="text-xs text-gray-400">
                Taxes, discounts, and shipping fees are calculated at checkout.
              </p>

              {/* Actions */}
              <div className="mt-4 md:mt-0 space-y-2 flex flex-col">
                <button className="bg-navy text-semi py-2 px-4">
                  ADD TO CART
                </button>
                <button className="pb-3 grid place-items-center">
                  <p className="w-fit border-b border-navy font-medium">Maybe later</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Redeem Rewards */}
      <div className="mt-6 p-4 flex flex-col justify-center text-left max-w-96">
        <p className="font-semibold text-gray-800">Redeem Your Rewards</p>
        <p className="text-xs text-gray-500">
          Choose Your Voucher, Payment Promotion, Redeem e-Gift Card, and J
          Points!
        </p>
        <button className="flex justify-between mt-4 text-semi py-2 px-4 bg-teal/50 border-2 border-dashed border-navy items-center">
          <div className="space-x-2 flex">
            <TicketPercent className="text-navy" />
            <p className="text-[#625F66] font-bold">Redeem Now!</p>
          </div>
          <ChevronRight className="text-navy" />
        </button>
      </div>
    </div>
  );
}

function DeliveryTab() {
  return (
    <div className="text-gray-600">
      <p>Delivery functionality coming soon!</p>
    </div>
  );
}
