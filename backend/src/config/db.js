const knex = require("knex");

// // const db = knex({
// // 	client: "pg",
// // 	connection: {
// // 		host: "localhost",
// // 		port: 5432,
// // 		user: "profile_store_admin",
// // 		password: "test",
// // 		database: "profile_store_db",
// // 	},
// // });

// Why I add this in here why in app.js dotenv not works for this local development
// because I set env for production in render platform not local thats it
require("dotenv").config();

const db = knex({
	client: "pg",
	connection: {
		connectionString: process.env.DATABASE_URL,
		ssl: { rejectUnauthorized: true },
		// connectionString: process.env.DATABASE_URL_LOCAL,
		// ssl: { rejectUnauthorized: false },
	},
});

module.exports = db;
