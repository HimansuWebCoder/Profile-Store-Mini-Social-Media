const db = require("../../../config/db");

function getExperiences(req, res, db) {
	res.send("get experiences");
}

function postExperience(req, res, db) {
	res.send("post experiences");
}

function editExperience(req, res, db) {
	res.send("edit experience");
}

function deleteExperience(req, res, db) {
	res.send("delete experience");
}

module.exports = {
	getExperiences,
	postExperience,
	editExperience,
	deleteExperience,
};
