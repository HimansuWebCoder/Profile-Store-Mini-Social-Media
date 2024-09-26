import React from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Filter from "./Filter";
import ProfileFeedsContainer from "./Profile_feeds_container";
import "../styles/containers/layout.css";
import Login from "../pages/Login";

function Layout() {
	const location = useLocation();
	let filterComponent;
	let linkComponent;
	let navComponent;
	let feedsComponent;

	if (
		location.pathname !== "/profile-admin" &&
		location.pathname !== "/login"
	) {
		// filterComponent = <Filter />;
	}

	if (location.pathname !== "/login" && location.pathname !== "/signup") {
		navComponent = <Navbar />;
	}

	// if (location.pathname !== "/login") {
	// 	linkComponent = <Link to="/profile-admin">Profile Admin</Link>;
	// }

	// if (location.pathname === "/profile-admin") {
	// 	linkComponent = <Link to="/">Home</Link>;
	// 	feedsComponent = <ProfileFeedsContainer />;
	// } else if (location.pathname === "/login") {
	// 	linkComponent = null;
	// } else {
	// 	linkComponent = <Link to="/profile-admin">Profile Admin</Link>;
	// }

	if (location.pathname === "/") {
		linkComponent = <Link to="/profile-admin">Profile-Admin</Link>;
		feedsComponent = <ProfileFeedsContainer />;
	} else if (
		location.pathname === "/login" &&
		location.pathname === "/signup"
	) {
		linkComponent = null;
		feedsComponent = null;
		filterComponent = null;
	} else if (location.pathname === "/profile-admin") {
		linkComponent = <Link to="/">Home</Link>;
		feedsComponent = null;
	} else {
		linkComponent = <Link to="/profile-admin">Profile Admin</Link>;
		feedsComponent = null;
	}

	return (
		<div className="layout-container">
			{/*<Navbar />*/}
			{navComponent}
			{filterComponent}
			{linkComponent}
			{feedsComponent}
			<Outlet />
		</div>
	);
}

export default Layout;
