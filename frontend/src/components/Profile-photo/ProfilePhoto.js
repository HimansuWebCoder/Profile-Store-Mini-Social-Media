import "./ProfilePhoto.css";

function ProfilePhoto({ imgSrc, alt, size, bg, className }) {
	return (
		<div style={{ background: bg }} className="profile-photo-container">
			<img
				className={`${className}`}
				src={imgSrc}
				alt={alt}
				// style={{ width: size, height: size }}
			/>
		</div>
	);
}

export default ProfilePhoto;
