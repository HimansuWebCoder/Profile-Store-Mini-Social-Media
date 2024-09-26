const db = require("../../config/db");

function getVideos(req, res, db) {
	res.send("get videos");
}

function postVideo(req, res, db) {
	res.send("post videos");
}

function editVideo(req, res, db) {
	res.send("edit videos");
}

function deleteVideo(req, res, db) {
	res.send("delete videos");
}

module.exports = {
	getVideos,
	postVideo,
	editVideo,
	deleteVideo,
};
