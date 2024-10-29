import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { apiUrl } from "../../utils/utils";
import { ThemeContext } from "../../ThemeContext";
import { ProfilePhotoContext } from "../../ProfilePhotoContext";
import "./ProfilePhoto.css";

function ProfilePhoto({ imgSrc, alt, size, bg, className }) {
	// const [profileImg, setProfileImg] = useState("");
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	const { profilePhoto, loading } = useContext(ProfilePhotoContext);
	// const [loading, setLoading] = useState(true);
	// const location = useLocation();

	// const profileImg = profilePhoto;
	// useEffect(() => {
	// 	fetch(`${apiUrl}/api/profile-photo`)
	// 		.then((res) => res.json())
	// 		.then((photo) => {
	// 			setProfileImg(photo[photo.length - 1].image);
	// 			setLoading(false);
	// 		});
	// 	setProfileImg(profilePhoto);
	// 	setLoading(false);
	// }, [location]);

	return (
		<div
			className="profile-photo-main-container"
			style={{ background: bg }}
		>
			<div className="profile-photo-container">
				<Link
					style={{ textDecoration: "none" }}
					id="admin-link-profile"
					to="/admin"
				>
					{/*{loading ? (
						<p style={{ color: isDarkMode ? "black" : "white" }}>
							Loading...
						</p>
					) : (
						<img
							className={`${className}`}
							src={profileImg}
							alt={alt}
							// style={{ width: size, height: size }}
						/>
					)}*/}
					{loading ? (
						<p style={{ color: isDarkMode ? "black" : "white" }}>
							Loading...
						</p>
					) : (
						<img
							className={`${className}`}
							src={profilePhoto}
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
