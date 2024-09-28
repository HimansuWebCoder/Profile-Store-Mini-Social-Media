import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ProfilePhoto from "../../components/Profile-photo/ProfilePhoto";
import ProfileInfo from "../../components/Profile-info/ProfileInfo";
import { useLocation } from "react-router-dom";
import "./Admin.css";

function Admin() {
	const [profileId, setProfileId] = useState(null);
	const location = useLocation();

	return (
		<div className="admin-container">
			<div className="admin-assistant-container">
				<div className="sub-admin-container"></div>
				<div className="sub-admin-container editProfilePhoto">
					<img
						className="editpencil"
						src="assets/images/pencil.png"
						alt="Edit Profile Photo"
					/>
				</div>
				<ProfilePhoto />
				<div className="sub-admin-container editinfo">
					<Link to={`/admin/profile-info/${profileId}/edit`}>
						<img
							className="editpencil"
							src="assets/images/pencil.png"
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
				<div className="sub-admin-container section">
					<h3>Add-Section</h3>
					<img
						className="add-button"
						src="assets/images/add-button.png"
						alt="section"
					/>
				</div>
				<div className="sub-admin-container about">
					<h3>About</h3>
					<img
						className="editpencil"
						src="assets/images/pencil.png"
						alt="about"
					/>
				</div>
				<div className="sub-admin-container posts">
					<h3>Posts</h3>
					<img
						className="add-button"
						src="assets/images/add-button.png"
						alt="post"
					/>
				</div>
			</div>
			<Outlet />
		</div>
	);
}

export default Admin;
