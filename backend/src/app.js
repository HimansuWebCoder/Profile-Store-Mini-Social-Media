const express = require("express");
const app = express();

// Import Middlewares
const bodyParserMiddleware = require("./middlewares/bodyParserMiddleware");
const corsMiddleware = require("./middlewares/corsMiddleware");

app.use(bodyParserMiddleware);
app.use(corsMiddleware);

app.get("/", (req, res) => {
	res.send({ name: "himansu" });
});

module.exports = app;
