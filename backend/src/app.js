const express = require("express");
const app = express();
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

// Import Routes
const apiRouter = require("./routes/api/api.router");

// API Routers
app.use("/api", apiRouter);
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = app;
