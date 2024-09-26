const express = require("express");
const {
	getFeedbacks,
	postFeedbacks,
} = require("../controllers/user-feedbacks.controller");
const db = require("../config/db");
const feedbackRouter = express.Router();

// GET user's feedbacks
feedbackRouter.get("/", (req, res) => {
	getFeedbacks(req, res, db);
});

// POST user's feedbacks
feedbackRouter.post("/", (req, res) => {
	postFeedbacks(req, res, db);
});

module.exports = feedbackRouter;
