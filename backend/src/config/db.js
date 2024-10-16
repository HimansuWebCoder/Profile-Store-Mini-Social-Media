const knex = require("knex");

// console.log("NODE_ENV:", process.env.NODE_ENV);
// console.log("DATABASE_URL:", process.env.DATABASE_URL);

// const dbConfig = {
// 	connectionString: process.env.DATABASE_URL,
// 	ssl:
// 		process.env.NODE_ENV === "production"
// 			? { rejectUnauthorized: true }
// 			: false,
// };

// const isProduction = process.env.NODE_ENV === "production";
// const dbConfig = isProduction
// 	? {
// 			connectionString: process.env.DATABASE_URL,
// 			ssl: { rejectUnauthorized: true },
// 		}
// 	: {
// 			connectionString:
// 				process.env.DATABASE_URL_LOCAL ||
// 				"postgresql://profile_store_admin:test@localhost:5432/profile_store_db",
// 			ssl: false,
// 		};

// const db = knex({
// 	client: "pg",
// 	connection: dbConfig,
// });

// module.exports = db;

// console.log("NODE_ENV:", process.env.NODE_ENV);
// console.log("Using DB Config:", dbConfig);

// const knex = require("knex");

// const isProduction = process.env.NODE_ENV === "production"; // switch to production
// // const isProduction = process.env.NODE_ENV === "development "; // switch to local

// const dbConfig = isProduction
// 	? {
// 			connectionString: process.env.DATABASE_URL_PROD,
// 			ssl: { rejectUnauthorized: true },
// 		}
// 	: {
// 			connectionString: process.env.DATABASE_URL_LOCAL,
// 			ssl: { rejectUnauthorized: false },
// 		};

// const db = knex({
// 	client: "pg",
// 	connection: dbConfig,
// });

// module.exports = db;

// const knex = require("knex");

// const isProduction = process.env.NODE_ENV === "production";

// const dbConfig = {
// 	connection: {
// 		connectionString: isProduction
// 			? process.env.DATABASE_URL_PROD // Production URL
// 			: process.env.DATABASE_URL_LOCAL, // Local URL
// 		ssl: isProduction ? { rejectUnauthorized: true } : false,
// 	},
// };

// const db = knex({
// 	client: "pg",
// 	connection: dbConfig.connection,
// });
// console.log("Database Configuration:", dbConfig);

// // Export the database instance
// module.exports = db;

// const knex = require("knex");

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

// For simple production and local both manually add and work offline development and production online
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
// // console.log("DATABASE URL:", process.env.DATABASE_URL);

// // https://todoapp-29o9.onrender.com
