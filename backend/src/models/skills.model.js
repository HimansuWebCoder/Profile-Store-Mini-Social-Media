const db = require("../config/db");

function getSkillsModel() {
	return db.select("*").from("skills");
}

function postSkillModel(skill) {
	// return db("projects").insert({ project_url, profile_id }).returning("*");
	return db.insert({ skill }).into("skills").returning("*");
}

function editSkillModel(id, profile_id, project_url) {
	return db("projects")
		.where({ id }) // skip for now specific user email through profile_id
		.update({ project_url }) // if both are same like project_url : project_url (req value) so there is no need to separately value given only one value give and that totally fine as destruturing used
		.returning("*");
}

function deleteSkillModel(id) {
	return db("skills").where({ id }).del().returning("*");
}

module.exports = {
	getSkillsModel,
	postSkillModel,
	editSkillModel,
	deleteSkillModel,
};
