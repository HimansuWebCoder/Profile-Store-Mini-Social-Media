import { Link } from "react-router-dom";

import Navbar from "../components/Navigation";
import Logo from "../components/Logo";
import Setting from "../components/Setting";
import Mode from "../components/Mode";

function NavContainer() {
	return (
		<div className="profile_container">
			<Logo />
			<Navbar />
			<Mode />
			<Setting />
		</div>
	);
}

export default NavContainer;
