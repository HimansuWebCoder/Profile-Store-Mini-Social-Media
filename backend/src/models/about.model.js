const db = require("../config/db");

function getAboutModel(req, res) {
	return db("about")
		.join("profiles", "about.profile_id", "profiles.id")
		.select("*");
}

function editAboutModel(req, res) {
	return db("about")
		.where({ id: aboutId, profile_id: profileId })
		.update({ description }) // this is because description : description is same so only one we can give one, or if your req value is different you must give otherwise get error
		.returning("*");
}

module.exports = {
	getAboutModel,
	editAboutModel,
};
