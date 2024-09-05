import Logo from "../../assets/logo.png";
import Button from "../Button";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import MenuLink from "./MenuLink";
import { useLocation } from "react-router-dom";

const NO_HEADERS_ROUTES = ["/login", "/signup"];

const linksBeforeLogin = [
  {
    page: "Wall of love",
    path: "/wall-of-love",
  },
  // {
  //   page: "Rewards",
  //   path: "/rewards",
  // },
  {
    page: "Rules",
    path: "/rules",
  },
  {
    page: "Contact",
    path: "/contact",
  },
];

const linksAfterLogin = [
  {
    page: "Dashboard",
    path: "/dashboard",
  },
  {
    page: "Leaderboard",
    path: "/leaderboard",
  },
  {
    page: "My Account",
    path: "/my-account",
  },
];

const LinkWrapper = ({ links, showLogin, showLogout }: any) => {
  return (
    <div className="hidden md:flex items-center gap-6 text-base">
      {showLogin && <MenuLink link={{ page: "Home", path: "/" }} />}
      {links.map((link: any, index: any) => (
        <MenuLink key={index} link={link} />
      ))}
      {/* <Button path="https://prop.traddoo.com/login" variant="primary" classes="font-inter text-sm">
        Start Trading
      </Button> */}
      {showLogin && (
        <Button path="/login" variant="primary" classes="font-inter text-sm">
          Login
        </Button>
      )}

      {showLogout && (
        <Button path="/login" variant="primary" classes="font-inter text-sm">
          <span
            onClick={() => {
              localStorage.removeItem("token");
              // window.location.replace("/");
            }}
          >
            Logout
          </span>
        </Button>
      )}
    </div>
  );
};

const LogoLink = () => {
  return (
    <a
      href="/"
      className="flex justify-center items-center gap-3 relative z-50"
      title="Toddoo"
    >
      <img
        src={Logo}
        title="Toddoo"
        alt="Toddoo"
        width={26}
        height={26}
        className="bg-light-grey rounded-lg"
        loading="lazy"
      />
      <span className="text-xl">Traddoo</span>
    </a>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [links, setLinks]: any = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      !NO_HEADERS_ROUTES.includes(location?.pathname)
    ) {
      setLinks(() => linksAfterLogin);
      setShowLogin(false);
      setShowLogout(true);
    } else if (
      !localStorage.getItem("token") &&
      !NO_HEADERS_ROUTES.includes(location?.pathname)
    ) {
      setLinks(() => linksBeforeLogin);
      setShowLogin(true);
      setShowLogout(false);
    } else if (NO_HEADERS_ROUTES.includes(location?.pathname)) {
      setShowLogin(false);
      setShowLogout(false);
    }
  }, [location.pathname]);

  return (
    <nav className="bg-dark-grey border-b-[1px] border-b-light-grey py-4 font-raleway font-bold px-5 2xl:px-0 sticky z-50 top-0">
      <div className="max-w-[1300px] w-full flex justify-between items-center mx-auto">
        <LogoLink />
        <LinkWrapper
          links={links}
          showLogin={showLogin}
          showLogout={showLogout}
        />
        <MobileMenu
          links={links}
          open={open}
          setOpen={setOpen}
          showLogin={showLogin}
          showLogout={showLogout}
        />
      </div>
    </nav>
  );
};

export default Header;
