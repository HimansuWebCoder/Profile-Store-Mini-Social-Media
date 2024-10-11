const knex = require("knex");

// const db = knex({
// 	client: "pg",
// 	connection: {
// 		host: "localhost",
// 		port: 5432,
// 		user: "profile_store_admin",
// 		password: "test",
// 		database: "profile_store_db",
// 	},
// });

const db = knex({
	client: "pg",
	connection: {
		connectionString: process.env.DATABASE_URL,
		ssl: { rejectUnauthorized: true },
	},
});

module.exports = db;
// console.log("DATABASE URL:", process.env.DATABASE_URL);

// https://todoapp-29o9.onrender.com
