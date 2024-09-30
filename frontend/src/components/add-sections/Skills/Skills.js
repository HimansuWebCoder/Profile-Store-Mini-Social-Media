import { useState, useEffect } from "react";
import "./Skills.css";

function Skills() {
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/skills")
			.then((res) => res.json())
			.then((skills) => {
				console.log(skills);
				setSkills(skills);
			});
	});
	return (
		<div>
			<h3>Skills</h3>
			{skills.map((skill) => (
				<div className="skill-sub-container" key={skill.id}>
					<p>{skill.skill}</p>
					<img src="" alt="skill" />
				</div>
			))}
		</div>
	);
}

export default Skills;
