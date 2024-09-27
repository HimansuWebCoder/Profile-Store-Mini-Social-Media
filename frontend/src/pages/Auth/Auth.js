import Signup from "../../components/Auth/Signup/Signup";
import Login from "../../components/Auth/Login/Login";

function LoginPage() {
	return (
		<div className="Login-container">
			<Login />
			<Signup />
		</div>
	);
}

export default LoginPage;
