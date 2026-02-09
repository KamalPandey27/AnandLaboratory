import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./scrollToTop.jsx";
import PopUpMessage from "./components/PopUpMessage.jsx";
function Layout() {
  const isAdminPath = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      <PopUpMessage />
      {!isAdminPath && <Header />}
      <Outlet />
      {!isAdminPath && <Footer />}
    </>
  );
}

export default Layout;
