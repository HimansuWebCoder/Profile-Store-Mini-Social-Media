const db = require("../../config/db");

function getImages(req, res, db) {
	// res.send("get images");
	db("images")
		.returning("image_url")
		.then((img) => {
			res.status(200).json(img);
		})
		.catch((err) => {
			res.status(500).json({ err: "Internal server error" });
			console.log("Error occurred to retrieve image from DATABASE", err);
		});
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
	res.send("edit images");
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
