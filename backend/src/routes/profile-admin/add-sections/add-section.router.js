const express = require("express");
const {
	getExperiences,
	postExperience,
	editExperience,
	deleteExperience,
} = require("../../../controllers/profile-admin/add-sections/experience.controller");

const {
	getLanguages,
	postLanguage,
	editLanguage,
	deleteLanguage,
} = require("../../../controllers/profile-admin/add-sections/language.controller");

const {
	getProjects,
	postProject,
	editProject,
	deleteProject,
} = require("../../../controllers/profile-admin/add-sections/projects.controller");

const {
	getSkills,
	postSkill,
	editSkill,
	deleteSkill,
} = require("../../../controllers/profile-admin/add-sections/skills.controller");
const {
	getAboutProfile,
	editAboutProfile,
} = require("../../../controllers/profile-admin/add-sections/about.controller");
const {
	getProfileLinks,
	postProfileLink,
	editProfileLink,
	deleteProfileLink,
} = require("../../../controllers/profile-admin/add-sections/profile_links.controller");
const db = require("../../../config/db");
const addSectionRouter = express.Router();

// ---------------- User's Experience API End-Points START --------------------------
// GET users's Experiences
addSectionRouter.get("/experiences", (req, res) => {
	getExperiences(req, res, db);
});

// POST users's Experiences
addSectionRouter.post("/experiences", (req, res) => {
	postExperience(req, res, db);
});

// UPDATE users's Experiences
addSectionRouter.put(
	"/experiences/:experienceId/editExperience",
	(req, res) => {
		editExperience(req, res, db);
	},
);

// DELETE users's Experiences
addSectionRouter.delete(
	"/experiences/:experienceId/deleteExperience",
	(req, res) => {
		deleteExperience(req, res, db);
	},
);

// ---------------- User's Experience API End-Points END --------------------------

// ---------------- User's Skills API End-Points START --------------------------
// GET user's Skills
addSectionRouter.get("/skills", (req, res) => {
	getSkills(req, res, db);
});

// POST user's Skills
addSectionRouter.post("/skills", (req, res) => {
	postSkill(req, res, db);
});

// UPDATE user's Skills
addSectionRouter.put("/skills/:skillId/editSkill", (req, res) => {
	editSkill(req, res, db);
});

// DELETE user's Skills
addSectionRouter.delete("/skills/:skillId/deleteSkill", (req, res) => {
	deleteSkill(req, res, db);
});
// ---------------- User's Skills API End-Points END --------------------------

// ---------------- User's Projects API End-Points START --------------------------

// GET user's Projects
addSectionRouter.get("/projects", (req, res) => {
	getProjects(req, res, db);
});

// POST user's Projects
addSectionRouter.post("/projects", (req, res) => {
	postProject(req, res, db);
});

// UPDATE user's Projects
addSectionRouter.put("/projects/:projectId/editProject", (req, res) => {
	editProject(req, res, db);
});

// DELETE user's Projects
addSectionRouter.delete("/projects/:projectId/deleteProject", (req, res) => {
	deleteProject(req, res, db);
});
// ---------------- User's Projects API End-Points END --------------------------

// ---------------- User's Languages API End-Points START -------------------------
// GET user's Languages
addSectionRouter.get("/languages", (req, res) => {
	getLanguages(req, res, db);
});

// POST user's Languages
addSectionRouter.post("/languages", (req, res) => {
	postLanguage(req, res, db);
});

// UPDATE user's Languages
addSectionRouter.put("/languages/:languageId/editLanguage", (req, res) => {
	editLanguage(req, res, db);
});

// DELETE user's Languages
addSectionRouter.delete("/languages/:languageId/deleteLanguage", (req, res) => {
	deleteLanguage(req, res, db);
});
// ---------------- User's Languages API End-Points END --------------------------

// ---------------- User's About API End-Points START -------------------------
// GET user's About
addSectionRouter.get("/about", (req, res) => {
	getAboutProfile(req, res, db);
});

// UPDATE user's About
addSectionRouter.put("/about/:aboutId/editAbout", (req, res) => {
	editAboutProfile(req, res, db);
});

// ---------------- User's About API End-Points END --------------------------

// ---------------- User's Profile_links API End-Points START -------------------------
// GET user's Profile links
addSectionRouter.get("/profile_links", (req, res) => {
	getProfileLinks(req, res, db);
});

// POST user's profile link
addSectionRouter.post("/profile_links", (req, res) => {
	postProfileLink(req, res, db);
});

// UPDATE user's profile link
addSectionRouter.put(
	"/profile_links/:profileLinkId/editProfile_link",
	(req, res) => {
		editProfileLink(req, res, db);
	},
);

// DELETE user's profile link
addSectionRouter.delete(
	"/profile_links/:profileLinkId/deleteProfile_link",
	(req, res) => {
		deleteProfileLink(req, res, db);
	},
);
// ---------------- User's Profile_links API End-Points END --------------------------

module.exports = addSectionRouter;
