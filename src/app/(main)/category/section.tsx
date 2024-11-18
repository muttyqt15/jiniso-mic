import React from "react";
import SubbrandProducts from "../pick-up/components/section";
import { jinisoGirl, jinisoMen } from "../pick-up/constant";
import { useSearchParams } from "next/navigation";

const CategorySection = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("c");

  return (
    <div className="w-full h-fit">
      {category === "women" && (
        <SubbrandProducts title="JINISO WOMEN" products={jinisoGirl} />
      )}
      {category === "men" && (
        <SubbrandProducts title="JINISO MEN" products={jinisoMen} />
      )}
    </div>
  );
};

export default CategorySection;
