import { useState } from "react";
import Chart from "react-apexcharts";
import search from "../../../assets/search.svg";
import left from "../../../assets/arrow_back.svg";
import discordIcon from "../../../assets/lock-keyhole-svgrepo-com.svg";
import { Button, Typography } from "@material-tailwind/react";
import { PasswordDialogue } from "../../../components/PasswordDialogue";

const graphData: any = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 100, 110, 100],
    },
  ],
  options: {
    grid: { show: false },
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Equity Curve",
      style: { color: "white", fontSize: "24px" },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const TABLE_HEAD = ["User Id", "Date", "Time (UTC)", "Amount", "Status"];

const TABLE_ROWS = [
  {
    userId: "b8an2cc5",
    date: "23/04",
    time: "12:00",
    amount: "$3500",
    status: "Completed",
  },
  {
    userId: "b8an2cc5",
    date: "23/04",
    time: "12:00",
    amount: "$3500",
    status: "Completed",
  },
  {
    userId: "b8an2cc5",
    date: "23/04",
    time: "12:00",
    amount: "$3500",
    status: "Completed",
  },
  {
    userId: "b8an2cc5",
    date: "23/04",
    time: "12:00",
    amount: "$3500",
    status: "Completed",
  },
  {
    userId: "b8an2cc5",
    date: "23/04",
    time: "12:00",
    amount: "$3500",
    status: "Declined",
  },
];

export default function () {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);


  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  return (
    <div className="pt-10 px-6 lg:px-10">
      <PasswordDialogue open={open} setOpen={setOpen} />
      <div className="flex flex-col gap-7 w-full mx-auto bg-dark-grey rounded-lg font-poppins py-6 px-3 sm:p-6">
        <div className="flex gap-4 items-center">
          <div className="bg-gray-900 p-8 rounded"> <img src={left} alt="" width={20} /> </div>
          <div className="flex bg-gray-900 w-full px-5 py-4  rounded justify-between item-center">
            <div className="flex-col gap-4">
              <Typography placeholder={undefined} className="text-[12px] text-gray-500">
                Back
              </Typography>
              <Typography placeholder={undefined} className="text-[18px] ">To Dashboard</Typography>
            </div>
            <div className="flex gap-4">
              <Button placeholder=""
                className="flex items-center bg-blue text-white rounded-md gap-2"
                onClick={() => setOpen(true)}
              >
                Password
                <img src={discordIcon} width={20} alt="Discord Icon" />
              </Button>
              <Button placeholder=""
                className="bg-blue text-white  rounded-md"
              >
                Terminal
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-8 flex-col sm:flex-row">
          <div className="flex-1 flex gap-3 flex-col justify-between">
            <div className="p-3 bg-black rounded pr-10">
              <Typography placeholder={undefined} className="text-[24px]">Starting Balance</Typography>
              <Typography placeholder={undefined} className="text-[12px] text-gray-500">
                Total Buying Power
              </Typography>
              <Typography placeholder={undefined} className="text-[18px] mt-5">$20,00,000.00</Typography>
            </div>
            <div className="p-3 bg-black rounded pr-10">
              <div className="flex justify-between">
                <Typography placeholder={undefined} className="text-[24px]">Current Balance</Typography>
                <Typography placeholder={undefined} className="text-[16px] text-[#3671E9]">
                  +12.4%
                </Typography>
              </div>
              <Typography placeholder={undefined} className="text-[18px] mt-5">$2810.00</Typography>
            </div>
          </div>
          <div className="flex-1 p-3 bg-black rounded pr-10">
            <Typography placeholder={undefined} className="text-[24px]">Position stats</Typography>
            <div className="h-1 my-5 w-full bg-dark-grey rounded">
              <div className="rounded h-full w-[20%] bg-[#3671E9]"></div>
            </div>
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <Typography placeholder={undefined} className="text-[10px]">Avg Win</Typography>
                <Typography placeholder={undefined} className="text-[14px] text-[#3671E9] font-bold">
                  $2424
                </Typography>
              </div>
              <div className="col-span-1">
                <Typography placeholder={undefined} className="text-[10px]">Avg Win</Typography>
                <Typography placeholder={undefined} className="text-[14px] text-[#3671E9] font-bold">
                  $2424
                </Typography>
              </div>
              <div className="col-span-1">
                <Typography placeholder={undefined} className="text-[10px]">Avg Win</Typography>
                <Typography placeholder={undefined} className="text-[14px] text-[#3671E9] font-bold">
                  $2424
                </Typography>
              </div>
              <div className="col-span-1">
                <Typography placeholder={undefined} className="text-[10px]">Avg Win</Typography>
                <Typography placeholder={undefined} className="text-[14px] text-[#3671E9] font-bold">
                  $2424
                </Typography>
              </div>
              <div className="col-span-1">
                <Typography placeholder={undefined} className="text-[10px]">Avg Win</Typography>
                <Typography placeholder={undefined} className="text-[14px] text-[#3671E9] font-bold">
                  $2424
                </Typography>
              </div>
              <div className="col-span-1">
                <Typography placeholder={undefined} className="text-[10px]">Avg Win</Typography>
                <Typography placeholder={undefined} className="text-[14px] text-[#3671E9] font-bold">
                  $2424
                </Typography>
              </div>
              <div className="col-span-1">
                <Typography placeholder={undefined} className="text-[10px]">Avg Win</Typography>
                <Typography placeholder={undefined} className="text-[14px] text-[#3671E9] font-bold">
                  $2424
                </Typography>
              </div>

              <div className="col-span-1">
                <Typography placeholder={undefined} className="text-[10px]">Avg Win</Typography>
                <Typography placeholder={undefined} className="text-[14px] text-[#3671E9] font-bold">
                  $2424
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3 flex-col md:flex-row">
          <div className="flex gap-3 bg-black p-3 rounded flex-1 justify-center">
            <Typography placeholder={undefined} className="text-gray-400">Remaining Profit</Typography>
            <Typography placeholder={undefined}>$1,258</Typography>
          </div>
          <div className="flex gap-3 bg-black p-3 rounded flex-1 justify-center">
            <Typography placeholder={undefined} className="text-gray-400">
              Remaining Drawn Down
            </Typography>
            <Typography placeholder={undefined}>$1,258</Typography>
          </div>
          <div className="flex gap-3 bg-black p-3 rounded flex-1 justify-center">
            <Typography placeholder={undefined} className="text-gray-400">Days Traded</Typography>
            <Typography placeholder={undefined}>2/5</Typography>
          </div>
        </div>

        <div className="rounded-lg bg-black overflow-hidden p-3">
          <Chart
            options={graphData.options}
            series={graphData.series}
            type="line"
            height={350}
          />
        </div>
        <div className="col-span-7 bg-black flex flex-col gap-8 p-4 rounded-md overflow-x-scroll">
          <div className="flex justify-between">
            <Typography placeholder={undefined} className="text-[24px]">Closed Trades</Typography>
            <div className="flex w-[200px] border-none bg-dark-grey px-2 h-10 rounded-md gap-2">
              <img src={search} width={12} />
              <input
                placeholder="Search..."
                className="bg-dark-grey outline-none flex-1 text-[12px]"
              />
            </div>
          </div>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr className="rounded-md">
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="bg-transparent p-4">
                    <Typography
                      placeholder={undefined}
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ userId, time, date, status, amount }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-gray-900";

                return (
                  <tr key={userId}>
                    <td className={classes}>
                      <Typography
                        placeholder={undefined}
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {userId}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        placeholder={undefined}
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        placeholder={undefined}
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {time}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        placeholder={undefined}
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        placeholder={undefined}
                        variant="small"
                        color={status === "Completed" ? "green" : "red"}
                        className="font-medium"
                      >
                        {status}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-2 gap-4 bg-black w-full">
            <Button
              placeholder={undefined}
              variant="text"
              className="flex items-center gap-2"
              onClick={prev}
              disabled={active === 1}
            >
              <img src="./left-arrow.svg" /> Previous
            </Button>
            <div className="flex items-center gap-2">
              <Typography placeholder={undefined} className="cursor-pointer p-2 text-[#3671E9]">
                1
              </Typography>
              <Typography placeholder={undefined} className="cursor-pointer p-2 text-[#3671E9]">
                2
              </Typography>
              <Typography placeholder={undefined} className="cursor-pointer p-2 text-[#3671E9]">
                3
              </Typography>
              <Typography placeholder={undefined} className="cursor-pointer p-2 text-[#3671E9]">
                4
              </Typography>
              <Typography placeholder={undefined} className="cursor-pointer p-2 text-[#3671E9]">
                5
              </Typography>
              <Typography placeholder={undefined}>. . . .</Typography>
              <Typography placeholder={undefined} className="cursor-pointer p-2 text-[#3671E9]">
                10
              </Typography>
            </div>
            <Button
              placeholder={undefined}
              variant="text"
              className="flex items-center gap-2"
              onClick={next}
              disabled={active === 5}
            >
              Next
              <img src="./right-arrow.svg" />
            </Button>
          </div>

        </div>
      </div>

      <div className="m-8 flex justify-center">
        <p className="text-gray-600 text-center">Monevis s.r.o. Company Number: 55215921, Podunajská 23/G Bratislava, Slovakia</p>
      </div>
    </div>
  )
}