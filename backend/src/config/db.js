const knex = require("knex");

const db = knex({
	client: "pg",
	connection: {
		host: "localhost",
		port: 5432,
		user: "profile_store_admin",
		password: "test",
		database: "profile_store_db",
	},
});

module.exports = db;
