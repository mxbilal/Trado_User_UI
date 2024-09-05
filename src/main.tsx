import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/landing-page/home/index.tsx";
import Competitions from "./pages/landing-page/competitions/index.tsx";
import Rules from "./pages/landing-page/rules/index.tsx";
import ContactUs from "./pages/landing-page/contact/index.tsx";
import PrivayPolicy from "./pages/landing-page/privacy-policy/index.tsx";
import CookiePolicy from "./pages/landing-page/cookie-policy/index.tsx";
import TermsAndConditions from "./pages/landing-page/terms-and-conditions/index.tsx";
import ReturnPolicy from "./pages/landing-page/return-policy/index.tsx";
import Login from "./pages/user-pages/Login/index.tsx";
import SignUp from "./pages/user-pages/Signup/index.tsx";
import MyAccount from "./pages/user-pages/Account/index.tsx";
import Leaderboard from "./pages/user-pages/Leaderboard/index.tsx";
import Dashboard from "./pages/user-pages/Dashboard/index.tsx";
import WallOfLove from "./pages/landing-page/wall-of-love/index.tsx";
import Purchases from "./pages/user-pages/Purchases/index.tsx";
import TradeAccount from "./pages/user-pages/TradeAccount/index.tsx";
// import Rewards from "./pages/landing-page/rewards/index.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/competition", element: <Competitions /> },
      // {
      //   path: "/rewards",
      //   element: <Rewards />,
      // },
      { path: "/rules", element: <Rules /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/privacy-policy", element: <PrivayPolicy /> },
      { path: "/cookie-policy", element: <CookiePolicy /> },
      { path: "/terms-of-use", element: <TermsAndConditions /> },
      { path: "/return-policy", element: <ReturnPolicy /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/leaderboard", element: <Leaderboard /> },
      { path: "/my-account", element: <MyAccount /> },
      { path: "/wall-of-love", element: <WallOfLove /> },
      { path: "/purchases", element: <Purchases /> },
      { path: "/trade-account", element: <TradeAccount /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
