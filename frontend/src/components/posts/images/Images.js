import { useContext, useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import ProfilePhoto from "../../Profile-photo/ProfilePhoto";
import PopupEdit from "../../Popup-edit/PopupEdit";
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
			<div className="create-post-container">
				<h1>Create Posts</h1>
				<Link className="create-post-link" to="/posts/create-post">
					<img
						className="add-button"
						src="/assets/images/add-button.png"
						alt="create-img"
					/>
				</Link>
			</div>
			{postImages.map((img) => (
				<div
					style={{
						border: isDarkMode
							? "1px solid black"
							: "1px solid white",
					}}
					className="post-sub-container"
					key={img.id}
				>
					<div
						style={{
							background: isDarkMode ? "#F5EFFF" : "#F7EFE5",
							color: isDarkMode ? "black" : "blue",
						}}
						className="posted-image-container"
					>
						<div
							// style={{
							// 	background: isDarkMode ? "#31363F" : "#87A2FF",
							// }}
							className="post-logo-edit-container"
						>
							<div className="profile-posted-img-main-container">
								<ProfilePhoto
									imgSrc="/assets/images/user.png"
									className="profile-main-img-posted-container"
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
						<div id="image-post-box-container">
							<img
								id="posted-img"
								src={img.image_url}
								alt="posted image"
							/>
						</div>
						<div
							// style={{
							// 	background: isDarkMode ? "#0B192C" : "#F5EFFF",
							// }}
							className="like-comment-share-container"
						>
							<div className="user-response-container">
								<img
									className="posted-image-emojis"
									src="/assets/images/like.png"
									alt="like"
								/>
								<h4>Like</h4>
							</div>
							<div className="user-response-container">
								<img
									className="posted-image-emojis"
									src="/assets/images/comment.png"
									alt="comment"
								/>
								<h4>Comment</h4>
							</div>
							<div className="user-response-container">
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
