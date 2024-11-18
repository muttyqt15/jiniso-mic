import Daddy from "@/components/layout/daddy";
import React from "react";
import Cards from "./components/cards";
import { jinisoMen, jinisoGirl } from "../pick-up/constant";
import SubbrandProducts from "../pick-up/components/section";

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
