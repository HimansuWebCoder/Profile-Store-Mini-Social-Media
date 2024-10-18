import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Profiles from "../../pages/Profiles/Profiles";
import "./Layout.css";

function Layout({ mode, setMode }) {
	let color;
	if (mode === "white") {
		color = "black";
	} else {
		color = "white";
	}
	return (
		<div className="layout-container">
			<Navbar mode={mode} setMode={setMode} />
			<Link style={{ color: color, textDecoration: "none" }} to="/admin">
				Admin
			</Link>
			<Profiles mode={mode} setMode={setMode} />
			<Outlet />
		</div>
	);
}

export default Layout;
