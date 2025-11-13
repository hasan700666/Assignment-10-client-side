import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar></Navbar>
      </header>

      <main className="flex-1 mt-[72px] ">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
