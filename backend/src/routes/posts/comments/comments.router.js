const express = require("express");
const {
	getComments,
	postComment,
	editComment,
	deleteComment,
} = require("./comments.controller");
const commentRouter = express.Router();

commentRouter.get("/", (req, res) => {
	getComments(req, res);
});

commentRouter.post("/", (req, res) => {
	postComment(req, res);
});

commentRouter.put("/:id", (req, res) => {
	editComment(req, res);
});

commentRouter.delete("/:id", (req, res) => {
	deleteComment(req, res);
});

module.exports = commentRouter;
