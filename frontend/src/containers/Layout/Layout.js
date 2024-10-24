import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Profiles from "../../pages/Profiles/Profiles";
import Images from "../../components/posts/images/Images";
import { ThemeContext } from "../../ThemeContext";
import "./Layout.css";

function Layout({ mode, setMode }) {
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);

	return (
		<div className="layout-container">
			<Navbar mode={mode} setMode={setMode} />
			<div
				style={{
					background: isDarkMode ? "skyblue" : "yellow",
				}}
				className="layout-block-box"
			>
				<Link
					style={{
						color: isDarkMode ? "red" : "blue",
						background: isDarkMode ? "white" : "yellow",
						textDecoration: "none",
					}}
					to="/admin"
				>
					Admin
				</Link>
				{/*<Profiles mode={mode} setMode={setMode} />*/}
				<Link
					style={{
						color: isDarkMode ? "red" : "blue",
						background: isDarkMode ? "white" : "yellow",
						textDecoration: "none",
					}}
					to="/profiles"
				>
					Profiles
				</Link>
				<Link
					style={{
						color: isDarkMode ? "red" : "blue",
						background: isDarkMode ? "white" : "yellow",
						textDecoration: "none",
					}}
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
