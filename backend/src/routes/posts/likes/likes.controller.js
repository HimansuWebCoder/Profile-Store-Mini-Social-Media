// const db = require("../../../config/db");
const db = require("../../../config/db");
// const { getLikesModel } = require("../../../models/likes.model");

function getLikes(req, res, db) {
	// res.send("get likes");
	try {
		db.select("*")
			.from("likes")
			.then((likes) => {
				console.log("these are my likes", likes);
				res.json(likes);
			})
			.catch((error) => {
				res.json({ error: "error occurred to insert likes to db" });
			});
	} catch (error) {
		console.log(error);
		res.json(error);
	}

	// try {
	// 	db("likes")
	// 		.join("profiles", "likes.profile_id", "profiles.id")
	// 		.select("*")
	// 		.then((data) => {
	// 			res.json(data.length);
	// 		})
	// 		.catch((err) => {
	// 			res.json(err);
	// 		});
	// } catch (err) {
	// 	res.json(err);
	// }
}

// function postLike(req, res, db) {
// 	const { like } = req.body;
// 	if (like)
// 		try {
// 			db("likes")
// 				.insert({ profile_id: like })
// 				.returning("*")
// 				.then((likes) => {
// 					res.json(likes);
// 				})
// 				.catch((err) => {
// 					res.json({ err: "user does not exist" });
// 				});
// 		} catch (err) {
// 			res.json(err);
// 		}
// }

function postLike(req, res, db) {
	const { profile_id } = req.body; // profile_id is the ID of the profile being liked

	if (profile_id) {
		// Increment the likes_count for the given profile_id
		db("profiles")
			.where("id", "=", profile_id) // `id` is the primary key in the `profiles` table
			.increment("likes_count", 1) // Increment likes_count by 1
			.returning("likes_count") // Return the updated likes_count
			.then((updatedLikesCount) => {
				if (updatedLikesCount.length) {
					res.json({ likes_count: updatedLikesCount[0] }); // Send the updated count to the client
				} else {
					res.status(404).json({ error: "Profile not found" });
				}
			})
			.catch((err) => {
				res.status(500).json({
					error: "Error incrementing likes count",
				});
			});
	} else {
		res.status(400).json({ error: "Profile ID not provided" });
	}
}

// function editLike(req, res, db) {
// 	// res.send("post likes");
// 	console.log(req.body);
// 	// const { id, likes, profile_id } = req.body;
// 	// db("likes")
// 	// 	.where({ id })
// 	// 	.update({ profile_id: likes })
// 	// 	.returning("*")
// 	// 	.then((likes) => {
// 	// 		res.json(likes);
// 	// 	})
// 	// 	.catch((error) => {
// 	// 		res.json({ error: "Error Happend" });
// 	// 	});
// }

function editLike(req, res, db) {
	const { like } = req.body;

	db("likes")
		.where({ profile_id })
		.update({ profile_id: like })
		.returning("*")
		.then((updatedLikes) => {
			if (updatedLikes.length === 0) {
				res.status(404).json({ error: "Like not found." });
			} else {
				res.json(updatedLikes);
			}
		})
		.catch((error) => {
			console.error(error);
			res.status(500).json({ error: "Error updating like." });
		});
}

module.exports = {
	getLikes,
	editLike,
	postLike,
};
