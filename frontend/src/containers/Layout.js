import React from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Filter from "./Filter";
import "../styles/containers/layout.css";

function Layout() {
	const location = useLocation();
	let filterComponent;
	let linkComponent;

	if (location.pathname !== "/profile-admin") {
		filterComponent = <Filter />;
	}

	if (location.pathname === "/profile-admin") {
		linkComponent = <Link to="/">Home</Link>;
	} else {
		linkComponent = <Link to="/profile-admin">Profile Admin</Link>;
	}

	return (
		<div className="layout-container">
			<Navbar />
			{filterComponent}
			{linkComponent}
			{/* This is where your routed pages will render */}
			<Outlet />
		</div>
	);
}

export default Layout;
