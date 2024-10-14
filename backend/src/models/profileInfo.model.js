const db = require("../config/db");
function profileInfoGetModel() {
	return db("profile_info").returning("*");
}

module.exports = {
	profileInfoGetModel,
};
