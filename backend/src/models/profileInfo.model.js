const db = require("../config/db");

function profileInfoGetModel() {
	return db.select("*").from("profile_info");
}

function getOneProfileInfoModel(id) {
	return db.select("*").from("profile_info").where({ id }).returning("*");
}

function editProfileInfoModel(id, name, headline) {
	return db("profile_info")
		.update({ name, headline })
		.where({ id })
		.returning("*");
}

module.exports = {
	profileInfoGetModel,
	editProfileInfoModel,
	getOneProfileInfoModel,
};
