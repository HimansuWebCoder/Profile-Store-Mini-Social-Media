import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProfilePhoto from "../../components/Profile-photo/ProfilePhoto";
import ProfileInfo from "../../components/Profile-info/ProfileInfo";
import About from "../../components/add-sections/About/About";
import Skills from "../../components/add-sections/Skills/Skills";
import "./Admin.css";

function Admin() {
	return (
		<div className="admin-container">
			<div className="admin-sub-container">
				<Link id="home-link" to="/">
					<img id="home-route" src="/assets/images/home.png" />
				</Link>
				<div className="sub-admin-container editProfilePhoto">
					<img
						className="editpencil"
						src="/assets/images/pencil.png"
						alt="Edit Profile Photo"
					/>
				</div>
				{/*Profile Photo Component*/}
				<ProfilePhoto
					imgSrc="/assets/images/user.png"
					alt="profile image"
					size="150px"
					bg="#d2e0fb"
				/>
				<Outlet />
				<div className="sub-admin-container showinfo">
					<ProfileInfo />
				</div>
				<div className="sub-admin-container add-section">
					<h3>Add-Section</h3>
					<img
						className="add-button"
						src="/assets/images/add-button.png"
						alt="section"
					/>
				</div>
				<About />
				<div className="sub-admin-container edit">
					<h3>Posts</h3>
					<img
						className="add-button"
						src="/assets/images/add-button.png"
						alt="post"
					/>
				</div>
				<Skills />
			</div>
		</div>
	);
}

export default Admin;
