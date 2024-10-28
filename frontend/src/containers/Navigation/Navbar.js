import { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import Setting from "../../components/Setting/Setting";
import Mode from "../../components/Mode/Mode";
import { ThemeContext } from "../../ThemeContext";

import "./Navbar.css";

function NavContainer({ mode, setMode }) {
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	return (
		<div
			style={{ backgroundColor: isDarkMode ? "#1F2544" : "#35374B" }}
			// style={{ backgroundColor: isDarkMode ? "#E2F1E7" : "#35374B" }}
			className="Nav-container"
		>
			<Logo />
			<Search />
			<Mode mode={mode} setMode={setMode} />
			<Setting />
		</div>
	);
}

export default NavContainer;
