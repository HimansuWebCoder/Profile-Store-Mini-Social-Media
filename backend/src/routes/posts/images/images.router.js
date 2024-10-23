const express = require("express");
const db = require("../../../config/db");
const {
	getImages,
	editImage,
	deleteImage,
	postImage,
} = require("./images.controller");
const imagesRouter = express.Router();
const upload = require("../../../config/config");

imagesRouter.get("/", (req, res) => {
	getImages(req, res, db);
});

imagesRouter.post("/", upload.single("avatar"), (req, res, next) => {
	postImage(req, res, db);
});

imagesRouter.put("/:id", (req, res) => {
	editImage(req, res, db);
});

imagesRouter.delete("/:id", (req, res) => {
	deleteImage(req, res, db);
});

module.exports = imagesRouter;
