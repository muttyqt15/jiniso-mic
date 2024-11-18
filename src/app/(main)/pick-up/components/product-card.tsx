/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link href="/jeans/1" className="w-full flex flex-col gap-2">
      <div className="h-72 w-full border relative">
        <Image
          src={
            product.image ??
            "/PRODUCTS/JINISO - Highwaist Oversize Baggy Loose Jeans 770 WEEKEND 1.jpg"
          }
          fill
          className="object-cover"
          alt={product.name}
        />
      </div>
      <div className="mt-2 space-y-1">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex flex-col justify-center">
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium text-blu">
              {product.currentPrice}
            </span>
            <span className="px-2 py-1 text-xs font-medium text-white bg-teal rounded">
              {product.discount}
            </span>
          </div>
          <span className="text-xs text-gray-500 line-through">
            {product.originalPrice}
          </span>
        </div>

        <div className="flex items-center space-x-1 relative">
          <Heart className="hover:text-purple-900 hover:scale-[0.98] animate-ease cursor-pointer absolute bottom-0 right-4 size-6" />
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(product.rating) ? "text-[#" : "text-gray-300"
                }`}>
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
