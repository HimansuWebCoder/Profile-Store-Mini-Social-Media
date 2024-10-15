const db = require("../config/db");

function profileInfoGetModel() {
	return db("profile_info").returning("*");
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
};
