const db = require("../config/db");



// you can also use raw sql
// db.raw(`
//     SELECT skills.*, profiles.* 
//     FROM skills
//     JOIN profiles ON skills.profile_id = profiles.id
//     WHERE profiles.email = ?
// `, [email]);



// or more simple 
// db("skills")
//    .join("profiles", "skills.profile_id", "=", "profiles.id")
//    .select(
//        "skills.*",    // Selects all columns from skills with "skills." prefix
//        "profiles.*"   // Selects all columns from profiles with "profiles." prefix
//    )
//    .where({ "profiles.email": email });

function getSkillsModel(email) {
	// return db.select("*").from("skills");
	return db("skills")
	       .join("profiles", "skills.profile_id", "=", "profiles.id")
	       .select(
	    "skills.id as skill_id",
       "skills.profile_id",
       "skills.skill",
       "profiles.id as profile_id",
       "profiles.email",
       "profiles.likes_count",
       "profiles.password")
	       .where({email: email})
}
	       // .returning("*"); // avoid this in get request this only need in INSERT, UPDATE, DELETE in here no need because this is by default select from ok!

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
	return db("skills").where({ id }).del().returning("*");
}

module.exports = {
	getSkillsModel,
	postSkillModel,
	editSkillModel,
	deleteSkillModel,
};
