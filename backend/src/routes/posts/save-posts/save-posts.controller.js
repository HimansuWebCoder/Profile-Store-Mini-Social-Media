const db = require("../../config/db");

function getSavedPosts(req, res, db) {
	res.send("get saved-posts");
}

function postSavePost(req, res, db) {
	res.send("post saved-posts");
}

function deleteSavedPost(req, res, db) {
	res.send("delete saved-posts");
}

module.exports = {
	getSavedPosts,
	postSavePost,
	deleteSavedPost,
};
