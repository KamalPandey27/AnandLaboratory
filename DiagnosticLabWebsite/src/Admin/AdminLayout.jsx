import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./AdminNavbar.jsx";

function AdminLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AdminLayout;
