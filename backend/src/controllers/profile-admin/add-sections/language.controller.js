const db = require("../../../config/db");

function getLanguages(req, res, db) {
	res.send("get Languages");
}

function postLanguage(req, res, db) {
	res.send("post Language");
}

function editLanguage(req, res, db) {
	res.send("edit Language");
}

function deleteLanguage(req, res, db) {
	res.send("delete Language");
}

module.exports = {
	getLanguages,
	postLanguage,
	editLanguage,
	deleteLanguage,
};
