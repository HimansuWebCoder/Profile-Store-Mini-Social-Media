import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../containers/Layout/Layout";
import Profiles from "../../pages/Profiles/Profiles";
import Posts from "../../components/posts/images/Images";
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
					<Route path="posts" element={<Posts />} />
				</Route>
			</Routes>
		</div>
	);
}

export default AppLayout;
