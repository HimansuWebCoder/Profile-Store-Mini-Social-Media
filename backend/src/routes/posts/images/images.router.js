const express = require("express");
const db = require("../../../config/db");
const { getImages, postImage } = require("./images.controller");
const imagesRouter = express.Router();
const upload = require("../../../config/config");

imagesRouter.get("/", (req, res) => {
	getImages(req, res, db);
});

imagesRouter.post("/", upload.single("avatar"), (req, res, next) => {
	postImage(req, res, db);
});

module.exports = imagesRouter;
