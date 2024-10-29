import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../utils/utils";
import { ThemeContext } from "../../ThemeContext";
import "./Profiles.css";
import ProfilePhoto from "../../components/Profile-photo/ProfilePhoto";

function Profiles({ mode, setMode }) {
	const [profileName, setProfileName] = useState("");
	const [profileIntro, setProfileIntro] = useState("");
	const [loading, setLoading] = useState(true);
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);

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
				<p style={{ color: isDarkMode ? "black" : "white" }}>
					Loading...
				</p>
			) : (
				<div
					style={{
						color: isDarkMode ? "white" : "white",
						background: isDarkMode ? "#1e3e62" : "#1F2544",
					}}
					className="profiles-info-container"
				>
					<ProfilePhoto
						imgSrc="/assets/images/user.png"
						alt="profile image"
						size="auto"
						bg="none"
						className="profile-main-img-container"
					/>
					<div>
						<h2>{profileName}</h2>
						<h3>{profileIntro}</h3>
					</div>
				</div>
			)}
		</div>
	);
}

export default Profiles;
