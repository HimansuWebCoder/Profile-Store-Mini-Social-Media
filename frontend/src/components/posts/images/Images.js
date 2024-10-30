import { useContext, useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import ProfilePhoto from "../../Profile-photo/ProfilePhoto";
import PopupEdit from "../../Popup-edit/PopupEdit";
import CommentBox from "../comments/CommentBox";
import { ThemeContext } from "../../../ThemeContext";
import "./Images.css";

const shareData = {
	title: "Profile-Store",
	url: "https://profile-store-mini-social-media.onrender.com",
};

function Images() {
	const [postImages, setPostImages] = useState([]);
	const [like, setLike] = useState("");
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	const [loader, setLoader] = useState(true);
	const location = useLocation();
	useEffect(() => {
		fetch(`${apiUrl}/api/posts/images`)
			.then((res) => res.json())
			.then((images) => {
				console.log(images);
				setTimeout(() => {
					setPostImages(images);
					setLoader(false);
				}, 1000);
			});
	}, [location]);

	// function shareHandler() {
	// 	navigator.share(shareData);
	// }

	function handleShare() {
		if (navigator.share) {
			navigator
				.share(shareData)
				.then(() => console.log("Share successful"))
				.catch((error) => console.error("Error sharing:", error));
		} else {
			alert("Sharing is not supported on this device.");
		}
	}

	useEffect(() => {
		fetch(`${apiUrl}/api/profiles`)
			.then((res) => res.json())
			.then((peopleLikes) => {
				setLike(peopleLikes[3].likes_count);
			});
	}, []);

	function likebtn() {
		fetch(`${apiUrl}/api/posts/likes`, {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ profile_id: 1 }),
		})
			.then((res) => res.json())
			.then(() => {
				fetch(`${apiUrl}/api/profiles`)
					.then((res) => res.json())
					.then((peopleLikes) => {
						setLike(peopleLikes[3].likes_count);
					});
			});
	}

	return (
		<div
			style={{ color: isDarkMode ? "black" : "white" }}
			className="post-container"
		>
			<div
				style={{
					background: isDarkMode ? "#2C4E80" : "#00215E",
				}}
				className="create-post-container"
			>
				<h1 style={{ color: isDarkMode ? "white" : "white" }}>
					Create Posts
				</h1>
				<Link className="create-post-link" to="/posts/create-post">
					<img
						className="add-button"
						src="/assets/images/add-button.png"
						alt="create-img"
					/>
				</Link>
			</div>

			{loader ? (
				<h2 style={{ textAlign: "center" }}>Loading...</h2>
			) : (
				<>
					{postImages.map((img) => (
						<div
							// style={{
							// 	border: isDarkMode
							// 		? "1px solid black"
							// 		: "1px solid white",
							// }}
							className="post-sub-container"
							key={img.id}
						>
							<div
								style={{
									background: isDarkMode ? "white" : "white",
									color: isDarkMode ? "black" : "black",
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
								<hr />
								<div id="image-post-box-container">
									<img
										id="posted-img"
										src={img.image_url}
										alt="posted image"
									/>
								</div>
								<hr />
								<div
									// style={{
									// 	background: isDarkMode ? "#0B192C" : "#F5EFFF",
									// }}
									className="like-comment-share-container"
								>
									<div className="user-response-container">
										<div>
											<img
												onClick={likebtn}
												className="posted-image-emojis"
												src="/assets/images/like.png"
												alt="like"
											/>
											<span id="like-count">{like}</span>
										</div>
										<h4>Like</h4>
									</div>
									<div className="user-response-container">
										<Link to="/posts/comments">
											<img
												className="posted-image-emojis"
												src="/assets/images/comment.png"
												alt="comment"
											/>
										</Link>
										<h4>Comment</h4>
									</div>
									<div className="user-response-container">
										<img
											onClick={handleShare}
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
				</>
			)}
		</div>
	);
}

export default Images;
