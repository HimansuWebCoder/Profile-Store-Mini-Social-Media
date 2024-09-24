const db = require("../../config/db");

function getLikes(req, res, db) {
	// res.send("get likes");
	// try {
	// 	db("likes")
	// 		.returning("*")
	// 		.then((likes) => {
	// 			res.json(likes);
	// 		})
	// 		.catch((error) => {
	// 			res.json({ error: "error occurred to insert likes to db" });
	// 		});
	// } catch (error) {
	// 	console.log(error);
	// 	res.json(error);
	// }

	try {
		db("likes")
			.join("profiles", "likes.profile_id", "profiles.id")
			.select("*")
			.then((data) => {
				res.json(data.length);
			})
			.catch((err) => {
				res.json(err);
			});
	} catch (err) {
		res.json(err);
	}
}

function postLike(req, res, db) {
	const { like } = req.body;
	if (like)
		try {
			db("likes")
				.insert({ profile_id: like })
				.returning("*")
				.then((likes) => {
					res.json(likes);
				})
				.catch((err) => {
					res.json({ err: "user does not exist" });
				});
		} catch (err) {
			res.json(err);
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
