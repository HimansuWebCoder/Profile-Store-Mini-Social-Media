const express = require("express");
const {
	getExperiences,
	postExperience,
	editExperience,
	deleteExperience,
} = require("../../controllers/sections/experience.controller");

const {
	getLanguages,
	postLanguage,
	editLanguage,
	deleteLanguage,
} = require("../../controllers/sections/language.controller");

const {
	getProjects,
	postProject,
	editProject,
	deleteProject,
} = require("../../controllers/sections/projects.controller");

const {
	getSkills,
	postSkill,
	editSkill,
	deleteSkill,
} = require("../../controllers/sections/skills.controller");
const db = require("../../config/db");
const sectionRouter = express.Router();

// ---------------- User's Experience API End-Points START --------------------------
// GET users's Experiences
sectionRouter.get("/experiences", (req, res) => {
	getExperiences(req, res, db);
});

// POST users's Experiences
sectionRouter.post("/experiences", (req, res) => {
	postExperience(req, res, db);
});

// UPDATE users's Experiences
sectionRouter.put("/experiences/experienceId/editExperience", (req, res) => {
	editExperience(req, res, db);
});

// DELETE users's Experiences
sectionRouter.delete(
	"/experiences/experienceId/deleteExperience",
	(req, res) => {
		deleteExperience(req, res, db);
	},
);

// ---------------- User's Experience API End-Points END --------------------------

// ---------------- User's Skills API End-Points START --------------------------
// GET user's Skills
sectionRouter.get("/skills", (req, res) => {
	getSkills(req, res, db);
});

// POST user's Skills
sectionRouter.post("/skills", (req, res) => {
	postSkill(req, res, db);
});

// UPDATE user's Skills
sectionRouter.put("/skills/skillId/editSkill", (req, res) => {
	editSkill(req, res, db);
});

// DELETE user's Skills
sectionRouter.delete("/skills/skillId/deleteSkill", (req, res) => {
	deleteSkill(req, res, db);
});
// ---------------- User's Skills API End-Points END --------------------------

// ---------------- User's Projects API End-Points START --------------------------

// GET user's Projects
sectionRouter.get("/projects", (req, res) => {
	getProjects(req, res, db);
});

// POST user's Projects
sectionRouter.post("/projects", (req, res) => {
	postProject(req, res, db);
});

// UPDATE user's Projects
sectionRouter.put("/projects/projectId/editProject", (req, res) => {
	editProject(req, res, db);
});

// DELETE user's Projects
sectionRouter.delete("/projects/projectId/deleteProject", (req, res) => {
	deleteProject(req, res, db);
});
// ---------------- User's Projects API End-Points END --------------------------

// ---------------- User's Languages API End-Points START -------------------------
// GET user's Languages
sectionRouter.get("/languages", (req, res) => {
	getLanguages(req, res, db);
});

// POST user's Languages
sectionRouter.post("/languages", (req, res) => {
	postLanguage(req, res, db);
});

// UPDATE user's Languages
sectionRouter.put("/languages/languageId/editLanguage", (req, res) => {
	editLanguage(req, res, db);
});

// DELETE user's Languages
sectionRouter.delete("/languages/languageId/deleteLanguage", (req, res) => {
	deleteLanguage(req, res, db);
});
// ---------------- User's Languages API End-Points END --------------------------

module.exports = sectionRouter;
