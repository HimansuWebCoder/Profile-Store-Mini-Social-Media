import { Link } from "react-router-dom";

import Navbar from "../components/navigation-bar/Navbar";
import Logo from "../components/navigation-bar/nav-components/Logo";
import Setting from "../components/navigation-bar/nav-components/Setting";
import Mode from "../components/navigation-bar/nav-components/System_mode";
import "../styles/containers/profile_nav_container.css";

function ProfileNavContainer() {
	return (
		<div className="profile_container">
			<Logo />
			<Navbar />
			<Mode />
			<Setting />
		</div>
	);
}

export default ProfileNavContainer;
