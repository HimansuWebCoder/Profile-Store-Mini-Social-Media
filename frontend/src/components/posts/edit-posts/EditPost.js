import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { upload } from "../../upload/Upload";
import { apiUrl } from "../../../utils/utils";
import "./EditPost.css";

function EditPost({ redirectTo }) {
	const [editPost, setEditPost] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	const id = location.pathname.split("/")[2];
	useEffect(() => {
		console.log(location.pathname.split("/")[2]);
	}, []);

	function deletePost() {
		fetch(`${apiUrl}/api/posts/images/${id}`, {
			method: "delete",
		}).then(() => {
			navigate("/posts");
		});
	}

	function editImagePost() {
		fetch(`${apiUrl}/api/posts/images/${id}`, {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ image_url: editPost }),
		});
	}

	return (
		<div className="editpost-container">
			<div className="editpost-sub-container">
				<div id="cancel-img-edit">
					<Link class="edit-img-cancel-link" to="/posts">
						Cancel
					</Link>
				</div>
				<div className="editpost-popup-container">
					<Link to={`/posts/edit/${id}`}>
						<img
							className="editPostedImages"
							src="/assets/images/pencil.png"
							alt="edit.png"
						/>
					</Link>
					<h4>Edit</h4>
				</div>
				<div className="editpost-popup-container">
					<img
						onClick={deletePost}
						className="editPostedImages"
						src="/assets/images/delete.png"
						alt="delete.png"
					/>
					<h4>Delete</h4>
				</div>
			</div>
			<Outlet />
		</div>
	);
}

export default EditPost;
