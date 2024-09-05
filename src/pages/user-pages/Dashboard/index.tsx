import { Button, Card, Checkbox, Chip, Typography } from "@material-tailwind/react";
import alertIcon from "../../../assets/alert.svg";
import crossIcon from "../../../assets/cross.svg";
import dashImg from "../../../assets/dashboard_img.svg";
import guardIcon from "../../../assets/guard.svg";
import discordIcon from "../../../assets/discord.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Dashboard = () => {
  const navigate = useNavigate()
  const [showWarning, setShowWarning] = useState(true)
  return (
    <div className="pt-10 px-6 lg:px-10">
      <Typography className="font-poppins xs:text-lg  md:text-2xl lg:text-4xl" placeholder="" >Welcome Back, Dylan</Typography>
      <Typography placeholder="" variant="paragraph" className="text-light_text mt-2">
        View all trading stats directly from your dashboard!
      </Typography>

      {showWarning && <div className="bg-white py-4 mt-6 rounded-md px-4 flex justify-between items-center ">
        <div className="flex gap-4">
          <img src={alertIcon} alt="" width={20} />
          <Typography placeholder="" variant="small" className="text-pen_blue">
            Please note that all the accounts we have provided to our clients
            are demo accounts in a simulated trading environment.
          </Typography>
        </div>
        <img className="cursor-pointer" src={crossIcon} width={15} onClick={() => setShowWarning(false)} />
      </div>}

      <div className="bg-blue rounded-md p-4 sm:p-8 mt-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col justify-between md:w-3/4">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-10">
            <Typography placeholder="" className="font-poppins text-lg sm:text-xl md:text-2xl lg:text-4xl">
              Welcome Dylan Worrall
            </Typography>
            <div>
              <Typography placeholder="" className="font-poppins text-sm sm:text-md md:text-lg">
                Ready to buy your first challenge?
              </Typography>
              <Typography placeholder="" className="font-poppins text-xs sm:text-sm md:text-md">
                We recommend that you go through the FAQ section before starting
                the challenge.
              </Typography>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 md:mt-2">
            <Button onClick={() => navigate("/purchases")} placeholder="" className="bg-white text-black font-poppins rounded-md text-xs sm:text-sm md:text-md py-2 px-4">
              Free 14 days trial
            </Button>
            <Button onClick={() => navigate("/purchases")} placeholder="" className="bg-white text-black font-poppins rounded-md text-xs sm:text-sm md:text-md py-2 px-4">
              A new challenge
            </Button>
            <Button onClick={() => navigate("/rules")} placeholder="" className="bg-white text-black font-poppins rounded-md text-xs sm:text-sm md:text-md py-2 px-4">
              Trading rules
            </Button>
          </div>
        </div>
        <img
          src={dashImg}
          alt=""
          className="hidden md:block mt-4 md:mt-0 md:ml-4"
        />
      </div>
      <div className="py-8 sm:py-14">
        <Typography placeholder="" variant="h4" className="font-poppins">
          Overview of trading accounts
        </Typography>
        <Typography placeholder="" variant="small" className="font-poppins text-gray-600">
          Here you will find all your trading accounts
        </Typography>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Card onClick={() => navigate("/trade-account")} placeholder="" className="bg-gray-900 flex flex-col justify-between gap-12 p-4 cursor-pointer">
            <div>
              <Typography placeholder="" className="font-poppins text-md text-white ">
                104551
              </Typography>
              <Typography placeholder="" className="font-poppins text-2xl sm:text-3xl text-white">
                $10,000
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <img src={guardIcon} alt="" width={20} />
              <Typography placeholder="" className="text-xs sm:text-sm font-poppins text-white">
                Dylan Worrall - Monevis - Trial - $10,000
              </Typography>
            </div>
          </Card>
          <Card placeholder="" className="bg-gray-900 flex flex-col justify-between gap-12  p-5">
            <div>
              <Typography placeholder="" className="font-poppins text-md text-white">
                104551
              </Typography>
              <Typography placeholder="" className="font-poppins text-2xl sm:text-3xl text-white">
                $10,000
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <img src={guardIcon} alt="" width={20} />
              <Typography placeholder="" className="text-xs sm:text-sm font-poppins text-white">
                Dylan Worrall - Monevis - Trial - $10,000
              </Typography>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col gap-4 pb-4">
        <Typography placeholder="" variant="h5" className="font-poppins text-center md:text-left">
          Still in doubt?
        </Typography>
        <Typography placeholder="" variant="small" className="font-poppins text-center md:text-left">
          Connect with us through our social networks and connect with people with the same passion!
        </Typography>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
          <Button placeholder=""
            className="flex gap-2 items-center bg-blue text-white p-2 md:p-4 rounded-md"
            onClick={() => window.open("https://discord.gg/WWaQqWxVqC", '_blank')?.focus()}
          >
            Join our discord community
            <img src={discordIcon} width={20} alt="Discord Icon" />
          </Button>

          <div className="flex items-center gap-3">
            <span>or</span>
            <img src="./x.svg" alt="Social Icon 1" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" onClick={() => window.open("https://x.com/Traddoo", '_blank')?.focus()} />
            <img src="./img.svg" alt="Social Icon 2" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
            <img src="./instagram.svg" alt="Instagram Icon" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" onClick={() => window.open("https://www.instagram.com/traddoo/", '_blank')?.focus()} />
          </div>
        </div>
      </div>

      <div className="m-8 flex justify-center">
        <p className="text-gray-600 text-center">Monevis s.r.o. Company Number: 55215921, Podunajská 23/G Bratislava, Slovakia</p>
      </div>
    </div >
  );
};

export default Dashboard;
