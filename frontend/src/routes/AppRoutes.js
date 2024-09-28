import { Routes, Route } from "react-router-dom";

import Admin from "../pages/Admin/Admin";
import Login from "../pages/Auth/Auth";
import Feedbacks from "../pages/Feedbacks/Feedbacks";
import ProfileInfoEdit from "../pages/Profile-Info-Edit/ProfileInfoEdit";

function AppRoutes() {
	return (
		<div className="app_container">
			<Routes>
				<Route path="/admin/*" element={<Admin />}>
					<Route
						path="profile-info/:id/edit"
						element={<ProfileInfoEdit />}
					/>
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/feedbacks" element={<Feedbacks />} />
			</Routes>
		</div>
	);
}

export default AppRoutes;
