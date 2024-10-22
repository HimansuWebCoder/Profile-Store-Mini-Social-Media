const db = require("../config/db");

function getImagesModel() {
	return db("images").returning("image_url");
}

function postImageModel(image) {
	return db("images")
		.returning("image_url") // or we can return "*" all
		.insert({ image_url: image });
}

module.exports = {
	getImagesModel,
	postImageModel,
};
