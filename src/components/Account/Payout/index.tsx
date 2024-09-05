import React from "react";

export default function Payout() {
  return (
    <React.Fragment>
      <p className="text-2xl sm:text-4xl font-medium text-white">Request Payout</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Request withdraws on your account balance and claim earnings. For more
        information on
      </p>
      <p className="text-gray-600 text-sm sm:text-base">
        withdraw schedules and availability, please read the withdraw and
        deposit guidebook.
      </p>
      <div className="mt-10 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-5/12 p-5 bg-gray-900 rounded">
          <p className="text-gray-600">You are eligible</p>
          <div className="flex justify-between mt-4 text-lg sm:text-xl font-semibold text-white">
            <p>For pay</p>
            <p>$0.00</p>
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            How much do you want to withdraw?
          </p>
          <div className="mt-4 bg-black w-full p-2 text-gray-600 rounded flex justify-between">
            <input
              defaultValue={0}
              className="bg-transparent text-sm sm:text-base"
            />
            <button className="bg-[#3671E9] p-1 text-sm sm:text-base text-white font-normal rounded px-4">
              Maximum amount
            </button>
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Selection options
          </p>
          <div className="mt-4 flex gap-1 items-center">
            <img src="./Vector.png" alt="selection option" />
            <label className="font-semibold text-white">rise</label>
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <p className="text-lg sm:text-xl font-semibold text-white">Select Account</p>
          <select
            className="mt-4 w-full p-3 bg-gray-900 rounded text-gray-200 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          >
            <option value="" selected disabled hidden>
              Select account
            </option>
            <option className="bg-gray-900">Account 1</option>
            <option className="bg-gray-900">Account 2</option>
            <option className="bg-gray-900">Account 3</option>
            <option className="bg-gray-900">Account 4</option>
          </select>
        </div>
      </div>
      <div className="m-8 flex justify-center">
        <p className="text-gray-600 text-center">Monevis s.r.o. Company Number: 55215921, Podunajská 23/G Bratislava, Slovakia</p>
      </div>
    </React.Fragment>
  );
}
