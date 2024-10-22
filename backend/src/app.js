const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const upload = require("./config/config");
const db = require("./config/db");

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

app.put("/upload/:id", upload.single("avatar"), function (req, res, next) {
	console.log("uploaded file: ", req.file);
	console.log("uploaded file: ", req.body);

	const fullImgUrl = `https://profile-store-mini-social-media.onrender.com/uploads/${req.file.filename}`;
	// const fullImgUrl = `http://localhost:8000/uploads/${req.file.filename}`;

	// db.insert({ image: fullImgUrl })
	// 	.into("profile_photo")
	// 	.returning("*")
	// 	.then((insertedImage) => {
	// 		console.log(insertedImage);
	// 		res.status(201).json({
	// 			success: "Profile Image uploaded Succefully",
	// 			data: insertedImage,
	// 		});
	// 	});

	const { id } = req.params;

	db("profile_photo")
		.where({ id })
		.update({ image: fullImgUrl })
		.returning("*")
		.then((data) => {
			if (data.length > 0) {
				// or data.length !== 0 must not be zero either > 0 or !== 0
				console.log(data);
				return res.status(200).json({
					message: "Profile photo updated successfully",
					data: data,
				});
			} else {
				return res.status(404).json({
					Error: "Profile photo not found to update",
				});
			}
		});
});

// API Routers
app.use("/api", apiRouter);
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = app;
