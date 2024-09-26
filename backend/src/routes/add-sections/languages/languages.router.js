const express = require("express");
const db = require("../../../config/db");
const {
	getLanguages,
	postLanguage,
	editLanguage,
	deleteLanguage,
} = require("./languages.controller");

const languagesSectionRouter = express.Router();

// ---------------- User's Languages API End-Points START -------------------------
// GET user's Languages
languagesSectionRouter.get("/", (req, res) => {
	getLanguages(req, res, db);
});

// POST user's Languages
languagesSectionRouter.post("/", (req, res) => {
	postLanguage(req, res, db);
});

// UPDATE user's Languages
languagesSectionRouter.put("/:id", (req, res) => {
	editLanguage(req, res, db);
});

// DELETE user's Languages
languagesSectionRouter.delete("/:id", (req, res) => {
	deleteLanguage(req, res, db);
});
// ---------------- User's Languages API End-Points END --------------------------

module.exports = languagesSectionRouter;
