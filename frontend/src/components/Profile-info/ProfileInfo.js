import React, { useState, useEffect, Suspense } from "react";
import "./ProfileInfo.css";

const ProfileLinks = React.lazy(() => import("../Profile-links/ProfileLinks"));
// const apiUrl = process.env.REACT_APP_API_URL_LOCAL;
const apiUrl = process.env.REACT_APP_API_URL_PROD;

function ProfileInfo({ setProfileId, location }) {
	const [name, setName] = useState("");
	const [headline, setHeadline] = useState("");
	const [loading, setLoading] = useState(true);

	// console.log(apiUrl);
	useEffect(() => {
		console.log("offline URL:", apiUrl);
	});
	useEffect(() => {
		const fetchProfileInfo = async () => {
			try {
				console.log("Fetching profile info...");
				const profileInfo = await fetch(
					// "https://profile-store-mini-social-media.onrender.com/api/profile-info",
					`${apiUrl}/api/profile-info`,
				);
				const profileInfoData = await profileInfo.json();
				// Simulate delay to showcase skeleton
				setTimeout(() => {
					setName(profileInfoData[0].name);
					setHeadline(profileInfoData[0].headline);
					setLoading(false); // Stop showing loader
					setProfileId(profileInfoData[0].id);
				}, 2000);
			} catch (error) {
				console.error("Error fetching profile-info:", error);
				setLoading(false); // Stop loader in case of error
			}
		};
		fetchProfileInfo();
	}, [setProfileId, location]);

	// Log the loading state to debug
	console.log("Loading state:", loading);

	function Glimmer() {
		return (
			<div className="glimmer-panel">
				<div className="glimmer-line medium" />
				<div className="glimmer-line short" />
				<div className="glimmer-line" />
			</div>
		);
	}

	// If loading, show skeleton loader
	if (loading) {
		console.log("Displaying Glimmer loader");
		return <Glimmer />;
	}

	return (
		<div id="profile-info-container">
			<h1 className="header">{name}</h1>
			<h3 className="header">{headline}</h3>
			<Suspense fallback={<Glimmer />}>
				<ProfileLinks />
			</Suspense>
		</div>
	);
}

export default ProfileInfo;
