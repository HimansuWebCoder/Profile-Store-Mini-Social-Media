const express = require("express");
const db = require("../../../config/db");
const {
	getExperiences,
	postExperience,
	editExperience,
	deleteExperience,
} = require("./experiences.controller");

const experiencesSectionRouter = express.Router();

// ---------------- User's Experience API End-Points START --------------------------
// GET users's Experiences
experiencesSectionRouter.get("/", (req, res) => {
	getExperiences(req, res, db);
});

// POST users's Experiences
experiencesSectionRouter.post("/", (req, res) => {
	postExperience(req, res, db);
});

// UPDATE users's Experiences
experiencesSectionRouter.put("/:id", (req, res) => {
	editExperience(req, res, db);
});

// DELETE users's Experiences
experiencesSectionRouter.delete("/:id", (req, res) => {
	deleteExperience(req, res, db);
});

// ---------------- User's Experience API End-Points END --------------------------

module.exports = experiencesSectionRouter;
