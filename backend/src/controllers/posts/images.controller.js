const db = require("../../config/db");

function getImages(req, res, db) {
	db("images")
		.returning("image_url")
		.then((img) => {
			res.status(200).json(img);
		})
		.catch((err) => {
			res.status(500).json({ err: "Internal server error" });
			console.log("Error occurred to retrieve image from DATABASE", err);
		});

	// db("images")
	// 	.join("profiles", "images.profile_id", "profiles.id")
	// 	.select("*")
	// 	.returning("*")
	// 	.then((data) => {
	// 		res.json(data);
	// 	})
	// 	.catch((err) => {
	// 		res.json(err);
	// 	});
}

function postImage(req, res, db) {
	const { image } = req.body;
	db("images")
		.returning("image_url") // or you can return "*" all
		.insert({ image_url: image })
		.then((image) => {
			res.status(200).json(image);
		})
		.catch((err) => {
			res.status(500).json({ err: "Internal Server Error" });
			console.log("Error happend insert images to DB", err);
		});
}

function editImage(req, res, db) {
	const { image } = req.body;
	const id = req.params.imageId;
	db("images")
		.where({ id: id })
		.update({ image_url: image })
		.returning("*")
		.then((img) => {
			res.json(img);
		})
		.catch((error) => {
			res.json(error);
		});
}

function deleteImage(req, res, db) {
	res.send("delete images");
}

module.exports = {
	getImages,
	postImage,
	editImage,
	deleteImage,
};
