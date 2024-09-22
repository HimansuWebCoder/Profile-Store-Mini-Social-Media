const db = require("../config/db");

function getFeedbacks(req, res, db) {
	res.send("get feedbacks");
}

function postFeedbacks(req, res, db) {
	res.send("post feedbacks");
}

module.exports = {
	getFeedbacks,
	postFeedbacks,
};
