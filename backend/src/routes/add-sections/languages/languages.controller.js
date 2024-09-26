const db = require("../../../config/db");

function getLanguages(req, res, db) {
	res.json({ message: "Language Page" });
}

function postLanguage(req, res, db) {
	res.json("post Language");
}

function editLanguage(req, res, db) {
	res.json("edit Language");
}

function deleteLanguage(req, res, db) {
	res.json("delete Language");
}

module.exports = {
	getLanguages,
	postLanguage,
	editLanguage,
	deleteLanguage,
};
