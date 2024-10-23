import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Profiles from "../../pages/Profiles/Profiles";
import Images from "../../components/posts/images/Images";
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
			<div className="layout-block-box">
				<Link
					style={{ color: color, textDecoration: "none" }}
					to="/admin"
				>
					Admin
				</Link>
				{/*<Profiles mode={mode} setMode={setMode} />*/}
				<Link
					style={{ color: color, textDecoration: "none" }}
					to="/profiles"
				>
					Profiles
				</Link>
				<Link
					style={{ color: color, textDecoration: "none" }}
					to="/posts"
				>
					Posts
				</Link>
				{/*<Images />*/}
				{/*<EditPost />*/}
			</div>
			<Outlet />
		</div>
	);
}

export default Layout;
