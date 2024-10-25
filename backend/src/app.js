const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const upload = require("./config/config");
const cloudinary = require("cloudinary").v2;
const db = require("./config/db");

require("dotenv").config();

// Configuration
cloudinary.config({
	cloud_name: "dtiasevyl",
	api_key: "411418114532979",
	api_secret: "Y4GRLW3VVy2_RwrO9TV5YMfHKFI", // Click 'View API Keys' above to copy your API secret
});

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
	const id = req.params.id;
	console.log("uploaded file: ", req.file);
	console.log("uploaded file: ", req.body);

	// const fullImgUrl = `https://profile-store-mini-social-media.onrender.com/uploads/${req.file.filename}`;
	// const fullImgUrl = `http://localhost:8000/uploads/${req.file.filename}`;
	// const fullImgUrl = req.file.filename;

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

	const imagePath = req.file.path;

	const uploadImage = async (imagePath) => {
		const options = {
			use_filename: true,
			unique_filename: false,
			overwrite: true,
		};

		try {
			// Upload the image
			const result = await cloudinary.uploader.upload(imagePath, options);
			console.log(result.url);
			db("profile_photo")
				.where({ id })
				.update({ image: result.url })
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
			return result.public_id;
		} catch (error) {
			console.error(error);
		}
	};

	// console.log(uploadImage(imagePath));

	uploadImage(imagePath);
});

// API Routers
app.use("/api", apiRouter);
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = app;
