const express = require("express");
const db = require("../../../config/db"); // this should commented
const {
	getSkills,
	postSkill,
	editSkill,
	deleteSkill,
} = require("./skills.controller");

const skillsSectionRouter = express.Router();

// ---------------- User's Skills API End-Points START --------------------------
// GET user's Skills
skillsSectionRouter.get("/", (req, res) => {
	getSkills(req, res, db);
});

// POST user's Skills
skillsSectionRouter.post("/", (req, res) => {
	postSkill(req, res, db);
});

// UPDATE user's Skills
skillsSectionRouter.put("/:id", (req, res) => {
	editSkill(req, res, db);
});

// DELETE user's Skills
skillsSectionRouter.delete("/:id", (req, res) => {
	deleteSkill(req, res, db);
});
// ---------------- User's Skills API End-Points END --------------------------

module.exports = skillsSectionRouter;
