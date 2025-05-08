import React from "react";
import { GoShareAndroid } from "react-icons/go";
import { Link } from "react-router-dom";

const Card = ({ item, index }) => {
  return (
    <>
      <Link key={item.id} to={`/article/${index}`}>
        <div className="flex flex-col bg-white rounded-[16px] border-[1px] overflow-hidden border-[#DBE5E9]">
          <div className="p-2 space-y-3">
            {/* Image Container */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt="Card"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            {/* Content Section */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src={item.downImage}
                  alt="company logo"
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm text-[#375E6C] font-medium">
                  {item.componyName}
                </span>
              </div>

              {/* Updated text element with line clamping */}
              <h2 className="text-xl font-semibold text-[#002A3C] leading-tight line-clamp-2 overflow-hidden">
                {item.text}
              </h2>

              <div className="text-xs text-[#7A929E] font-medium">3h ago</div>

              {/* <FilterButton
                        label="Psychiatry"
                        className="px-3 py-1 text-sm bg-[#F0F8FB] text-[#006689] rounded-full"
                      /> */}
            </div>

            {/* Action Icons */}
            <div className="flex justify-between items-center pt-2">
              <div className="flex items-center gap-4 text-[#002A3C]">
                <div className="flex w-7 h-7 items-center gap-1 hover:text-[#006689] transition-colors">
                  <button className="w-5 h-5 text-[#002A3C]">
                    {" "}
                    {item.message}
                  </button>
                  <span className="text-sm">0</span>
                </div>
                <button className="flex items-center gap-1 hover:text-[#006689] transition-colors">
                  {item.like}
                  <span className="text-sm">2</span>
                </button>
              </div>

              <div className="flex items-center gap-3 text-[#002A3C]">
                <button className="p-1.5 hover:bg-[#F0F8FB] rounded-lg transition-colors">
                  {item.save}
                </button>
                <button className="p-1.5 hover:bg-[#F0F8FB] rounded-lg transition-colors">
                  <GoShareAndroid />
                </button>
                <button className="p-1.5 hover:bg-[#F0F8FB] rounded-lg transition-colors">
                  {item.file}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
