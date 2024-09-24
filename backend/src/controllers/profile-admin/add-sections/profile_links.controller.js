const db = require("../../../config/db");

function getProfileLinks(req, res) {
	res.send("get links");
}

function postProfileLink(req, res) {
	res.send("post link");
}

function editProfileLink(req, res) {
	res.send("edit link");
}

function deleteProfileLink(req, res) {
	res.send("delete link");
}

module.exports = {
	getProfileLinks,
	postProfileLink,
	editProfileLink,
	deleteProfileLink,
};
