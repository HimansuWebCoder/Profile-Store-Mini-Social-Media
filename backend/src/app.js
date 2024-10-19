const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const upload = require("./config/config");

require("dotenv").config();

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParserMiddleware);
app.use(corsMiddleware);

app.use(express.static(path.join(__dirname, "./public")));

// Import Routes
const apiRouter = require("./routes/api/api.router");

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.post("/upload", upload.single("avatar"), function (req, res, next) {
	console.log("uploaded file: ", req.file);
	console.log("uploaded file: ", req.body);
});

// API Routers
app.use("/api", apiRouter);
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = app;
