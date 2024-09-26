const db = require("../../config/db");

function getFeedbacks(req, res, db) {
	res.json("get feedbacks");
}

function postFeedbacks(req, res, db) {
	res.json("post feedbacks");
}

module.exports = {
	getFeedbacks,
	postFeedbacks,
};
