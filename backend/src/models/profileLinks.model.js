const db = require("../config/db");

function getProfileLinksModel() {
	return db.select("*").from("profile_links");
}

// use spread/...rest operator instead
function postProfileLinkModel(urls) {
	return db.insert(urls).into("profile_links").returning("*"); // many mistake in this that they by mistakely use {urls} don't do that because urls is an object itself with key: value
}

function editProfileLinkModel(id, urls) {
	// if you need a specifi user so use profile_id
	// you can name anything here that relate to original name from controller req.body name
	return db("profile_links")
		.where({ id }) // if same name from req.body and from database then there is no need to write double instead use destructuring and rest
		.update(urls)
		.returning("*");
}

module.exports = {
	getProfileLinksModel,
	postProfileLinkModel,
	editProfileLinkModel,
};
