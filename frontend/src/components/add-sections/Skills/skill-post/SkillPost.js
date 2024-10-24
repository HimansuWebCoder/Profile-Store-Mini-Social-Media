import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../../../utils/utils";
import PopupEdit from "../../../Popup-edit/PopupEdit";
import "./SkillPost.css";

function SkillPost() {
	const [skillInput, setSkillInput] = useState("");
	const [popupMessage, setPopupMessage] = useState(null);
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
				// setPopupMessage(skillData.message);
				setTimeout(() => {
					setPopupMessage(skillData.message);
				}, 1000);
			});
	}

	return (
		<div className="post-skill-container">
			<div className="post-skill-sub-container">
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
				{popupMessage && <PopupEdit msg={popupMessage} redirect="/admin" />}
			</div>
		</div>
	);
}

export default SkillPost;
