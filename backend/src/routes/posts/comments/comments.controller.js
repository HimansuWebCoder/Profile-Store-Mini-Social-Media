const {
	getCommentModel,
	postCommentModel,
	editCommentModel,
	deleteCommentModel,
} = require("../../../models/comment.model");

const db = require("../../../config/db");

function getComments(req, res) {
	// getCommentModel()
	// 	.then((comments) => {
	// 		console.log(comments);
	// 		return res.json(comments);
	// 	})
	// 	.catch((error) => {
	// 		res.status(500).json({ Error: `Internal Server Error: ${error}` });
	// 	});

	db("comments")
	  .join("images", "comments.image_id", "=", "images.id")
	  .select("*")
	  .then(comments => {
	  	console.log(comments);
	  	return res.json(comments);
	  })
}

function getOnePostAllComments(req, res) {
	const { image_id } = req.params;
   const email = req.session.email;

	if (!email) {
		return res.status(400).json({Error: "Login to comment"});
	}


	let msg = ["Not found any comments"];

	db('comments')
	.join('images', 'comments.image_id', '=', 'images.id')
	.join('profiles', 'comments.profile_email', '=', 'profiles.email')
	.join('profile_photo', 'comments.profile_email', '=', 'profile_photo.profile_email')
	.join('profile_info', 'comments.profile_email', '=', 'profile_info.profile_email')
	.select("*")
	.orderBy('comments.id', 'desc')
	.where("image_id", image_id)
	.then(comments => {
		console.log(comments);
		// return res.json(comments);
		if (comments.length) {
			return res.status(200).json(comments);
		} else {
			return res.status(404).json(msg);
		}
	})
}

function postComment(req, res) {
	const { comment } = req.body;

	const email = req.session.email;

	// if (!email) {
	// 	return res.status(400).json({Error: "Login to comment"});
	// }

	// db("profiles")
	//    .select("*")
	//    .join("images", "profiles.id", "=", "images.profile_id")
	//    .join("images", "profiles.id", "=", "images.profile_id")
	//    .where({email})
	//    .then(user => {
	//    	const profileId = user[0].id
	//   	console.log("profile id", profileId)

	// 		postCommentModel(comment, profileId, image_id)
	// 			.then((comments) => {
	// 				res.json({
	// 					data: comments,
	// 					message: "comment added successfully!",
	// 				});
	// 			})
	// 			.catch((error) => {	// 				res.status(500).json({ Error: `Internal Server Error: ${error}` });
	// 			});

	//    })

	db("images")
	.join("profiles")
	.select("*")
	.first()
	.then(user => {
		const imgId = user.id
	  	// console.log("profile id", profileId);
	  	console.log("users", user);

			postCommentModel(comment, imgId)
				.then((comments) => {
					res.json({
						data: comments,
						message: "comment added successfully!",
					});
				})
				.catch((error) => {
					res.status(500).json({ Error: `Internal Server Error: ${error}` });
				});
	})
}

function postOneComment(req, res) {
   const { comment } = req.body;
   const { imageId } = req.params

   const email = req.session.email;
   if (!email) {
   	res.status(400).json("email required to post comment")
   }

	db("images")
	.join("comments", "images.id", "=", "comments.image_id")
	.join("profiles", "images.profile_id", "=", "profiles.id")
	.select("*")
	.then(user => {
		// const imgId = user[0].id
		// const profileId = user[0].email
	  	// console.log("profile id", profileId);
	  	// console.log("users", user);
	  	// console.log("image id", imgId);

			postCommentModel(comment, email, imageId)
				.then((comments) => {
					res.json({
						data: comments,
						message: "comment added successfully!",
					});
				})
				.catch((error) => {
					res.status(500).json({ Error: `Internal Server Error: ${error}` });
				});
	})
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
	getOnePostAllComments,
	postComment,
	postOneComment,
	editComment,
	deleteComment,
};
