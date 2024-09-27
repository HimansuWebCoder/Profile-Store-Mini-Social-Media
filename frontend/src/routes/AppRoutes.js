import { Routes, Route } from "react-router-dom";

import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Feedbacks from "../pages/Feedbacks";

function AppRoutes() {
	return (
		<div className="app_container">
			<Routes>
				<Route path="/admin" element={<Admin />} />
				<Route path="/login" element={<Login />} />
				<Route path="/feedbacks" element={<Feedbacks />} />
			</Routes>
		</div>
	);
}

export default AppRoutes;
