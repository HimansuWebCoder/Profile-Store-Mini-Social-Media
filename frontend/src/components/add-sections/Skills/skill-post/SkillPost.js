import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../../../utils/utils";
import "./SkillPost.css";

function SkillPost() {
	const [skillInput, setSkillInput] = useState("");
	const navigate = useNavigate();
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	function handleSubmit() {
		fetch(`${apiUrl}/api/skills`, {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ skill: skillInput }),
		})
			.then((res) => res.json())
			.then((skillData) => {
				setSkillInput("");
				inputRef.current.focus();
				alert(skillData.message);
				// console.log("skill added: ", skillData);
				// navigate("/admin");
			});
	}

	return (
		<div className="post-skill-container">
			<h1 style={{ color: "white" }}>Post Skills</h1>
			<input
				type="text"
				value={skillInput}
				placeholder="Add your skills"
				ref={inputRef}
				onChange={(e) => setSkillInput(e.target.value)}
			/>
			<button onClick={handleSubmit}>add</button>
			<button onClick={() => navigate("/admin")}>Cancel</button>
		</div>
	);
}

export default SkillPost;
