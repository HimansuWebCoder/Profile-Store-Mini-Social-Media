import ProfilePhoto from "../../components/Profile-photo/ProfilePhoto";
import ProfileInfo from "../../components/Profile-info/ProfileInfo";
import "./Admin.css";

function Admin() {
	return (
		<div className="admin-container">
			<div className="sub-admin-container"></div>
			<div className="sub-admin-container"></div>
			<ProfilePhoto />
			<div className="sub-admin-container editinfo">
				<img src="" alt="editinfo" />
			</div>
			<div className="sub-admin-container showinfo">
				<ProfileInfo />
			</div>
			<div className="sub-admin-container section">
				<div className="add-section">Add Section</div>
			</div>
			<div className="sub-admin-container about">About</div>
			<div className="sub-admin-container posts">Posts</div>
		</div>
	);
}

export default Admin;
