import React from "react";

export default function Affiliate() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center text-center px-4 lg:px-0">
        <p className="mt-4 text-2xl lg:text-3xl font-semibold text-white">Affiliate Program</p>
        <p className="text-gray-600 text-sm lg:text-base mt-2">Join our Affiliate Program</p>
        <a href="#" className="mt-4 text-gray-600 text-md underline">Read more</a>
        <p className="mt-5 text-white text-md bg-[#3671E9] p-2 px-5 font-semibold rounded">
          https://affiliates.traddoo.com
        </p>
        <p className="mt-4 text-gray-600 text-sm lg:text-base">
          Monevis s.r.o. Company Number: 55215921, Podunajská 23/G Bratislava, Slovakia
        </p>
      </div>
    </React.Fragment>
  );
}
