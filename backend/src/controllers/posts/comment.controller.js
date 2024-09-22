const db = require("../../config/db");

function getComments(req, res, db) {
	res.send("get comments");
}

function postComment(req, res, db) {
	res.send("post comments");
}

function editComment(req, res, db) {
	res.send("edit comments");
}

function deleteComment(req, res, db) {
	res.send("delete comments");
}

module.exports = {
	getComments,
	postComment,
	editComment,
	deleteComment,
};
