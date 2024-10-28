import "./Logo.css";
import { Link } from "react-router-dom";

function ProfileLogo() {
	return (
		<div className="profile_logo_container">
			<Link to="/">
				<img
					id="logo-image"
					src="/assets/images/Profile_Logo.png"
					alt="Profile_logo"
				/>
			</Link>
		</div>
	);
}

export default ProfileLogo;
