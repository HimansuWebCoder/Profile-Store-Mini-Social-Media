const db = require("../../config/db");

function getLikes(req, res, db) {
	res.send("get likes");
}

function editLike(req, res, db) {
	res.send("post likes");
}

module.exports = {
	getLikes,
	editLike,
};
