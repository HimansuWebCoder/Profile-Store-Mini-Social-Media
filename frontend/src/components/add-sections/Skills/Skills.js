import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import "./Skills.css";

function Skills() {
	const [skills, setSkills] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const location = useLocation();

	useEffect(() => {
		fetch(`${apiUrl}/api/skills`)
			.then((res) => res.json())
			.then((skills) => {
				if (skills.Error) {
					setError(skills.Error);
					setSkills([]);
					setLoading(false);
				} else {
					setTimeout(() => {
						setSkills(skills);
						setError("");
						setLoading(false);
					}, 1000);
				}
			});
	}, [location]);
	return (
		<div className="skills-main-container">
			<div className="skills-view-container">
				<h3>Skills</h3>
				<div>
					<Link className="skill-links " to="/admin/skill/post">
						Post
					</Link>
					<Link className="skill-links " to="/admin/skill/edit">
						Edit
					</Link>
				</div>
			</div>
			{loading ? (
				<p style={{ color: "white" }}>Loading....</p>
			) : (
				<div className="skills-container">
					{skills.length === 0 ? (
						<p>{error}</p>
					) : (
						<>
							{skills.map((skill) => (
								<div
									className="skill-sub-container"
									key={skill.id}
								>
									<p>{skill.skill}</p>
								</div>
							))}
						</>
					)}
				</div>
			)}
		</div>
	);
}

export default Skills;
