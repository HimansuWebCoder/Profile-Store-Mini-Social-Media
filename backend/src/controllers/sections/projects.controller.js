const db = require("../../config/db");

function getProjects(req, res, db) {
	res.send("get Projects");
}

function postProject(req, res, db) {
	res.send("post Project");
}

function editProject(req, res, db) {
	res.send("edit Project");
}

function deleteProject(req, res, db) {
	res.send("delete Project");
}

module.exports = {
	getProjects,
	postProject,
	editProject,
	deleteProject,
};
