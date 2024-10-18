import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";

function About() {
	const [about, setAbout] = useState("");
	const [aboutId, setAboutId] = useState("");
	const [loading, setLoading] = useState(true);
	const location = useLocation();
	const pathname = location.pathname;
	useEffect(() => {
		fetch(`${apiUrl}/api/about`)
			.then((res) => res.json())
			.then((aboutData) => {
				console.log("about location", location);
				console.log("about data", aboutData);
				setTimeout(() => {
					setAbout(aboutData[0].description);
					setAboutId(aboutData[0].id);
					setLoading(false);
				}, 1000);
			});
	});

	return (
		<div>
			<div className="sub-admin-container editInfo">
				<Link to={`/admin/about/${aboutId}`}>
					<img
						className="editpencil"
						src="/assets/images/pencil.png"
						alt="editinfo"
					/>
				</Link>
				{/*<p>{about}</p>*/}
				{loading ? (
					<p style={{ color: "white" }}>Loading...</p>
				) : (
					<p style={{ color: "white", wordBreak: "break-word" }}>
						{about}
					</p>
				)}
			</div>
		</div>
	);
}

export default About;
