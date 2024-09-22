const db = require("../../config/db");

function getProfileFeeds(req, res, db) {
	res.send("profile-feeds");
}

function getProfileFeedsPost(req, res, db) {
	res.send("posts");
}

function createPost(req, res, db) {
	res.send("create post");
}

function getUserProfiles(req, res, db) {
	res.send("get user profiles");
}

module.exports = {
	getProfileFeeds,
	getProfileFeedsPost,
	createPost,
	getUserProfiles,
};
