import { Checkbox, Chip, Typography } from "@material-tailwind/react";
import { useState } from "react";
import usflagIcon from '../../../assets/us_flag.svg'
const ContactInput = ({ type, label, setValue }: any) => {
  return (
    <div className="flex flex-col gap-2 w-full lg:max-w-[400px]">
      <label htmlFor={label} className="font-normal text-sm">
        {label} <span style={{ color: "#E11D48" }} >*</span>
      </label>
      <input
        title={label}
        type={type}
        placeholder={label}
        className="bg-black rounded-lg text-sm sm:text-base text-white placeholder:text-white py-3.5 px-4 focus:outline-0 border border-gray-800 focus:border-blue"
        required
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default function () {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    city: "",
    street: "",
    postalCode: "",
  });
  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <div className="pt-10 px-6 lg:px-10">
      <p className="text-xl font-semibold">Choose your account size</p>
      <p className="text-gray-600 text-xs">Choose the preferred account that suits your strategy and requirements.</p>
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex justify-between items-center bg-gray-900 shadow rounded p-4">
            <h2 className="text-lg font-semibold">$10,000.00</h2>
            <p className="p-1 text-xs text-blue font-semibold rounded-3xl bg-white px-3">$80.00</p>
          </div>
          <div className="flex justify-between items-center bg-gray-900 shadow rounded p-4">
            <h2 className="text-lg font-semibold">$10,000.00</h2>
            <p className="p-1 text-xs text-blue font-semibold rounded-3xl bg-white px-3">$30.00</p>
          </div>
          <div className="flex justify-between items-center bg-gray-900 shadow rounded p-4">
            <h2 className="text-lg font-semibold">$10,000.00</h2>
            <p className="p-1 text-xs text-blue font-semibold rounded-3xl bg-white px-3">$285.00</p>
          </div>
          <div className="flex justify-between items-center bg-gray-900 shadow rounded p-4">
            <h2 className="text-lg font-semibold">$10,000.00</h2>
            <p className="p-1 text-xs text-blue font-semibold rounded-3xl bg-white px-3">$715.00</p>
          </div>
          <div className="flex justify-between items-center bg-gray-900 shadow rounded p-4">
            <h2 className="text-lg font-semibold">$10,000.00</h2>
            <p className="p-1 text-xs text-blue font-semibold rounded-3xl bg-white px-3">$450.00</p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-center">
        <div>
          <p className="text-md font-semibold">MT5 - MonevisBrokers-Live</p>
          <p className="text-gray-600 text-xs">
            Own MT5 License. Our best trading challenge suitable for all traders
            with tight spreads and static drawdown.
          </p>
          <div className="mt-3 flex gap-2 flex-wrap">
            <Chip value="Own MT5 License" className="rounded-full  bg-light_green_2 text-dark_green text-sm font-normal" variant="outlined" size="sm" />
            <Chip value="Static Drawdown" className="rounded-full  bg-light_green_2 text-dark_green text-sm font-normal" variant="outlined" size="sm" />
            <Chip value="Tight Spreads" className="rounded-full  bg-light_green_2 text-dark_green text-sm font-normal" variant="outlined" size="sm" />
            <Chip value="New Trading" className="rounded-full  bg-light_green_2 text-dark_green text-sm font-normal" variant="outlined" size="sm" />
            <Chip value="Weekend Holding" className="rounded-full  bg-light_green_2 text-dark_green text-sm font-normal" variant="outlined" size="sm" />
            <Chip value="EAS Allowed" className="rounded-full  bg-light_green_2 text-dark_green text-sm font-normal" variant="outlined" size="sm" />
          </div>
        </div>
        <div className="mt-5 lg:mt-0">
          <img src="metatrader_image-d63a8953.png.png" alt="MetaTrader" className="lg:ml-4" />
          <p className="mt-5 text-xs text-gray-600 text-center lg:text-left">MonevisBrokers-Live</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xl font-semibold">Choose Addons</p>
        <p className="text-gray-600 text-xs">Choose your account addons to tweak your challenge</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-4 rounded-md">
            <div className="flex justify-between">
              <p className="text-md font-semibold">Increased Leverage</p>
              <span className="text-md font-semibold">+25%</span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-sm font-semibold text-gray-600">1:20</span>
              <span className="text-sm font-semibold text-gray-600">→</span>
              <span className="text-sm font-semibold text-green">1:50 (FX), 1:20 Gold</span>
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-md">
            <div className="flex justify-between">
              <p className="text-md font-semibold">Increased profit split</p>
              <span className="text-md font-semibold">+20%</span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-sm font-semibold text-gray-600">75%</span>
              <span className="text-sm font-semibold text-gray-600">→</span>
              <span className="text-sm font-semibold text-green">85% Profit Split</span>
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-md">
            <div className="flex justify-between">
              <p className="text-md font-semibold">Weekly Payouts</p>
              <span className="text-md font-semibold">+10%</span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-sm font-semibold text-gray-600">14 days</span>
              <span className="text-sm font-semibold text-gray-600">→</span>
              <span className="text-sm font-semibold text-green">Payout every 7 days</span>
            </div>
          </div>
        </div>
      </div>


      <div>
        <Typography placeholder="" variant="h5" className="mt-10 text-xl font-semibold">
          Personal Information
        </Typography>
        <Typography placeholder="" variant="small" className="text-gray-600 text-xs">
          Provide your details to complete your account purchase and start your business journey with us.
        </Typography>

        <div className="mt-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            <ContactInput
              type="text"
              label="First name"
              setValue={(value: any) => handleInputChange("firstname", value)}
            />
            <ContactInput
              type="text"
              label="Surname"
              setValue={(value: any) => handleInputChange("surname", value)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row">
            <ContactInput
              type="email"
              label="E-mail"
              setValue={(value: any) => handleInputChange("email", value)}
            />
            <ContactInput
              type="text"
              label="City"
              setValue={(value: any) => handleInputChange("city", value)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row mb-3">
            <ContactInput
              type="text"
              label="Street"
              setValue={(value: any) => handleInputChange("street", value)}
            />
            <ContactInput
              type="text"
              label="Postal Code"
              setValue={(value: any) => handleInputChange("postalCode", value)}
            />
          </div>
          <div className="flex gap-2 w-full lg:max-w-[832px] p-3.5 border border-gray-800 rounded-md bg-gray-900">
            <img src={usflagIcon} width={30} />
            <input
              title=""
              type="text"
              placeholder="United States"
              className="bg-gray-900 rounded-lg text-sm sm:text-base text-white placeholder:text-white  focus:outline-0"
              required
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          {/* <ContactInput
            type="text"
            label="Additional Information"
            setValue={(value: any) => handleInputChange("additionalInfo", value)}
          /> */}
        </div>

        <div className="mt-4">
          <Checkbox
            crossOrigin={undefined}
            color="blue"
            defaultChecked
            label={
              <Typography placeholder="" variant="small" className="text-gray-600 text-sm">
                I understand that Traddoo is only a Distributor of Certified Challenges for <a href="#" className="text-blue">Monevis Brokers Ltd.</a> and Does not act as the administrator.
              </Typography>
            }
          />
        </div>

        <div>
          <Checkbox
            crossOrigin={undefined}
            color="blue"
            label={
              <Typography placeholder="" variant="small" className="text-gray-600 text-sm">
                I declare that I have read and agree to the Business Terms and Conditions
              </Typography>
            }
          />
        </div>

        <div>
          <Checkbox
            crossOrigin={undefined}
            color="blue"
            label={
              <Typography placeholder="" variant="small" className="text-gray-600 text-sm">
                I declare that I have read and agree to the Cancellation and Refund Policy
              </Typography>
            }
          />
        </div>

        <Typography placeholder="" variant="small" className="my-4 text-pink bg-light_pink p-2 rounded">
          Blocked Country
        </Typography>

        <div className="flex justify-start gap-4 pb-4">
          <div className="flex justify-center">
            <button className="font-semibold w-full p-2 text-white rounded-lg bg-gray-900">
              Pay with Crypto
            </button>
          </div>
          <div className="flex justify-center">
            <button className="font-semibold w-full p-2 text-white rounded-lg bg-gray-900">
              Pay with Card
            </button>
          </div>
        </div>
      </div>

      <div className="m-8 flex justify-center">
        <p className="text-gray-600 text-center">Monevis s.r.o. Company Number: 55215921, Podunajská 23/G Bratislava, Slovakia</p>
      </div>
    </div>
  )
}