import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./scrollToTop.jsx";
import PopUpMessage from "./components/PopUpMessage.jsx";
function Layout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <PopUpMessage />
      {location.pathname.toString() === "/BookTest/payment" ? "" : <Header />}
      <Outlet />
      {location.pathname.toString() === "/BookTest/payment" ? "" : <Footer />}
    </>
  );
}

export default Layout;
