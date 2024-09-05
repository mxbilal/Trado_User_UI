import { Card, CardBody, Avatar, Typography } from "@material-tailwind/react";
import LeaderboardIcom from "../../../assets/leaderboard.svg";
import greenDotIcon from "../../../assets/dot_green.svg";
import userIcon from "../../../assets/user_icon.svg";

const LeaderboardTable = () => {
  const rows = [
    { rank: 1, player: "0x4743...1c22", winLoss: "0/3", roi: "+3294 %", cashPrize: "$4838" },
    { rank: 2, player: "0xAb2B...Ff77", winLoss: "2/0", roi: "+3168 %", cashPrize: "$4720" },
    { rank: 3, player: "0x4471...2d0a", winLoss: "0/2", roi: "+680 %", cashPrize: "$1108" },
    { rank: 4, player: "0x32fE...0509", winLoss: "1/0", roi: "+768 %", cashPrize: "$1143" },
    { rank: 5, player: "0xc274...c5D9", winLoss: "1/1", roi: "+63 %", cashPrize: "$942" },
    { rank: 6, player: "0x6c1F...D063", winLoss: "6/5", roi: "+625 %", cashPrize: "$934" },
    { rank: 7, player: "0x847...8786", winLoss: "1/0", roi: "+585 %", cashPrize: "$844" },
    { rank: 8, player: "0x7D07...f88f", winLoss: "1/0", roi: "+477 %", cashPrize: "$704" },
    { rank: 9, player: "0xe9B...4D54", winLoss: "1/0", roi: "+437 %", cashPrize: "$638" },
    { rank: 10, player: "0x49D5...b8A3", winLoss: "0/1", roi: "+432 %", cashPrize: "$638" },
  ];

  return (
    <Card placeholder="" className="bg-transparent text-white">
      <CardBody placeholder="" className="p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <img src={LeaderboardIcom} alt="" width={20} />
            <Typography placeholder="" variant="h6" className="text-blue-500">
              Leaderboard <span className="text-purple">(Highest ROI)</span>
            </Typography>
          </div>
          <div className="flex items-center gap-2 border-2 border-gray-700 rounded-lg py-2 px-4">
            <img src={greenDotIcon} width={10} />
            <Typography placeholder="">in-sync</Typography>
          </div>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left min-w-[600px] border-separate border-spacing-y-2">
            <thead className="hidden sm:table-header-group">
              <tr className="text-gray-400 opacity-20">
                <th className="py-2">Rank</th>
                <th className="py-2">Player</th>
                <th className="py-2">Win/Loss</th>
                <th className="py-2">ROI</th>
                <th className="py-2">Cash Prize</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="bg-gray-950  py-6 px-3 rounded-l-md">{row.rank}</td>
                  <td className="bg-gray-950 py-6 flex gap-2 items-center">
                    <Avatar placeholder=""
                      size="xs"
                      src={userIcon}
                      alt="avatar"
                    />
                    {row.player}
                  </td>
                  <td className="bg-gray-950 py-2">{row.winLoss}</td>
                  <td className="bg-gray-950 py-2 text-green"><div className="opacity-40">{row.roi}</div></td>
                  <td className="bg-gray-950 py-2 rounded-r-md">
                    <div className="bg-light_green text-green opacity-40 w-max p-2 rounded-lg">
                      {row.cashPrize}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default LeaderboardTable;
