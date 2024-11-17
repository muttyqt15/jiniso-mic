import Daddy from "@/components/layout/daddy";
import React from "react";
import Cards from "./components/cards";
import SubbrandProducts from "./components/section";
import { jinisoDenimData, jinisoStreetData, jinisoYouthData } from "./constant";

const PickupPage = () => {
  return (
    <Daddy>
      <Cards />
      <SubbrandProducts title="JINISO YOUTH" products={jinisoYouthData} />
      <SubbrandProducts title="JINISO STREET" products={jinisoStreetData} />
      <SubbrandProducts title="JINISO DENIM" products={jinisoDenimData} />
    </Daddy>
  );
};

export default PickupPage;
