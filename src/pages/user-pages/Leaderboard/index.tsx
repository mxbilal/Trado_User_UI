import InfoPanel from "./InfoPanel";
import React, { useState } from "react";
import LeaderboardTable from "./LeaderboardTable";
import { Button, Typography } from "@material-tailwind/react";
import LeaderboardPagination from "../../../components/LeaderboardPagination";

const Leaderboard = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row lg:p-8 text-white min-h-screen">
        <div className="md:w-2/3 md:pr-4">
          <LeaderboardTable />
          <div className=" flex items-center justify-center">
            <LeaderboardPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
          
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <InfoPanel />
        </div>
      </div>
      <div className="m-8 flex justify-center">
        <p className="text-gray-600 text-center">Monevis s.r.o. Company Number: 55215921, Podunajská 23/G Bratislava, Slovakia</p>
      </div>
    </>
  );
};

export default Leaderboard;
