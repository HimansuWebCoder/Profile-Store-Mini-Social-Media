const db = require("../config/db");

function profilesModel() {
	return db.select("*").from("profiles");
}

module.exports = {
	profilesModel,
};
