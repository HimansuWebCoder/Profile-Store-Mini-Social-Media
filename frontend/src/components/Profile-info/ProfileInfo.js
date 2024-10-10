// import { useState, useEffect, Suspense } from "react";
// import ProfileLinks from "../Profile-links/ProfileLinks";
// import "./ProfileInfo.css";

// function ProfileInfo({ setProfileId, location }) {
// 	const [name, setName] = useState("");
// 	const [headline, setHeadline] = useState("");
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		const fetchProfileInfo = async () => {
// 			try {
// 				const profileInfo = await fetch(
// 					"https://profile-store-mini-social-media.onrender.com/api/profile-info",
// 				);
// 				const profileInfoData = await profileInfo.json();
// 				setName(profileInfoData[0].name);
// 				setHeadline(profileInfoData[0].headline);
// 				setLoading(false);
// 				setProfileId(profileInfoData[0].id);
// 			} catch (error) {
// 				console.error("Error fetching profile-info:", error);
// 				setLoading(false);
// 			}
// 		};
// 		fetchProfileInfo();
// 	}, [setProfileId, location]);

// 	// useEffect(() => {
// 	// 	fetch("https://profile-store-mini-social-media.onrender.com/api/profile-info")
// 	// 		.then((res) => res.json())
// 	// 		.then((profileInfo) => {
// 	// 			setTimeout(() => {
// 	// 				setName(profileInfo[0].name);
// 	// 				setHeadline(profileInfo[0].headline);
// 	// 				setLoading(false);
// 	// 			}, 2000);
// 	// 			setProfileId(profileInfo[0].id);
// 	// 		})
// 	// 		.catch((error) => {
// 	// 			console.error("Error fetching profile info:", error);
// 	// 			setLoading(false); // In case of error, stop loading
// 	// 		});
// 	// }, [setProfileId, location]);

// 	if (loading) {
// 		return <div style={{ color: "white" }}>Loading profile info...</div>;
// 	}

// 	function Glimmer() {
// 		return (
// 			<div className="glimmer-panel">
// 				<div className="glimmer-line" />
// 				<div className="glimmer-line" />
// 				<div className="glimmer-line" />
// 			</div>
// 		);
// 	}

// 	return (
// 		<div id="profile-info-container">
// 			<Suspense fallback={<Glimmer />}>
// 				<h1 className="header">{name}</h1>
// 				<h3 className="header">{headline}</h3>
// 			</Suspense>
// 			<ProfileLinks />
// 		</div>
// 	);
// }

import React, { useState, useEffect, Suspense } from "react";
import "./ProfileInfo.css";

const ProfileLinks = React.lazy(() => import("../Profile-links/ProfileLinks"));

function ProfileInfo({ setProfileId, location }) {
	const [name, setName] = useState("");
	const [headline, setHeadline] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProfileInfo = async () => {
			try {
				console.log("Fetching profile info...");
				const profileInfo = await fetch(
					"https://profile-store-mini-social-media.onrender.com/api/profile-info",
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
