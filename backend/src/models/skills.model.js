const db = require("../config/db");

function getSkillsModel() {
	// return db.select("*").from("skills");
	return db("skills").select("*");
}

function postSkillModel(skillName, profileId) {
	// return db("projects").insert({ project_url, profile_id }).returning("*");
	// return db.insert({ skill }).into("skills").returning("*");
	return db("skills")
	       .insert({skill: skillName, profile_id: profileId})
	       .returning("*")
}

function editSkillModel(id, skill) {
	return db("projects")
		.where({ profile_id: id }) // skip for now specific user email through profile_id
		.update({ skill }) // if both are same like project_url : project_url (req value) so there is no need to separately value given only one value give and that totally fine as destruturing used
		.returning("*");
}

function deleteSkillModel(id) {
	return db("skills").where({ profile_id: id }).del().returning("*");
}

module.exports = {
	getSkillsModel,
	postSkillModel,
	editSkillModel,
	deleteSkillModel,
};
