const {
	getCommentModel,
	postCommentModel,
	editCommentModel,
	deleteCommentModel,
} = require("../../../models/comment.model");

function getComments(req, res) {
	getCommentModel()
		.then((comments) => {
			console.log(comments);
			return res.json(comments);
		})
		.catch((error) => {
			res.status(500).json({ Error: `Internal Server Error: ${error}` });
		});
}

function postComment(req, res) {
	const { comment } = req.body;
	postCommentModel(comment)
		.then((comments) => {
			res.json({
				data: comments,
				message: "comment added successfully!",
			});
		})
		.catch((error) => {
			res.status(500).json({ Error: `Internal Server Error: ${error}` });
		});
}

function editComment(req, res) {
	const { comment } = req.body;
	const { id } = req.params;
	try {
		editCommentModel(id, comment)
			.then((commentData) => {
				res.json({
					message: "Comment updated successfully!",
					data: commentData,
				});
			})
			.catch((error) => {
				console.error("Database error:", `${error}`);
				res.status(500).json({
					Error: `Database Error: ${error}`,
				});
			});
	} catch (error) {
		res.status(500).json({ Error: `error : ${error.message}` });
	}
}

function deleteComment(req, res) {
	const id = req.params.id;
	deleteCommentModel(id)
		.then((msg) => {
			res.json("comment deleted successfully");
		})
		.catch((error) => {
			res.status(500).json({ Error: `Internal Server Error: ${error}` });
		});
}

module.exports = {
	getComments,
	postComment,
	editComment,
	deleteComment,
};
