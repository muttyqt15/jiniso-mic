"use client";
import Daddy from "@/components/layout/daddy";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Store, Truck } from "lucide-react";
import { useState } from "react";
import ProductCard from "./pick-up/components/product-card";
import { jinisoDenimData, jinisoGirl, jinisoMen } from "./pick-up/constant";
export default function Home() {
  const [activeTab, setActiveTab] = useState<"must-have" | "deals4u" | "new4u">(
    "must-have"
  );
  const handleTabClick = (tab: "must-have" | "deals4u" | "new4u") => {
    setActiveTab(tab);
  };
  return (
    <Daddy>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full">
        <CarouselContent>
          {[
            { img: "/CAROUSEL/CAROUSEL 1.webp" },
            { img: "/CAROUSEL/CAROUSEL 2.webp" },
            { img: "/CAROUSEL/CAROUSEL 3.webp" },
            { img: "/CAROUSEL/CAROUSEL 4.webp" },
          ].map((p, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 w-full h-[800px]">
                <Image
                  src={p.img}
                  alt="Carousel image"
                  fill
                  objectFit="cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Cards />
      <div className="grid grid-cols-3 border-b text-gray-600 mt-24">
        <button
          onClick={() => handleTabClick("must-have")}
          className={`pb-4 font-bold ${
            activeTab === "must-have"
              ? "text-navy border-b-2 border-navy animate-ease"
              : "hover:text-gray-800"
          }`}>
          MUST HAVE FOR YOU
        </button>
        <button
          onClick={() => handleTabClick("deals4u")}
          className={`pb-4 font-bold ${
            activeTab === "deals4u"
              ? "text-navy border-b-2 border-navy animate-ease"
              : "hover:text-gray-800"
          }`}>
          DEALS FOR YOU
        </button>
        <button
          onClick={() => handleTabClick("new4u")}
          className={`pb-4 font-bold ${
            activeTab === "new4u"
              ? "text-navy border-b-2 border-navy animate-ease"
              : "hover:text-gray-800"
          }`}>
          NEW FOR YOU
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "must-have" && (
          <div className="w-full grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4">
            {jinisoDenimData.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
          </div>
        )}
        {activeTab === "deals4u" && (
          <div className="w-full grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4">
            {jinisoMen.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
          </div>
        )}
        {activeTab === "new4u" && (
          <div className="w-full grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4">
            {jinisoGirl.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
          </div>
        )}
      </div>

      <div className="p-1 w-full h-[800px] relative my-8">
        <Image
          src="/HOMEPAGE/SIGN UP.PNG"
          alt="sign up"
          fill
          objectFit="cover"
        />
      </div>

      <div className="w-full grid place-items-center">
        <h6 className="text-center font-medium">OUR JEANS COLLECTION</h6>
        <div className="w-full grid grid-cols-3 lg:w-3/5 place-items-center gap-4">
          {[
            {
              img: "/HOMEPAGE/JEANS COLLECTION/HANDS UP.png",
              text: "HANDS UP",
            },
            { img: "/HOMEPAGE/JEANS COLLECTION/GET LOW.png", text: "GET LOW" },
            {
              img: "/HOMEPAGE/JEANS COLLECTION/HANGOVER.png",
              text: "HANGOVER",
            },
            { img: "/HOMEPAGE/JEANS COLLECTION/SEVENTY.png", text: "SEVENTY" },
            {
              img: "/HOMEPAGE/JEANS COLLECTION/FEEL GOOD.png",
              text: "FEEL GOOD",
            },
          ].map((p, idx) => (
            <div key={idx} className="w-full">
              <div className="w-full relative h-72">
                <div className="bg-purple-100/50 w-full h-72" />
                <Image
                  src={p.img}
                  alt="sign up"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-center text-sm font-medium">{p.text}</p>
            </div>
          ))}
          <p className="text-justify text-sm font-medium p-4">
            ORDER YOUR FAVORITE ITEMS ON THE WEBSITE AND TRY THEM IN-STORE
            BEFORE PURCHASING. ENJOY FREE STYLING CONSULTATIONS + CUTE LITTLE
            GIFTS AFTER SHOPPING IN-STORE!
          </p>
        </div>
      </div>
    </Daddy>
  );
}

function Cards() {
  return (
    <div className="flex w-full justify-center gap-6 z-50 -mt-20">
      <div className="bg-semi py-7 px-10 gap-4 animate-ease flex justify-center items-center border rounded-md shadow-lg w-3/5 h-32">
        <a href="/pick-up" className="flex items-center gap-6 group">
          <Store className="text-navy size-24 z-1 my-8 group-hover:text-jiniso animate-ease" />
          <h5 className="text-4xl font-bold tracking-wide">PICK UP</h5>
        </a>
        <hr className="bg-slate-500 w-[2px] h-full" />
        <a href="/delivery" className="flex items-center gap-6 group">
          <Truck className="text-navy size-24 z-1 my-8 group-hover:text-jiniso animate-ease" />
          <h5 className="text-4xl font-bold tracking-wide">DELIVERY</h5>
        </a>
      </div>
    </div>
  );
}
