const db = require("../../config/db");

function getImages(req, res, db) {
	res.send("get images");
}

function postImage(req, res, db) {
	res.send("post images");
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
