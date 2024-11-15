const db = require("../config/db");

function getImagesModel() {
	return db("profiles")
	       .select("*");
}

function postImageModel(image, id) {
	return db("images")
		.insert({ image_url: image, profile_id: id })
		.returning("image_url") // or we can return "*" all
}

module.exports = {
	getImagesModel,
	postImageModel,
};
