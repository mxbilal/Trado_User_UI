import React from "react";

export default function Security() {
  return (
    <React.Fragment>
      <p className="text-3xl font-semibold text-center flex justify-start text-white">Security</p>
      <p className="mt-2 text-gray-600 text-sm text-center flex justify-start">Manage your security settings</p>

      <form className="mt-10 w-full max-w-2xl">
        <div className="mt-4 flex flex-col lg:flex-row justify-start gap-4 lg:gap-10 items-center">
          <label className="text-xl text-gray-600 w-full lg:w-3/12 text-left">Old password</label>
          <input placeholder="Enter your old password" className="p-4 w-full lg:w-8/12 rounded bg-gray-900"></input>
        </div>
        <div className="mt-4 flex flex-col lg:flex-row justify-start gap-4 lg:gap-10 items-center">
          <label className="text-xl text-gray-600 w-full lg:w-3/12 text-left">New password</label>
          <input placeholder="Enter your new password" className="p-4 w-full lg:w-8/12 rounded bg-gray-900"></input>
        </div>
        <div className="mt-4 flex flex-col lg:flex-row justify-start gap-4 lg:gap-10 items-center">
          <label className="text-xl text-gray-600 w-full lg:w-3/12 text-left">Current password</label>
          <input placeholder="Confirm new password" className="p-4 w-full lg:w-8/12 rounded bg-gray-900"></input>
        </div>
        <div className="mt-10 flex justify-center text-white">
          <button className="text-md font-normal  bg-[#3671E9] p-4 rounded pr-10 pl-10">
            SAVE & CONTINUE
          </button>
        </div>
      </form>
      <div className="mt-8 flex justify-center">
        <p className="text-gray-600 text-center">Monevis s.r.o. Company Number: 55215921, Podunajská 23/G Bratislava, Slovakia</p>
      </div>
    </React.Fragment>
  );
}
