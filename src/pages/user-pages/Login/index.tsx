import { FormEvent, useState } from "react";
import logoBig from "../.././../assets/logo-big.png";
import { Alert, Radio } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Input {
  type: string;
  label: string;
  setValue: (val: string) => void;
}
const ContactInput = ({ type, label, setValue }: Input) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={label} className="font-normal text-sm sm:text-md">
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
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (email === "" || password === "") {
      setErr("Please fill in all the details.");
      setOpen(true);
      setLoading(false);
      return;
    }
    localStorage.setItem("token", "asdfsdfasd")
    navigate("/dashboard")
    try {
      const sender = {
        email,
        password,
      };
      await axios.post("/login", sender);
      setSuccess("Logged in successfully!");
      setOpen(true);
      setLoading(false);
    } catch (err: unknown) {
      setErr("Some error occurred. Try again!");
      setOpen(true);
      setLoading(false);
    }
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
        className="w-full max-w-[90%] mx-auto my-3 bg-red font-bold font-raleway"
        color={success === "" ? "gray" : "green"}
      >
        {err === "" || err}
      </Alert>
      <form
        className="w-full max-w-[550px] mx-auto bg-dark-grey border border-light-grey rounded-lg font-poppins flex flex-col justify-center items-center gap-6 py-6 px-3 sm:p-6"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center flex-col gap-2 text-center">
          <img src={logoBig} width={150} alt="Logo" />
          <p className="font-medium text-2xl sm:text-4xl">Log In</p>
        </div>
        <ContactInput type="email" label="Email" setValue={setEmail} />
        <ContactInput
          type="password"
          label="Password"
          setValue={setPassword}
        />
        <p className="max-w-full lg:max-w-[450px] text-xs">
          By logging in you confirm to our General Terms & Conditions.
        </p>
        <button
          type="submit"
          className="w-full max-w-[400px] bg-blue font-rubik font-poppins font-medium text-base py-3 rounded-lg text-center hover:bg-opacity-80 transition-all"
          disabled={loading}
        >
          Login
        </button>
        <p className="text-gray-600 text-center">
          Don’t Have An Account?
          <span className="text-blue cursor-pointer ml-1" onClick={() => navigate('/signup')}> Sign Up</span>
        </p>
      </form>
    </>
  );
};

const Login = () => {
  return (
    <main className="mt-16">
      <LoginForm />
    </main>
  );
};

export default Login;
