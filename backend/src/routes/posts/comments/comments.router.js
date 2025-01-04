const express = require("express");
const {
	getComments,
	getOnePostAllComments,
	postComment,
	postOneComment,
	editComment,
	deleteComment,
} = require("./comments.controller");
const commentRouter = express.Router();

commentRouter.get("/", (req, res) => {
	getComments(req, res);
});

commentRouter.get("/:image_id", (req, res) => {
	getOnePostAllComments(req, res);
});

commentRouter.post("/", (req, res) => {
	postComment(req, res);
});

commentRouter.post("/:imageId", (req, res) => {
	postOneComment(req, res);
});

commentRouter.put("/:id", (req, res) => {
	editComment(req, res);
});

commentRouter.delete("/:id", (req, res) => {
	deleteComment(req, res);
});

module.exports = commentRouter;
