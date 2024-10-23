import { Link } from "react-router-dom";
import "./ProfilePhoto.css";

function ProfilePhoto({ imgSrc, alt, size, bg, className }) {
	return (
		<div
			className="profile-photo-main-container"
			style={{ background: bg }}
		>
			<div className="profile-photo-container">
				<Link id="admin-link-profile" to="/admin">
					<img
						className={`${className}`}
						src={imgSrc}
						alt={alt}
						// style={{ width: size, height: size }}
					/>
				</Link>
			</div>
		</div>
	);
}

export default ProfilePhoto;
