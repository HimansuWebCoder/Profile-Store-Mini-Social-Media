import { Link } from "react-router-dom";

import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import Setting from "../../components/Setting/Setting";
import Mode from "../../components/Mode/Mode";

import "./Navbar.css";

function NavContainer() {
	return (
		<div className="Nav-container">
			<Logo />
			<Search />
			<Mode />
			<Setting />
		</div>
	);
}

export default NavContainer;
