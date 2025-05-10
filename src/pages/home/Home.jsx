import React, { useState } from "react";
import Hero from "../../components/Hero";
import Cards from "../../components/Cards";
import HomeBottom from "../../components/HomeBottom";
import { cardData } from "../../components/dummyData";

const Home = () => {
  const [resetData, setResetData] = useState(cardData);

  const resiveData = (data) => {
    setResetData(data);
  };

  console.log(resetData);

  return (
    <div className="bg-[#F8F9FC]">
      <Hero resiveData={resiveData} />

      <Cards data={resetData} classes={"m-auto"} />
      <HomeBottom />
    </div>
  );
};

export default Home;
