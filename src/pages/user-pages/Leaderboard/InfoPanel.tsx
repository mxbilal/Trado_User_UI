import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import statsIcon from "../../../assets/stats.svg";
import rulesIcon from "../../../assets/leaderboard_rules.svg";

const data = [
  { name: "Total Trading Volume", value: "$26,862,609", color: "white" },
  { name: "Total Profits", value: "$2,609", color: "green" },
  { name: "Total losses", value: "$12,604", color: "green" },
];

const InfoPanel = () => {
  return (
    <Card placeholder="" className="bg-transparent text-white">
      <CardBody placeholder="" className="p-4">
        <div className="mb-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <img src={statsIcon} alt="" width={20} />
            <Typography placeholder="" variant="h6" color="blue-gray" className="font-poppins">
              Leaderboard Stats
            </Typography>
          </div>
          <div className="py-4 sm:py-10 px-2 sm:px-4 bg-gray-950 mt-6 rounded-xl">
            {data.map((dt, index) => (
              <div key={index} className="mb-4">
                <Typography placeholder="" className="text-gray-400 opacity-50">
                  {dt.name}
                </Typography>
                <Typography placeholder="" className={`text-${dt.color} font-bold text-lg sm:text-2xl`}>
                  {dt.value}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 sm:gap-4">
          <img src={rulesIcon} alt="" width={20} />
          <Typography placeholder="" variant="h6" color="blue-gray" className="font-poppins">
            Rules
          </Typography>
        </div>
        <div className="mt-4 mb-4 bg-gray-950 p-4 rounded-xl">
          <Typography placeholder="" className="mt-2 sm:mt-4 px-2 sm:px-4 text-gray-400 opacity-50 text-xl">
            To participate, purchase a challenge using code “TRDR”.
            <br />
            <br />
            The reset occurs every month on the 26th at 12:00 UTC.
          </Typography>
          <div className="mt-6 flex justify-center">
            <button className="w-full sm:w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-semibold py-4">
              Read More
            </button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default InfoPanel;
