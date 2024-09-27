import { Routes, Route } from "react-router-dom";

import Admin from "../pages/Admin/Admin";
import Login from "../pages/Auth/Auth";
import Feedbacks from "../pages/Feedbacks/Feedbacks";

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
