import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import "./Skills.css";

function Skills() {
	const [skills, setSkills] = useState([]);
	const [error, setError] = useState("");
	const location = useLocation();

	useEffect(() => {
		fetch(`${apiUrl}/api/skills`)
			.then((res) => res.json())
			.then((skills) => {
				if (skills.Error) {
					setError(skills.Error);
					setSkills([]);
				} else {
					setSkills(skills);
					setError("");
				}
			});
	}, [location]);
	return (
		<div>
			<h3>Skills</h3>
			<Link to="/admin/skill/post">Post</Link>
			<br />
			<Link to="/admin/skill/edit">Edit</Link>
			{skills.length === 0 ? (
				<p>{error}</p>
			) : (
				<>
					{skills.map((skill) => (
						<div className="skill-sub-container" key={skill.id}>
							<p>{skill.skill}</p>
						</div>
					))}
				</>
			)}
		</div>
	);
}

export default Skills;
