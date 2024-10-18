import { useState, useEffect } from "react";
import { apiUrl } from "../../../../utils/utils";
import { useLocation, useNavigate } from "react-router-dom";
import "./SkillEdit.css";

function SkillEdit() {
	const [skills, setSkills] = useState([]);
	const [deleteSkill, setDeleteSkill] = useState("");
	const [loading, setLoading] = useState(true);
	const [skillId, setSkillId] = useState("");
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
				alert(deletedSkillData.message);
				navigate("/admin");
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
							<button onClick={() => DeleteSkill(skill.id)}>
								Delete
							</button>
							<button onClick={() => navigate("/admin")}>
								Cancel
							</button>
						</>
					))}
				</div>
			)}
		</div>
	);
}

export default SkillEdit;
