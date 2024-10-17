import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";

function About({ aboutId, setAboutId }) {
	const [about, setAbout] = useState("");
	const location = useLocation();
	const pathname = location.pathname;
	useEffect(() => {
		fetch(`${apiUrl}/api/about`)
			.then((res) => res.json())
			.then((aboutData) => {
				console.log("about location", location);
				console.log("about data", aboutData);
				setAbout(aboutData[0].description);
				setAboutId(aboutData[0].id);
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
				<p>{about}</p>
			</div>
		</div>
	);
}

export default About;
