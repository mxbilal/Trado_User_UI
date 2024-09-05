import { FormEvent, useState } from "react";
import { Alert, Checkbox, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import logoBig from "../.././../assets/logo-big.png";
import { useNavigate } from "react-router-dom";

interface Input {
  type: string;
  label: string;
  setValue: (val: string) => void;
}
const ContactInput = ({ type, label, setValue }: Input) => {
  return (
    <div className="flex flex-col gap-2 w-full lg:max-w-[363px]">
      <label htmlFor={label} className="font-normal text-md sm:text-xl">
        {label}
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
const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (firstName === "" || lastName === "" || email === "" || phone === "") {
      setErr("Please fill in all the details.");
      setOpen(true);
      setLoading(false);
      return;
    }

    // try {
    //   const sender = {
    //     email,
    //     name: firstName + lastName,
    //     subject,
    //     phone,
    //     message,
    //   };
    //   await axios.post("/message", sender);
    //   setSuccess("Message sent successfully!");
    //   setOpen(true);
    //   setLoading(false);
    // } catch (err: unknown) {
    //   setErr("Some error occured. Try again!");
    //   setOpen(true);
    //   setLoading(false);
    // }
  };

  const closeAlert = () => {
    setErr("");
    setSuccess("");
    setOpen(false);
  };

  return (
    <>
      <Alert
        open={open}
        onClose={closeAlert}
        className="w-full max-w-[806px] mx-auto my-3 bg-red font-bold font-raleway"
        color={success === "" ? "gray" : "green"}
      >
        {err === "" || err}
        {/* {success==="" || <span>{success}</span>} */}
      </Alert>
      <form
        className="w-full max-w-[806px] mx-auto bg-dark-grey border border-light-grey rounded-lg font-poppins flex flex-col justify-center items-stretch gap-6 py-6 px-3 sm:p-6"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center flex-col gap-2 ">
          <img src={logoBig} width={150} />
          <p className="font-medium  text-4xl">Create New Account</p>
        </div>
        <div className="flex gap-6 flex-wrap ">
          <ContactInput
            type="text"
            label="First Name"
            setValue={setFirstName}
          />
          <ContactInput type="text" label="Last Name" setValue={setLastName} />
        </div>
        <div className="flex gap-6 flex-wrap">
          <ContactInput type="text" label="User Name" setValue={setPhone} />
          <ContactInput type="email" label="Email" setValue={setEmail} />
        </div>
        <div className="flex gap-6 flex-wrap">
          <ContactInput
            type="number"
            label="Phone Number"
            setValue={setPhone}
          />
          <div className="flex flex-col gap-2 w-full lg:max-w-[363px]">
            <label
              htmlFor="Select Country"
              className="font-normal text-md sm:text-xl"
            >
              Select Country
            </label>
            <select
              className="w-full pt-4 p-3 bg-gray-900 rounded text-gray-200 text-sm border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            >
              <option value="" selected disabled hidden>
                Select Country
              </option>
              <option className="bg-gray-900">Country 1</option>
              <option className="bg-gray-900">Country 2</option>
              <option className="bg-gray-900">Country 3</option>
              <option className="bg-gray-900">Country 4</option>
            </select>
          </div>
        </div>
        <div>
          <Checkbox
            crossOrigin={undefined}
            color="blue"
            defaultChecked
            label="I agree to the processing of my personal data according to our privacy policy"
          />
          <Checkbox crossOrigin={undefined} color="blue" label="I want to receive newsletters" />
          <Checkbox
            crossOrigin={undefined}
            color="blue"
            label="I confirm that my name is correct & matches my government ID"
          />
        </div>
        <p className="lg:max-w-[450px] text-xs -ml-3 pl-6 ">
          By logging in you confirm to our General Terms & Conditions.
        </p>
        <button
          type="submit"
          className="w-full bg-blue font-rubik font-poppins font-medium text-base py-3 rounded-lg text-center hover:bg-opacity-80 transition-all"
          disabled={loading}
        >
          Sign Up
        </button>
        <p className="text-gray-600 text-center ">
          Have an account?
          <span className="text-blue cursor-pointer " onClick={() => navigate('/login')}> Log In</span>
        </p>
      </form>
    </>
  );
};

const SignUp = () => {
  return (
    <main className="mt-16">
      <ContactForm />
    </main>
  );
};

export default SignUp;
