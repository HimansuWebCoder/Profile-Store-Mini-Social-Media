const db = require("../config/db");

function getImagesModel() {
	return db("profiles")
	       .select("*");
}

// function getImagesModel() {
// 	return db("images")
// 	       .select("*");
// }

function postImageModel(image, id, publicId) {
	return db("images")
		.insert({ image_url: image, profile_id: id, public_id: publicId })
		.returning("image_url") // or we can return "*" all
}

module.exports = {
	getImagesModel,
	postImageModel,
};
