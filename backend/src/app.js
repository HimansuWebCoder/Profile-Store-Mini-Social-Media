const express = require("express");
const app = express();
const db = require("./config/db");
const session = require("express-session");

// Import Middlewares
const bodyParserMiddleware = require("./middlewares/bodyParserMiddleware");
const corsMiddleware = require("./middlewares/corsMiddleware");

app.use(
	session({
		secret: "@@@***###)))",
		resave: false,
		saveUninitialized: true,
	}),
);

app.use(bodyParserMiddleware);
app.use(corsMiddleware);

// Import Routes
const apiRouter = require("./routes/api/api.router");

// API Routers
app.use("/api", apiRouter);

module.exports = app;
