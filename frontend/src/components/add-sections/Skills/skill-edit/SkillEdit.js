import { useState, useEffect } from "react";
import { apiUrl } from "../../../../utils/utils";
import { useLocation, useNavigate } from "react-router-dom";
import PopupEdit from "../../../Popup-edit/PopupEdit";
import "./SkillEdit.css";

function SkillEdit() {
	const [skills, setSkills] = useState([]);
	const [deleteSkill, setDeleteSkill] = useState("");
	const [loading, setLoading] = useState(true);
	const [skillId, setSkillId] = useState("");
	const [popupMessage, setPopupMessage] = useState(null);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${apiUrl}/api/skills`)
			.then((res) => res.json())
			.then((skillsData) => {
				console.log("skills data:", skillsData);
				setSkills(skillsData);
				setLoading(false);
			});
	}, [location]);

	function DeleteSkill(id) {
		fetch(`${apiUrl}/api/skills/${id}`, {
			method: "delete",
		})
			.then((res) => res.json())
			.then((deletedSkillData) => {
				setPopupMessage(deletedSkillData.message);
			});
	}

	return (
		<div className="skill-edit-container">
			{loading ? (
				<p>Loading....</p>
			) : (
				<div className="skill-edit-sub-container">
					<h1>Edit your skills</h1>
					{skills.map((skill) => (
						<>
							<p key={skill.id}>{skill.skill}</p>
							<button
								id="skill-edit-deleteBtn"
								onClick={() => DeleteSkill(skill.id)}
							>
								<img
									className="skill-edit-img"
									src="/assets/images/delete.png"
									alt="delete skills"
								/>
							</button>
							<button
								id="skill-edit-cancelBtn"
								onClick={() => navigate("/admin")}
							>
								<img
									className="skill-edit-img"
									src="/assets/images/cancel1.png"
									alt="cancel"
								/>
							</button>
						</>
					))}
					{popupMessage && <PopupEdit msg={popupMessage} />}
				</div>
			)}
		</div>
	);
}

export default SkillEdit;
