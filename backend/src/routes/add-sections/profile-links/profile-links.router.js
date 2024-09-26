const express = require("express");
const db = require("../../../config/db");
const {
	getProfileLinks,
	postProfileLink,
	editProfileLink,
	deleteProfileLink,
} = require("./profile-links.controller");

const profileLinksSectionRouter = express.Router();

// ---------------- User's Profile_links API End-Points START -------------------------
// GET user's Profile links
profileLinksSectionRouter.get("/", (req, res) => {
	getProfileLinks(req, res, db);
});

// POST user's profile link
profileLinksSectionRouter.post("/", (req, res) => {
	postProfileLink(req, res, db);
});

// UPDATE user's profile link
profileLinksSectionRouter.put("/:id", (req, res) => {
	editProfileLink(req, res, db);
});

// DELETE user's profile link
profileLinksSectionRouter.delete("/:id", (req, res) => {
	deleteProfileLink(req, res, db);
});
// ---------------- User's Profile_links API End-Points END --------------------------

module.exports = profileLinksSectionRouter;
