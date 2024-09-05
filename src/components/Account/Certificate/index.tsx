import React from "react";

export default function Certificate() {
  return (
    <React.Fragment>
      <p className="text-4xl font-semibold text-white">Certificates</p>
      <p className="mt-4 text-gray-600 text-sm">
        Verify your identity. For more information on Identity verification please refer to our Docs.
      </p>
      <div className="mt-10 flex flex-col lg:flex-row gap-10 text-white">
        <div className="lg:w-6/12 p-5 bg-gray-900 rounded text-center flex flex-col gap-8 justify-between">
          <p className="text-xl font-semibold mb-6">Balance Allocation Certificate</p>
          <div className="flex-grow"></div>
          <br />
          <br />
          <br />
          <br />
          <button className="text-md bg-[#3671E9] w-10/12 p-2 rounded mx-auto">
            Download Certificate
          </button>
        </div>

        <div className="lg:w-6/12 p-5 bg-gray-900 rounded text-center flex flex-col gap-8 justify-between">
          <p className="text-xl font-semibold mb-6">Withdraw Certificate</p>
          <div className="flex-grow"></div>
          <br />
          <br />
          <br />
          <br />
          <button className="text-md bg-[#3671E9] w-10/12 p-2 rounded mx-auto">
            Download Certificate
          </button>
        </div>
      </div>
      <div className="m-8 flex justify-center">
        <p className="text-gray-600 text-center">Monevis s.r.o. Company Number: 55215921, Podunajská 23/G Bratislava, Slovakia</p>
      </div>
    </React.Fragment>
  );
}
