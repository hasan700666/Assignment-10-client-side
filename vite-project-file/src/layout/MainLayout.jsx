import React, { use } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const Layout = () => {
  const { isDarkMode } = use(ThemeContext);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar></Navbar>
      </header>

      <main className="flex-1 mt-18">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
