const db = require("../../../config/db");

function getExperiences(req, res, db) {
	res.json({ Error: "experiences not found" });
}

function postExperience(req, res, db) {
	res.json("post experiences");
}

function editExperience(req, res, db) {
	res.json("edit experience");
}

function deleteExperience(req, res, db) {
	res.json("delete experience");
}

module.exports = {
	getExperiences,
	postExperience,
	editExperience,
	deleteExperience,
};
