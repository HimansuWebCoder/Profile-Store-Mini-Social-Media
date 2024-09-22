const db = require("../../config/db");

function login(req, res, db) {
	res.send("login");
}

module.exports = { login };
