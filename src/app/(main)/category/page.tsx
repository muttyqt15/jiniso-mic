"use client";

import Daddy from "@/components/layout/daddy";
import { useSearchParams } from "next/navigation";
import React from "react";
import SubbrandProducts from "../pick-up/components/section";
import { jinisoGirl, jinisoMen } from "../pick-up/constant";

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("c");

  return (
    <Daddy>
      {category === "women" && (
        <SubbrandProducts title="JINISO WOMEN" products={jinisoGirl} />
      )}
      {category === "men" && (
        <SubbrandProducts title="JINISO MEN" products={jinisoMen} />
      )}
    </Daddy>
  );
};

export default CategoryPage;
