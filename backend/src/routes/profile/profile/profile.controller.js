const db = require("../../../config/db");

function getProfiles(req, res, db) {
	db.select("*")
		.from("profiles")
		.then((data) => {
			return res.json(data);
		});
}

module.exports = {
	getProfiles,
};
