import { useContext, useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import ProfilePhoto from "../../Profile-photo/ProfilePhoto";
import { ThemeContext } from "../../../ThemeContext";
import "./Images.css";

function Images() {
	const [postImages, setPostImages] = useState([]);
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	const location = useLocation();
	useEffect(() => {
		fetch(`${apiUrl}/api/posts/images`)
			.then((res) => res.json())
			.then((images) => {
				console.log(images);
				setPostImages(images);
			});
	}, [location]);
	return (
		<div
			style={{ color: isDarkMode ? "black" : "white" }}
			className="post-container"
		>
			{postImages.map((img) => (
				<div className="post-sub-container" key={img.id}>
					<div
						style={{
							background: isDarkMode ? "#FAF7F0" : "#FDFFE2",
							color: isDarkMode ? "white" : "black",
						}}
						className="posted-image-container"
					>
						<div
							style={{
								background: isDarkMode ? "#31363F" : "#87A2FF",
							}}
							className="post-logo-edit-container"
						>
							<div>
								<ProfilePhoto
									imgSrc="/assets/images/user.png"
									className="posted-image-logo"
								/>
							</div>
							<div>
								<Link to={`/posts/${img.id}`}>
									<img
										className="posted-image-logo"
										src="/assets/images/menu.png"
										alt="triple dot"
									/>
								</Link>
								<Outlet />
							</div>
						</div>
						<img
							id="posted-img"
							src={img.image_url}
							alt="posted image"
						/>
						<div
							style={{
								background: isDarkMode ? "#0B192C" : "#F5EFFF",
							}}
							className="like-comment-share-container"
						>
							<div>
								<img
									className="posted-image-emojis"
									src="/assets/images/like.png"
									alt="like"
								/>
								<h4>Like</h4>
							</div>
							<div>
								<img
									className="posted-image-emojis"
									src="/assets/images/comment.png"
									alt="comment"
								/>
								<h4>Comment</h4>
							</div>
							<div>
								<img
									className="posted-image-emojis"
									src="/assets/images/share.png"
									alt="share"
								/>
								<h4>Share</h4>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Images;
