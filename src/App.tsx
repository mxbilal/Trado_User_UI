import Header from "./components/header/Header";
import { Outlet } from "react-router";
import { ThemeProvider } from "@material-tailwind/react";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setShowFooter(() => false)
    } else {
      setShowFooter(() => true)
    }
  }, [location.pathname])
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className="max-w-[1300px] w-full mx-auto lg:px-5 2xl:px-0">
          <Outlet />
        </div>
        {showFooter && <Footer />}
      </ThemeProvider>
    </>
  );
}

export default App;
