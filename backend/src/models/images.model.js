const db = require("../config/db");

// function getImagesModel() {
// 	return db("profiles")
// 	       .select("profiles.id");
// }

function getImagesModel() {
	return db("images")
	       .select("images.id", "images.image_url", "images.created_at");
}

function getOneImageModel() {
	return db("images")
	       .select("images.id", "images.image_url", "images.created_at");
}

function postImageModel(image, id, publicId) {
	return db("images")
		.insert({ image_url: image, profile_id: id, public_id: publicId })
		.returning("image_url") // or we can return "*" all
}

module.exports = {
	getImagesModel,
	postImageModel,
	getOneImageModel
};

