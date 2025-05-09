import React from "react";
import Card from "./CardList";

const Cards = ({ data, classes }) => {
  return (
    <section>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[85%] py-[60px] flex-col  ${classes}`}>
        {data?.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
