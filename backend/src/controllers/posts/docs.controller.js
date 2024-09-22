const db = require("../../config/db");

function getDocs(req, res, db) {
	res.send("get docs");
}

function postDoc(req, res, db) {
	res.send("post docs");
}

function editDoc(req, res, db) {
	res.send("edit docs");
}

function deleteDoc(req, res, db) {
	res.send("delete docs");
}

module.exports = {
	getDocs,
	postDoc,
	editDoc,
	deleteDoc,
};
