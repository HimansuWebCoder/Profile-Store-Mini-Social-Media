const db = require("../config/db");

function getCommentModel() {
	return db.select("*").from("comments");
}

function postCommentModel(comment, email, image_id) {
	// return db("comments").returning("*").insert({ comment });
	return db("comments").insert({comment, profile_email: email, image_id}).returning("*")
}


// function postCommentModel(comment, image_id) {
// 	// return db("comments").returning("*").insert({ comment });
// 	return db("comments").insert({comment, image_id}).returning("*")
// }

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
