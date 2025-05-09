import React from "react";
import FilterButton from "../../filterpage/components/FilterButton";
import { cardData } from "../../../components/dummyData";
import Cards from "../../../components/Cards";
const cardScliceData = cardData.slice(0, 3);

const Lastsection = () => {
  return (
    <>
      <section className="bg-[#E9EBF1]">
        <div className="w-[85%] m-auto py-[60px] flex flex-col gap-7">
          <h1 className="font-bold text-4xl text-[#002A3C] tracking-tight">
            For further reading
          </h1>
          <Cards data={cardScliceData} />
        </div>
      </section>
    </>
  );
};
export default Lastsection;
