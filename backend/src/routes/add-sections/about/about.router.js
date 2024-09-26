const express = require("express");
const db = require("../../../config/db");
const { getAboutProfile, editAboutProfile } = require("./about.controller");
const aboutSectionRouter = express.Router();

// ---------------- User's About API End-Points START -------------------------
// GET user's About
aboutSectionRouter.get("/", (req, res) => {
	getAboutProfile(req, res, db);
});

// UPDATE user's About
aboutSectionRouter.put("/:id", (req, res) => {
	editAboutProfile(req, res, db);
});

// ---------------- User's About API End-Points END --------------------------

module.exports = aboutSectionRouter;
