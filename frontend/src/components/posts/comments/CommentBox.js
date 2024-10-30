import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import "./CommentBox.css";
function CommentBox() {
	const [comments, setComments] = useState([]);
	const [postComments, setPostComments] = useState("");
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${apiUrl}/api/posts/comments`)
			.then((res) => res.json())
			.then((comments) => {
				setComments(comments);
			});
	}, [location]);

	function inputComent(e) {
		setPostComments(e.target.value);
	}

	function addComment() {
		fetch(`${apiUrl}/api/posts/comments`, {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ comment: postComments }),
		})
			.then((res) => res.json())
			.then((allComment) => {
				// setComments(allComment.data);
				setPostComments("");
				navigate("/posts/comments");

				// console.log(allComment.data);
			});
	}

	return (
		<div className="comment-box-container">
			<div className="comment-box">
				<div id="cancel-comment-box">
					<Link id="cancel-comment" to="/posts">
						Cancel
					</Link>
				</div>
				<div>
					<h1>Comment box</h1>
					<ul>
						{comments.map((comment) => (
							<li key={comment.id}>{comment.comment}</li>
						))}
					</ul>
					<input
						type="text"
						value={postComments}
						onChange={inputComent}
						placeholder="send comment"
					/>
					<button onClick={addComment}>send</button>
				</div>
			</div>
		</div>
	);
}

export default CommentBox;
