const db = require("../config/db");

function getAboutModel() {
	// return db("about")
	// 	.join("profiles", "about.profile_id", "profiles.id")
	// 	.select("*");
	return db.select("*").from("about");
}

function editAboutModel(id, description) {
	// anything name you can give here but that must matched to controller's models actual value used
	return db("about")
		.where({ id })
		.update({ description }) // this is because description : description is same so only one we can give one, or if your req value is different you must give otherwise get error
		.returning("*");
}

// function editAboutModel(id, profile_id, description) {
// 	// anything name you can give here but that must matched to controller's models actual value used
// 	return db("about")
// 		.where({ id, profile_id })
// 		.update({ description }) // this is because description : description is same so only one we can give one, or if your req value is different you must give otherwise get error
// 		.returning("*");
// }

module.exports = {
	getAboutModel,
	editAboutModel,
};
