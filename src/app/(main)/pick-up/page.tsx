import Daddy from "@/components/layout/daddy";
import React from "react";
import Cards from "./components/cards";
import SubbrandProducts from "./components/section";
import { jinisoMen, jinisoGirl } from "./constant";

const PickupPage = () => {
  return (
    <Daddy>
      <Cards />
      <SubbrandProducts title="JINISO WOMEN" products={jinisoGirl} />
      <SubbrandProducts title="JINISO MEN" products={jinisoMen} />
    </Daddy>
  );
};

export default PickupPage;
