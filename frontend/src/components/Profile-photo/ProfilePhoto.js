import "./ProfilePhoto.css";

function ProfilePhoto({ imgSrc, alt, size, bg, className }) {
	return (
		<div
			className="profile-photo-main-container"
			style={{ background: bg }}
		>
			<div className="profile-photo-container">
				<img
					className={`${className}`}
					src={imgSrc}
					alt={alt}
					// style={{ width: size, height: size }}
				/>
			</div>
		</div>
	);
}

export default ProfilePhoto;
