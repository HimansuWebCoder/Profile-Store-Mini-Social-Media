import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "./Layout.css";

function Layout() {
	return (
		<div className="layout-container">
			<Navbar />
			<Link
				style={{ color: "white", textDecoration: "none" }}
				to="/admin"
			>
				Admin
			</Link>
			<Outlet />
		</div>
	);
}

export default Layout;
