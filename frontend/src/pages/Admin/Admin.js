import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProfilePhoto from "../../components/Profile-photo/ProfilePhoto";
import ProfileInfo from "../../components/Profile-info/ProfileInfo";
import Skills from "../../components/add-sections/Skills/Skills";
import "./Admin.css";

function Admin() {
	const [profileId, setProfileId] = useState(null);
	const location = useLocation();

	useEffect(() => {
		console.log("profileid", profileId);
	});

	return (
		<div className="admin-container">
			<div className="admin-sub-container">
				<Link id="home-link" to="/">
					Home
				</Link>
				<div className="sub-admin-container editProfilePhoto">
					<img
						className="editpencil"
						src="/assets/images/pencil.png"
						alt="Edit Profile Photo"
					/>
				</div>
				<ProfilePhoto />
				<Outlet />
				<div className="sub-admin-container editInfo">
					<Link to={`/admin/profile-info/${profileId}/edit`}>
						<img
							className="editpencil"
							src="/assets/images/pencil.png"
							alt="editinfo"
						/>
					</Link>
				</div>
				<div className="sub-admin-container showinfo">
					<ProfileInfo
						setProfileId={setProfileId}
						location={location}
					/>
				</div>
				<div className="sub-admin-container edit">
					<h3>Add-Section</h3>
					<img
						className="add-button"
						src="/assets/images/add-button.png"
						alt="section"
					/>
				</div>
				<div className="sub-admin-container edit">
					<h3>About</h3>
					<img
						className="editpencil"
						src="/assets/images/pencil.png"
						alt="about"
					/>
				</div>
				<div className="sub-admin-container edit">
					<h3>Posts</h3>
					<img
						className="add-button"
						src="/assets/images/add-button.png"
						alt="post"
					/>
				</div>
				{/*<Skills />*/}
			</div>
		</div>
	);
}

export default Admin;
