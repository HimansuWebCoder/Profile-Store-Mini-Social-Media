import { useState, useEffect } from "react";
import { apiUrl } from "../../utils/utils";
import "./Profiles.css";

function Profiles() {
	const [profileName, setProfileName] = useState("");
	const [profileIntro, setProfileIntro] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${apiUrl}/api/profile-info`)
			.then((res) => res.json())
			.then((profilesData) => {
				console.log(profilesData);
				setTimeout(() => {
					setProfileName(profilesData[0].name);
					setProfileIntro(profilesData[0].headline);
					setLoading(false);
				}, 1000);
			});
	}, []);
	return (
		<div className="profiles-container">
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="profiles-info-container">
					<h2>{profileName}</h2>
					<h3>{profileIntro}</h3>
				</div>
			)}
		</div>
	);
}

export default Profiles;
