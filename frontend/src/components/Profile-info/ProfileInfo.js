import { useState, useEffect } from "react";
import ProfileLinks from "../Profile-links/ProfileLinks";
import "./ProfileInfo.css";

function ProfileInfo({ setProfileId, location }) {
	const [name, setName] = useState("");
	const [headline, setHeadline] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://profile-store-mini-social-media.onrender.com/api/profile-info")
			.then((res) => res.json())
			.then((profileInfo) => {
				setTimeout(() => {
					setName(profileInfo[0].name);
					setHeadline(profileInfo[0].headline);
					setLoading(false);
				}, 2000);
				setProfileId(profileInfo[0].id);
			})
			.catch((error) => {
				console.error("Error fetching profile info:", error);
				setLoading(false); // In case of error, stop loading
			});
	}, [setProfileId, location]);

	if (loading) {
		// Display loading message while data is being fetched
		return <div style={{ color: "white" }}>Loading profile info...</div>;
	}

	return (
		<div id="profile-info-container">
			<h1 className="header">{name}</h1>
			<h3 className="header">{headline}</h3>
			<ProfileLinks />
		</div>
	);
}

export default ProfileInfo;
