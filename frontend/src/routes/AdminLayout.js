import { Routes, Route } from "react-router-dom";

import Admin from "../pages/Admin/Admin";
import Login from "../pages/Auth/Auth";
import Feedbacks from "../pages/Feedbacks/Feedbacks";
import ProfileInfoEdit from "../components/Profile-info/Profile-Info-Edit/ProfileInfoEdit";
import SkillPost from "../components/add-sections/Skills/skill-post/SkillPost";
import SkillEdit from "../components/add-sections/Skills/skill-edit/SkillEdit";
import AboutEdit from "../components/add-sections/About/About-edit/AboutEdit";
import Upload from "../components/upload/Upload";

import "./AdminLayout.css";

function AdminLayout() {
	return (
		<div className="app-container">
			<Routes>
				<Route path="admin/*" element={<Admin />}>
					<Route
						path="profile-info/:id/edit"
						element={<ProfileInfoEdit />}
					/>
					<Route path="about/:id" element={<AboutEdit />} />
					<Route path="skill/post" element={<SkillPost />} />
					<Route path="skill/:id" element={<SkillEdit />} />
					<Route path="file" element={<Upload />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="feedbacks" element={<Feedbacks />} />
			</Routes>
		</div>
	);
}

export default AdminLayout;
