const express = require("express");
const {
	getProfileFeeds,
	getProfileFeedsPost,
	createPost,
	getUserProfiles,
} = require("../controllers/profile-feeds/profile-feeds.controller");
const db = require("../config/db");
const profileFeedsRouter = express.Router();

// GET profile-feeds
profileFeedsRouter.get("/", (req, res) => {
	getProfileFeeds(req, res, db);
});

// GET profile-feeds-post
profileFeedsRouter.get("/posts", (req, res) => {
	getProfileFeedsPost(req, res, db);
});

// POST users post
profileFeedsRouter.post("/posts/createPost", (req, res) => {
	createPost(req, res, db);
});

// GET users profiles
profileFeedsRouter.get("/userProfiles", (req, res) => {
	getUserProfiles(req, res, db);
});

module.exports = profileFeedsRouter;
