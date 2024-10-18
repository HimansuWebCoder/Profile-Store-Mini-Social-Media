import { useState, useEffect } from "react";
import { apiUrl } from "../../utils/utils";
import "./Profiles.css";

function Profiles({ mode, setMode }) {
	const [profileName, setProfileName] = useState("");
	const [profileIntro, setProfileIntro] = useState("");
	const [loading, setLoading] = useState(true);
	let color;
	let border;
	if (mode === "white") {
		color = "black";
		border = "1px solid black";
	} else {
		color = "white";
		border = "1px solid white";
	}

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
		<div style={{ color: color }} className="profiles-container">
			{loading ? (
				<p>Loading...</p>
			) : (
				<div
					style={{ color: color, border: border }}
					className="profiles-info-container"
				>
					<h2>{profileName}</h2>
					<h3>{profileIntro}</h3>
				</div>
			)}
		</div>
	);
}

export default Profiles;
