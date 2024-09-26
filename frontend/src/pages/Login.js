import { useLocation, Link } from "react-router-dom";
import ProfileFeedsContainer from "../containers/Profile_feeds_container";
import Navbar from "../components/navigation-bar/Navbar";
import ProfileNavContainer from "../containers/Navbar";
import ProfileAdmin from "./Profile_admin";
function Login() {
	const location = useLocation();
	let loginPageComponent;
	let navbarComponent;
	let isAdminComponent;

	if (location.pathname !== "/login") {
		loginPageComponent = <ProfileFeedsContainer />;
		isAdminComponent = <ProfileAdmin />;
	}

	// if (location.pathname === "/login") {
	// 	navbarComponent = <ProfileAdmin />;
	// }

	return (
		<div>
			<h1>I am Login page</h1>
			{isAdminComponent}
			{/*<Link to="/">Go to Home</Link>*/}
			{/*{loginPageComponent}*/}
			{/*{navbarComponent}*/}
		</div>
	);
}

// const location = useLocation();
// 	let filterComponent;
// 	let linkComponent;

// 	if (location.pathname !== "/profile-admin") {
// 		filterComponent = <Filter />;
// 	}

// 	if (location.pathname === "/profile-admin") {
// 		linkComponent = <Link to="/">Home</Link>;
// 	} else {
// 		linkComponent = <Link to="/profile-admin">Profile Admin</Link>;
// 	}

export default Login;
