"use client";

import Daddy from "@/components/layout/daddy";
import React, { Suspense } from "react";
import CategorySection from "./section";

const CategoryPage = () => {
  return (
    <Daddy>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySection />
      </Suspense>
    </Daddy>
  );
};

export default CategoryPage;
