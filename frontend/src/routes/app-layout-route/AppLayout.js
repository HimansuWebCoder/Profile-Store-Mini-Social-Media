import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../containers/Layout/Layout";
import Profiles from "../../pages/Profiles/Profiles";
import ImagePosts from "../../components/posts/images/Images";
import EditPost from "../../components/posts/edit-posts/EditPost";
import EditImagePost from "../../components/posts/edit-image-posts/EditImagePost";

import "./AppLayout.css";

function AppLayout({ mode, setMode }) {
	return (
		<div id="color" className="app_container">
			<Routes>
				<Route
					path="/"
					element={<Layout mode={mode} setMode={setMode} />}
				>
					<Route path="profiles" element={<Profiles />} />
					<Route path="posts" element={<ImagePosts />}>
						<Route path=":id" element={<EditPost />} />
						<Route path="edit/:id" element={<EditImagePost />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default AppLayout;
