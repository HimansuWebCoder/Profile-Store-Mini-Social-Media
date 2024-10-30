const express = require("express");
const { getLikes, editLike, postLike } = require("./likes.controller");
const db = require("../../../config/db");
const likesRouter = express.Router();

likesRouter.get("/", (req, res) => {
	getLikes(req, res, db);
});

likesRouter.post("/", (req, res) => {
	postLike(req, res, db);
});

likesRouter.put("/", (req, res) => {
	editLike(req, res, db);
});

module.exports = likesRouter;
