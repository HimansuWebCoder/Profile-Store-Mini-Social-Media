import { useState, useEffect } from "react";
import "./ProfileLinks.css";

function ProfileLinks() {
	const [links, setLinks] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/profile-links")
			.then((res) => res.json())
			.then((profileLinks) => {
				console.log(profileLinks);
				console.log(profileLinks);
				setLinks(profileLinks);
			});
	}, []);
	return (
		<div>
			{links.map((linkData) => (
				<div key={linkData.profileid}>
					<p> {linkData.linkedin_url}</p>
					<p> {linkData.github_url}</p>
					<p> {linkData.instagram_url}</p>
				</div>
			))}
		</div>
	);
}

export default ProfileLinks;
