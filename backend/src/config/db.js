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
		connectionString:
			"postgresql://profilestore_user:seyPY5L6v8tTPkRlIiN1N864qnvExs8c@dpg-cs1tamlds78s73bagit0-a.oregon-postgres.render.com/profilestore",
		ssl: { rejectUnauthorized: true },
	},
});

module.exports = db;

// https://todoapp-29o9.onrender.com
