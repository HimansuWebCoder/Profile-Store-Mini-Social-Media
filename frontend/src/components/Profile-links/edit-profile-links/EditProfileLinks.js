import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import "./EditProfileLinks.css";

function EditProfileLinks() {
	const [socialLinks, setSocialLinks] = useState([]);
	useEffect(() => {
		fetch(`${apiUrl}/api/profile-links`)
			.then((res) => res.json())
			.then((profileLinks) => {
				console.log("profile Links", profileLinks);
				console.log(profileLinks);
				setSocialLinks(profileLinks);
			});
	}, []);

	return (
		<div>
			<h1>Edit profile links</h1>
			{socialLinks.map((links) => (
				<p>{links.linkedin_url}</p>
			))}
		</div>
	);
}

export default EditProfileLinks;
