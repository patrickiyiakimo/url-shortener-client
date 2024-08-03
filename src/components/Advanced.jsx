import React from "react";
// import { IoStatsChartSharp } from "react-icons/io5";
// import { LiaRecordVinylSolid } from "react-icons/lia";
// import { BiCustomize } from "react-icons/bi";

const Advanced = () => {
  return (
    <div className="font-abc ">
      <h2 className="text-center text-4xl font-bold mb-5">
        Advanced Statistics
      </h2>
      <p className="text-center md:mb-16">
        Track how your link are performing across the web with <br />
        our advanced statistics dashboard
      </p>
      <div className="md:grid grid-cols-3 md:ml-20 md:mr-20">
        <div className="shadow-xl p-10 m-5 ">
          {/* <button className="w-14 h-14 bg-gray-700 rounded-full">
            <IoStatsChartSharp className="text-blue-500 w-10 h-10 ml-1" />
          </button> */}
          <h3 className="font-bold text-2xl pb-3">Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className="shadow-xl p-10 m-5 ">
          {/* <button className="w-14 h-14 bg-gray-700 rounded-full">
            <LiaRecordVinylSolid className="text-blue-500 w-10 h-10 ml-2" />
          </button> */}
          <h3 className="font-bold text-2xl pb-3">Detailed Records</h3>
          <p>
            Gain insight into whois clicking your links. Knowing where and when
            people engage with your content help install better information.
          </p>
        </div>
        <div className="shadow-xl p-10 m-5 ">
          {/* <button className="w-14 h-14 bg-gray-700 rounded-full">
            <BiCustomize className="text-blue-500 w-10 h-10 ml-2" />
          </button> */}
          <h3 className="font-bold text-2xl pb-3">Fully Customisable</h3>
          <p>
            Improve brand awareness and content discovarability through
            customisable link, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
