import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
	return (
		<div className="layout-container">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default Layout;
