import React from "react";

import { GoShareAndroid } from "react-icons/go";
import { Link } from "react-router-dom";

import Card from "./CardList";

const Cards = ({ data }) => {


  return (
    <>
      <section className="bg-[#F8F9FC]">
        <div className="w-[85%] m-auto py-[60px flex flex-col gap-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((item, index) => (
              <>
              
              <Card item={item} index={index}/>
          
              </>

            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
