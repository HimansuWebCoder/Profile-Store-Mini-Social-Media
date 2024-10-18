import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../../../utils/utils";

function SkillPost() {
	const [skillInput, setSkillInput] = useState("");
	const navigate = useNavigate();

	function handleSubmit() {
		fetch(`${apiUrl}/api/skills`, {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ skill: skillInput }),
		})
			.then((res) => res.json())
			.then((skillData) => {
				console.log("skill added: ", skillData);
				navigate("/admin");
			});
	}

	return (
		<div
			style={{
				width: "400px",
				height: "200px",
				backgroundColor: "rgba(0, 0, 0, 0.2)",
				position: "absolute",
				top: "700px",
			}}
		>
			<h1 style={{ color: "white" }}>Post Skills</h1>
			<input
				type="text"
				value={skillInput}
				onChange={(e) => setSkillInput(e.target.value)}
			/>
			<button onClick={handleSubmit}>add</button>
			<button onClick={() => navigate("/admin")}>Cancel</button>
		</div>
	);
}

export default SkillPost;
