import { useState } from "react";
import Layout from "../containers/Layout/Layout";
import "./AppLayout.css";

function AppLayout({ mode, setMode }) {
	return (
		<div id="color" className="app_container">
			<Layout mode={mode} setMode={setMode} />
		</div>
	);
}

export default AppLayout;
