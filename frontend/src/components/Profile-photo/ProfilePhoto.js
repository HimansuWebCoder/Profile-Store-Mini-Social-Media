import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../utils/utils";
import { ThemeContext } from "../../ThemeContext";
import "./ProfilePhoto.css";

function ProfilePhoto({ imgSrc, alt, size, bg, className }) {
	const [profileImg, setProfileImg] = useState("");
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`${apiUrl}/api/profile-photo`)
			.then((res) => res.json())
			.then((photo) => {
				setTimeout(() => {
					setProfileImg(photo[photo.length - 1].image);
					setLoading(false);
				}, 2000);
			});
	}, []);
	return (
		<div
			className="profile-photo-main-container"
			style={{ background: bg }}
		>
			<div className="profile-photo-container">
				<Link id="admin-link-profile" to="/admin">
					{loading ? (
						<p style={{ color: isDarkMode ? "white" : "white" }}>
							Loading...
						</p>
					) : (
						<img
							className={`${className}`}
							src={profileImg}
							alt={alt}
							// style={{ width: size, height: size }}
						/>
					)}
				</Link>
			</div>
		</div>
	);
}

export default ProfilePhoto;
