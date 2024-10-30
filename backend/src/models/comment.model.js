const db = require("../config/db");

function getCommentModel() {
	return db.select("*").from("comments");
}

function postCommentModel(comment) {
	return db("comments").returning("*").insert({ comment });
}

function editCommentModel(id, comment) {
	return db("comments").where({ id }).update({ comment }).returning("*");
}

function deleteCommentModel(id) {
	return db("comments").where({ id }).delete().returning("*");
}

module.exports = {
	getCommentModel,
	postCommentModel,
	editCommentModel,
	deleteCommentModel,
};
