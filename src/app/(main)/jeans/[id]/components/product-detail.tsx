"use client";
import { Camera, ChevronRight, Heart } from "lucide-react";
import React, { useState } from "react";
import { ProductDetailType } from "../interface";
import QuantitySelector from "./quantity-selector";

interface ImageGalleryProps {
  images: string[];
  mainImage: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, mainImage }) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <img
          src={mainImage}
          alt="Product main view"
          className="w-full rounded-lg"
        />
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-full flex items-center gap-2">
          <Camera className="w-4 h-4" />
          <span>TRY IT ON</span>
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Product view ${idx + 1}`}
            className="w-full h-20 object-cover rounded cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export const ProductDetail: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const productData: ProductDetailType = {
    id: 1,
    name: "JINISO - Ultra Highwaist Loose Jeans 215 LEVEL UP",
    currentPrice: "Rp 201.500,00",
    originalPrice: "Rp 627.143,00",
    discount: "62%",
    colors: [
      { name: "Gray", code: "bg-gray-500" },
      { name: "Blue", code: "bg-blue-500" },
      { name: "Black", code: "bg-black" },
      { name: "Khaki", code: "bg-yellow-700" },
    ],
    sizes: ["27", "28", "29", "30"],
    description: "JINISO Active Jean unisex regular aktifstreet",
    details: [
      "Model: Celana Highwaist",
      "Bahan berkualitas tebal/tidak mudah melar",
      "Size 27 = Pinggang pas ukur: 72 cm, panjang: 104 cm",
      "Size 28 = Pinggang pas ukur: 75 cm, panjang: 105 cm",
      "Size 29 = Pinggang pas ukur: 77 cm",
    ],
    images: [
      "/PRODUCTS/JINISO Oversize Baggy Loose Jeans Pria 772 1.webp",
      "/PRODUCTS/JINISO Oversize Baggy Loose Jeans Pria 772 1.webp",
      "/PRODUCTS/JINISO Oversize Baggy Loose Jeans Pria 772 1.webp",
      "/PRODUCTS/JINISO Oversize Baggy Loose Jeans Pria 772 1.webp",
      "/PRODUCTS/JINISO Oversize Baggy Loose Jeans Pria 772 1.webp",
    ],
    rating: 4.8,
    reviews: 48,
    specifications: {
      height: "160-170 cm",
      weight: "45-55 kg",
    },
  };

  return (
    <div className="max-w-7xl mx-auto pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div>
          <ImageGallery
            images={productData.images}
            mainImage={productData.images[0]}
          />
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold">{productData.name}</h1>
              <div className="flex items-center gap-6 mt-2">
                <span className="text-md text-blu">
                  {productData.currentPrice}
                </span>
                <span className="text-xs text-gray-500 line-through">
                  {productData.originalPrice}
                </span>
                <span className="px-3 py-1 text-xs text-white bg-teal rounded-full">
                  {productData.discount}
                </span>
              </div>
            </div>
            <button className="p-2">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Colors */}
          <div className="space-y-2">
            <h3 className="font-medium">Colors</h3>
            <div className="flex gap-2">
              {productData.colors.map((color, idx) => (
                <button
                  key={idx}
                  className={`w-8 h-8 rounded-full ${color.code} ${
                    selectedColor === color.name
                      ? "ring-2 ring-offset-2 ring-blue-500"
                      : ""
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex gap-4 w-full">
            <div className="w-full">
              <h3 className="font-medium">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-2 border rounded h-10 ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-medium">Jumlah</h3>
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button className="w-full py-3 bg-navy text-white">
              BUY NOW
            </button>
            <button className="w-full py-3 border border-navy">
              TRY IT ON STORE
            </button>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h3 className="font-medium">Product Details</h3>
            <p className="text-sm text-gray-600">{productData.description}</p>
            <ul className="space-y-2 text-sm text-gray-600">
              {productData.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium">Specifi</span>
                <span className="text-sm text-gray-500">
                  Height: {productData.specifications.height}
                </span>
                <span className="text-sm text-gray-500">
                  Weight: {productData.specifications.weight}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">User Reviews</h2>
          <button className="text-sm text-gray-600">See All</button>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">{"★".repeat(5)}</div>
          <span className="text-sm">4.8</span>
          <span className="text-sm text-gray-500">(48 reviews)</span>
        </div>
      </div>
    </div>
  );
};
