const db = require("../../../config/db");
const upload = require("../../../config/config");
const uploadImage = require("../../../config/cloudinary");
const {
	getImagesModel,
	postImageModel,
} = require("../../../models/images.model");

function getImages(req, res) {

	const email = req.session.email;
    
    if (!email) {
		return res.status(400).json({Error: "Login to see images"});
	}

	getImagesModel()
	    .join("images", "profiles.id", "=", "images.profile_id")
	    .join("profile_info", "profiles.id", "=", "profile_info.profile_id")
	    .join("profile_photo", "profiles.id", "=", "profile_photo.profile_id")
	    .select("*", "images.id as image_id")
		.then((usersPost) => {
			console.log(usersPost)
			return res.json(usersPost)
		})
		.catch((err) => {
			res.status(500).json({ err: "Internal server error" });
			console.log("Error occurred to retrieve image from DATABASE", err);
		});

	// db("images")
	// 	.join("profiles", "images.profile_id", "profiles.id")
	// 	.select("*")
	// 	.returning("*")
	// 	.then((data) => {
	// 		res.json(data);
	// 	})
	// 	.catch((err) => {
	// 		res.json(err);
	// 	});
}

function postImage(req, res) {
	const { image } = req.body;
	// console.log("uploaded file: ", req.file);
	// console.log("uploaded file: ", req.body);

	const email = req.session.email;

	if (!email) {
		return res.status(400).json({Error: "Login to post images"});
	}

	// const fullImgUrl = `http://localhost:8000/uploads/${req.file.filename}`;
	const fullImgUrl = `https://profile-store-mini-social-media.onrender.com/uploads/${req.file.filename}`;

	db("profiles")
	   .select("*")
	   .where({email: email})
	   .then(user => {
	   	   const userId = user[0].id
	   	  return postImageModel(fullImgUrl, userId)
	   	         .then(postImage => {
	   	         	return res.json({message: "Post Uploaded Successfully!", data: postImage})
	   	         })
	   })

	// postImageModel(fullImgUrl)
	// 	.then((image) => {
	// 		console.log(image);
	// 		res.status(200).json({
	// 			message: "Post Uploaded Successfully",
	// 			data: image,
	// 		});
	// 	})
	// 	.catch((err) => {
	// 		res.status(500).json({ err: "Internal Server Error" });
	// 		console.log("Error happend insert images to DB", err);
	// 	});
}

function editImage(req, res, db) {
	const id = req.params.id;
	// const { image } = req.body;
	// const fullImgUrl = `http://localhost:8000/uploads/${req.file.filename}`;
	const fullImgUrl = `https://profile-store-mini-social-media.onrender.com/uploads/${req.file.filename}`;

	const email = req.session.email;
	const password = req.session.password;

	if (!email) {
		return res.status(400).json({Error: "Login to update post"});
	}



	// db("images")
	// 	.where({ id: id })
	// 	.update({ image_url: fullImgUrl })
	// 	.returning("*")
	// 	.then((img) => {
	// 		res.json({
	// 			message: "ImagePost updated Successfully",
	// 			data: img,
	// 		});
	// 	})
	// 	.catch((error) => {
	// 		res.json(error);
	// 	});

	db("profiles")
	  .join("images", "profiles.id", "=", "images.profile_id")
	  .select("images.id as image_id")
	  .where({"images.id": id, email: email, password: password})
	  .first()
	  .then(images => {
	  	if (!images) {
	  		return res.status(404).json("No image found to update this post")
	  	} else {
	  		
		  	return db("images")
		  	      .update({image_url: fullImgUrl})
		  	      .where({id: images.image_id})
		  	      .returning("*")
		  	      .then(updateImg => {
		  	      	return res.json("Post Updated Successfully!");
		  	      })
	  	}

	  	console.log(images)


	  })
}

function deleteImage(req, res, db) {
	// res.send("delete images");
	const { id } = req.params;
	const email = req.session.email;
	const password = req.session.password;

	if (!email) {
		return res.status(400).json({Error: "Login to delete post"});
	}

	db("profiles")
	  .join("images", "profiles.id", "=", "images.profile_id")
	  .select("images.id as image_id")
	  .where({"images.id": id, email: email, password: password})
	  .first()
	  .then(images => {
	  	 if (!images) {
	      return res.status(404).json("No image found for this post.");
	    }
	     // const imageId = images.image_id;
	    console.log(images)

	  	return db("images")
		      .where({id: images.image_id}) // Delete images with matching IDs
		      .del()
		      .returning("*")
		      .then(deleteImg => {
		      	return res.json("post deleted successfully")
		      })
	  	})
}

module.exports = {
	getImages,
	postImage,
	editImage,
	deleteImage,
};
