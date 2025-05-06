import React from "react";
import FilterButton from "../../filterpage/components/FilterButton";
import { cardData } from '../../../components/dummyData';


const Lastsection = () => {
  const data = cardData;
  return (
    <>
      <section className="bg-[#E9EBF1]">
        <div className="w-[85%] m-auto py-[60px] flex flex-col gap-7">
            <h1 className="font-bold text-4xl text-[#002A3C] tracking-tight">
              For further reading
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.slice(0,3).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white rounded-2xl overflow-hidden border border-[#DBE5E9]"
                >
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

                      <div className="text-xs text-[#7A929E] font-medium">
                        3h ago
                      </div>

                      <FilterButton
                        label="Psychiatry"
                        className="px-3 py-1 text-sm bg-[#F0F8FB] text-[#006689] rounded-full"
                      />
                    </div>

                    {/* Action Icons */}
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-4 text-[#002A3C]">
                        <button className="flex items-center gap-1 hover:text-[#006689] transition-colors">
                          {item.message}
                          <span className="text-sm">0</span>
                        </button>
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
                          {item.share}
                        </button>
                        <button className="p-1.5 hover:bg-[#F0F8FB] rounded-lg transition-colors">
                          {item.file}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
    </>
  );
};
export default Lastsection;
