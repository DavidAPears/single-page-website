import React from "react";
import HeroSection from "../components/HeroSection";
import { homeObjOne } from "../data/HomeData";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;
