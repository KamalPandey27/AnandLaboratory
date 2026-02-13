import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./AdminNavbar.jsx";
import { useContext } from "react";
import { TestContext } from "../context/TestContext.jsx";
import LoginPage from "../components/LoginPage.jsx";
function AdminLayout() {
  const { admin } = useContext(TestContext);
  return (
    <>
      {!admin && <LoginPage />}
      {admin && (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </>
  );
}

export default AdminLayout;
