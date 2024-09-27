const db = require("../config/db");

function getProjectsModel() {
	return db.select("*").from("projects");
}

function postProjectModel(project_url, profile_id) {
	// return db("projects").insert({ project_url, profile_id }).returning("*");
	return db("projects").insert({ project_url }).returning("*");
}

function editProjectModel(id, profile_id, project_url) {
	return db("projects")
		.where({ id }) // skip for now specific user email through profile_id
		.update({ project_url }) // if both are same like project_url : project_url (req value) so there is no need to separately value given only one value give and that totally fine as destruturing used
		.returning("*");
}

function deleteProjectModel(id) {
	return db("projects").where({ id }).del().returning("*");
}

module.exports = {
	getProjectsModel,
	postProjectModel,
	editProjectModel,
	deleteProjectModel,
};
