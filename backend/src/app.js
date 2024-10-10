const express = require("express");
const app = express();
const db = require("./config/db");
const session = require("express-session");
const path = require("path");

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

app.use(express.static(path.join(__dirname, "./public")));
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Import Routes
const apiRouter = require("./routes/api/api.router");

// API Routers
app.use("/api", apiRouter);
app.get("/update/:id", (req, res) => {
	res.sendFile(path.join(__dirname, "./update.html"));
});

module.exports = app;
