const db = require("../../../config/db");

function getAboutProfile(req, res) {
	res.send("about");
}

function editAboutProfile(req, res) {
	res.send("about");
}

module.exports = {
	getAboutProfile,
	editAboutProfile,
};
