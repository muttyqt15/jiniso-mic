import React from "react";
import ProductCard from "./product-card";
interface Props {
  title: string;
  products: {
    id: number;
    name: string;
    image: string;
    currentPrice: string;
    originalPrice: string;
    discount: string;
    rating: number;
    reviews: number;
    isWishlist: boolean;
  }[];
}
const SubbrandProducts = ({ title, products }: Props) => {
  return (
    <div className="mt-8">
      <div className="w-full">
        <h6 className="ml-2 text-sm font-bold my-2">{title}</h6>
        <div className="w-1/4 h-1 bg-[#001F54]" />
      </div>
      <div className="w-full grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4">
        {products.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SubbrandProducts;
