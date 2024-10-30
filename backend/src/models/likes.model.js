const db = require("../config/db");

function getLikesModel() {
	return db.select("*").from("likes");
}

module.exports = {
	getLikesModel,
};
