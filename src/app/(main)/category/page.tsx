"use client";

import Daddy from "@/components/layout/daddy";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import SubbrandProducts from "../pick-up/components/section";
import { jinisoGirl, jinisoMen } from "../pick-up/constant";

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("c");

  return (
    <Daddy>
      <Suspense fallback={<div>Loading...</div>}>
        {category === "women" && (
          <SubbrandProducts title="JINISO WOMEN" products={jinisoGirl} />
        )}
        {category === "men" && (
          <SubbrandProducts title="JINISO MEN" products={jinisoMen} />
        )}
      </Suspense>
    </Daddy>
  );
};

export default CategoryPage;
