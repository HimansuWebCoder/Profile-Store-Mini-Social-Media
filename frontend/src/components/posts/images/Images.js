import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import ProfilePhoto from "../../Profile-photo/ProfilePhoto";
import "./Images.css";

function Images() {
	const [postImages, setPostImages] = useState([]);
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
		<div className="post-container">
			{postImages.map((img) => (
				<div className="post-sub-container" key={img.id}>
					<div className="posted-image-container">
						<div className="post-logo-edit-container">
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
						<div className="like-comment-share-container">
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
