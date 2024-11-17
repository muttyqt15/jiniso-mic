export interface ProductDetailType {
  id: number;
  name: string;
  currentPrice: string;
  originalPrice: string;
  discount: string;
  colors: Array<{
    name: string;
    code: string;
  }>;
  sizes: string[];
  description: string;
  details: string[];
  images: string[];
  rating: number;
  reviews: number;
  specifications: {
    height: string;
    weight: string;
  };
}
