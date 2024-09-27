import { useState, useEffect } from "react";
import ProfileLinks from "../Profile-links/ProfileLinks";
import "./ProfileInfo.css";

function ProfileInfo() {
	const [name, setName] = useState("");
	const [headline, setHeadline] = useState("");

	useEffect(() => {
		fetch("http://localhost:8000/api/profile-info")
			.then((res) => res.json())
			.then((profileInfo) => {
				setName(profileInfo[0].name);
				setHeadline(profileInfo[0].headline);
			});
	});
	return (
		<div id="profile-info-container">
			<h1>{name}</h1>
			<h3>{headline}</h3>
			<ProfileLinks />
		</div>
	);
}

export default ProfileInfo;
