import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "./Layout.css";

function Layout() {
	return (
		<div className="layout-container">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default Layout;
