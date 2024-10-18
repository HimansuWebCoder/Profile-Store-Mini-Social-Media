import React, { useState, useEffect, Suspense } from "react";
import { useLocation, Link } from "react-router-dom";
import "./ProfileInfo.css";
import { apiUrl } from "../../utils/utils";
import ProfileLinks from "../Profile-links/ProfileLinks";

function ProfileInfo() {
	const [name, setName] = useState("");
	const [headline, setHeadline] = useState("");
	const [loading, setLoading] = useState(true);

	const [profileId, setProfileId] = useState(null);
	const location = useLocation();

	useEffect(() => {
		const fetchProfileInfo = async () => {
			try {
				const profileInfo = await fetch(`${apiUrl}/api/profile-info`);
				const profileInfoData = await profileInfo.json();
				// if (!profileInfoData.ok) {
				// 	alert("You are Offline");
				// }
				setTimeout(() => {
					setName(profileInfoData[0].name);
					setHeadline(profileInfoData[0].headline);
					setProfileId(profileInfoData[0].id);
					setLoading(false);
				}, 1000);
			} catch (error) {
				console.error("Error fetching profile-info:", error);
			}
		};
		fetchProfileInfo();
	}, [setProfileId, location]);

	return (
		<div id="profile-info-container">
			<Link to={`/admin/profile-info/${profileId}/edit`}>
				<img
					className="editpencil"
					src="/assets/images/pencil.png"
					alt="editinfo"
				/>
			</Link>
			{loading ? (
				<p>Loading....</p>
			) : (
				<>
					<h1 className="header">{name}</h1>
					<h3 className="header">{headline}</h3>
					<ProfileLinks />
				</>
			)}
		</div>
	);
}

export default ProfileInfo;
