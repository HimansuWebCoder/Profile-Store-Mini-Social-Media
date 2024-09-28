import { Outlet, Routes, Route } from "react-router-dom";

import Admin from "../pages/Admin/Admin";
import Login from "../pages/Auth/Auth";
import Feedbacks from "../pages/Feedbacks/Feedbacks";
import ProfileInfoEdit from "../pages/Profile-Info-Edit/ProfileInfoEdit";

function PageRoutes() {
	return (
		<div className="app_container">
			<Routes>
				<Route path="edit" element={<ProfileInfoEdit />} />
			</Routes>
		</div>
	);
}

export default PageRoutes;
