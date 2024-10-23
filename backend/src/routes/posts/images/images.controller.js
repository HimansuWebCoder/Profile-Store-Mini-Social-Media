const db = require("../../../config/db");
const upload = require("../../../config/config");
const {
	getImagesModel,
	postImageModel,
} = require("../../../models/images.model");

function getImages(req, res) {
	getImagesModel()
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

function postImage(req, res) {
	const { image } = req.body;
	console.log("uploaded file: ", req.file);
	console.log("uploaded file: ", req.body);

	// const fullImgUrl = `http://localhost:8000/uploads/${req.file.filename}`;
	const fullImgUrl = `https://profile-store-mini-social-media.onrender.com/uploads/${req.file.filename}`;

	postImageModel(fullImgUrl)
		.then((image) => {
			console.log(image);
			res.status(200).json({
				message: "Post Uploaded Successfully",
				data: image,
			});
		})
		.catch((err) => {
			res.status(500).json({ err: "Internal Server Error" });
			console.log("Error happend insert images to DB", err);
		});
}

function editImage(req, res, db) {
	const { image } = req.body;
	const id = req.params.id;
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
	// res.send("delete images");
	const { id } = req.params;
	db("images")
		.del()
		.where({ id })
		.returning("*")
		.then((deletedImg) => {
			res.json({
				message: "deleted image Successfully",
			});
		});
}

module.exports = {
	getImages,
	postImage,
	editImage,
	deleteImage,
};
