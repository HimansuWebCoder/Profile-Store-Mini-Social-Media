const db = require("../../config/db");

function getBlog(req, res, db) {
	res.send("get blog");
}

function postBlog(req, res, db) {
	res.send("post blog");
}

function editBlog(req, res, db) {
	res.send("edit blog");
}

function deleteBlog(req, res, db) {
	res.send("delete blog");
}

module.exports = {
	getBlog,
	postBlog,
	editBlog,
	deleteBlog,
};
