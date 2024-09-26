const express = require("express");
const db = require("../../../config/db");
const {
	getProjects,
	postProject,
	editProject,
	deleteProject,
} = require("./projects.controller");

const projectsSectionRouter = express.Router();

// ---------------- User's Projects API End-Points START --------------------------

// GET user's Projects
projectsSectionRouter.get("/", (req, res) => {
	getProjects(req, res, db);
});

// POST user's Projects
projectsSectionRouter.post("/", (req, res) => {
	postProject(req, res, db);
});

// UPDATE user's Projects
projectsSectionRouter.put("/:id", (req, res) => {
	editProject(req, res, db);
});

// DELETE user's Projects
projectsSectionRouter.delete("/:id", (req, res) => {
	deleteProject(req, res, db);
});
// ---------------- User's Projects API End-Points END --------------------------

module.exports = projectsSectionRouter;
