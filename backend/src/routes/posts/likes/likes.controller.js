// const db = require("../../../config/db");
const db = require("../../../config/db");
// const { getLikesModel } = require("../../../models/likes.model");

function getLikes(req, res, db) {
	// res.send("get likes");

	// const email = req.session.email;
	// const password = req.session.password;

	// if (!email && !password) {
	// 	return res.status(400).json({Error: "Login to show likes"})
	// }

	 // .where({email: email , password: password})

	try {
		db("images")
		    .select("*")
			.then((likes) => {
				console.log("these are my likes", likes);
				res.json(likes);
			})
			.catch((error) => {
				res.json({ error: "error occurred to insert likes to db" });
			});
	} catch (error) {
		console.log(error);
		res.json(error);
	}

	// try {
	// 	db("likes")
	// 		.join("profiles", "likes.profile_id", "profiles.id")
	// 		.select("*")
	// 		.then((data) => {
	// 			res.json(data.length);
	// 		})
	// 		.catch((err) => {
	// 			res.json(err);
	// 		});
	// } catch (err) {
	// 	res.json(err);
	// }
}

// function postLike(req, res, db) {
// 	const { like } = req.body;
// 	if (like)
// 		try {
// 			db("likes")
// 				.insert({ profile_id: like })
// 				.returning("*")
// 				.then((likes) => {
// 					res.json(likes);
// 				})
// 				.catch((err) => {
// 					res.json({ err: "user does not exist" });
// 				});
// 		} catch (err) {
// 			res.json(err);
// 		}
// }

function postLike(req, res, db) {
	// const { like, profile_id, image_id } = req.body; // profile_id is the ID of the profile being liked
	// const { like, image_id, id } = req.body; // profile_id is the ID of the profile being liked
	const { like, image_id } = req.body; // profile_id is the ID of the profile being liked
    
    // const email = req.session.email;
    // const password = req.session.password;

    // if (!email && !password) {
    // 	return res.status(400).json({Error: "email and password needed to post likes"});
    // }


  db("images")
    .increment("likes_count", 1)
    .where({id: image_id})
    .select("*")
    .then(like => {
    	res.json(like);
    })    

 

	// if (like) {
	// 	db("profiles")
	// 	    .join("images", "profiles.id", "=", "images.profile_id")
	// 		.where({"profiles.id": profile_id, "images.id": image_id}) 
	// 		.increment("likes_count", 1) 
	// 		.returning("*") 
	// 		.then((updatedLikesCount) => {
	// 			if (updatedLikesCount.length) {
	// 				res.json({ likes_count: updatedLikesCount[0] }); 
	// 			} else {
	// 				res.status(404).json({ error: "Profile not found" });
	// 			}
	// 		})
	// 		.catch((err) => {
	// 				console.error("Database error:", err);
	// 			res.status(500).json({
	// 				error: "Error incrementing likes count",
	// 			});
	// 		});
	// } else {
	// 	res.status(400).json({ error: "Profile ID not provided" });
	// }

	// db("profiles")
	//    .join("images", "profiles.id", "=", "images.profile_id")
	//    .select("*")
	//    .then(user => {
	//    	  // return res.json(user)
	//    	const likesCount = user[0].likes_count
	//    	console.log(user)
	//    	  return db("images")
	//    	         .increment(likesCount, 1)
	//    	         .where({profile_id: profile_id, id: image_id})
	//    	         .returning("*")
	//    	         .then(like =>{
	//    	         	console.log(like)
	//    	         	return res.json(like);
	//    	         })

	//    })

// db("profiles")
//     .join("images", "profiles.id", "=", "images.profile_id")
//     .where({ "profiles.id": profile_id, "images.id": image_id }) // Add conditions for the specific profile/image
//     .select("profiles.likes_count") // Select likes_count from profiles, not images
//     .then(user => {
//         if (user.length > 0) {
//             const currentLikesCount = user[0].likes_count; // Get current likes count from profiles
//             return db("profiles")
//                 .where({ id: profile_id }) // Update likes_count in profiles table
//                 .increment("likes_count", 1) // Increment the likes_count by 1
//                 .returning("likes_count") // Return the updated likes_count
//                 .then(updatedLikes => {
//                     console.log(updatedLikes);
//                     return res.json({ likes_count: updatedLikes[0].likes_count });
//                 });
//         } else {
//             return res.status(404).json({ error: "Profile or image not found" });
//         }
//     })
//     .catch(err => {
//         console.error("Error:", err);
//         return res.status(500).json({ error: "Error updating likes count" });
//     });


// db("profiles")
//     .join("images", "profiles.id", "=", "images.profile_id")
//     .where({
//         "profiles.id": profile_id,    // Profile ID condition
//         "images.id": image_id         // Image ID condition
//     })
//     .select("profiles.likes_count")  // Select likes_count from profiles
//     .then(user => {
//         if (user.length > 0) {
//             const likesCount = user[0].likes_count; // Get the likes_count from profiles

//             // Now increment likes_count in the images table using the value from profiles
//             return db("images")
//                 .where({ "profile_id": profile_id, "id": image_id }) // Ensure the image is specific to the profile
//                 .increment("likes_count", likesCount) // Increment the likes_count in images by the value from profiles
//                 .returning("likes_count")    // Return the updated likes_count for the image
//                 .then(updatedLikes => {
//                     if (updatedLikes.length > 0) {
//                         console.log(updatedLikes);
//                         return res.json({ likes_count: updatedLikes[0].likes_count });
//                     } else {
//                         return res.status(404).json({ error: "Image not found" });
//                     }
//                 });
//         } else {
//             return res.status(404).json({ error: "Profile not found" });
//         }
//     })
//     .catch(err => {
//         console.error("Error:", err);
//         return res.status(500).json({ error: "Error updating likes count" });
//     });

// db("images")
//     .select("*")
//     .where({ "id": image_id }) // Ensure image is specific to profile and image_id
//     .first() // Get only the first matched image
//     .then(image => {
//         if (image) {
//             // Increment the likes_count for the profile in the profiles table
//             return db("profiles")
//                 .increment("likes_count", 1) // Increment likes_count in the profile
//                 .returning("likes_count")    // Return the updated likes_count for the profile
//                 .then(updatedLikes => {
//                     if (updatedLikes.length > 0) {
//                         console.log(updatedLikes);
//                         return res.json({ likes_count: updatedLikes[0].likes_count });
//                     } else {
//                         return res.status(404).json({ error: "Profile not found" });
//                     }
//                 });
//         } else {
//             return res.status(404).json({ error: "Image not found for the profile" });
//         }
//     })
//     .catch(err => {
//         console.error("Error:", err);
//         return res.status(500).json({ error: "Error updating likes count" });
//     });

// db("images")
//     .select("profile_id") // Get profile_id associated with the image
//     .where({ "id": image_id }) // Ensure we select the correct image by image_id
//     .first() // Get the first matching image
//     .then(image => {
//         if (image) {
//             // Now increment the likes_count for the profile associated with the image
//             return db("profiles")
//                 .where({ "id": image.profile_id }) // Make sure we're updating the correct profile
//                 .increment("likes_count", 1) // Increment likes_count by 1 for the associated profile
//                 .returning("likes_count")    // Return the updated likes_count
//                 .then(updatedLikes => {
//                     if (updatedLikes.length > 0) {
//                         console.log("Updated likes_count:", updatedLikes);
//                         return res.json({ likes_count: updatedLikes[0].likes_count });
//                     } else {
//                         return res.status(404).json({ error: "Profile not found" });
//                     }
//                 });
//         } else {
//             return res.status(404).json({ error: "Image not found" });
//         }
//     })
//     .catch(err => {
//         console.error("Error:", err);
//         return res.status(500).json({ error: "Error updating likes count" });
//     });




	// db("profiles")
	//   .select("*")
	//   .first()
	//   .where({id: 3})
	//   .then(profile => {
	//   	console.log(profile.id);
	//   	res.json(profile)
	//   })
}

// function editLike(req, res, db) {
// 	// res.send("post likes");
// 	console.log(req.body);
// 	// const { id, likes, profile_id } = req.body;
// 	// db("likes")
// 	// 	.where({ id })
// 	// 	.update({ profile_id: likes })
// 	// 	.returning("*")
// 	// 	.then((likes) => {
// 	// 		res.json(likes);
// 	// 	})
// 	// 	.catch((error) => {
// 	// 		res.json({ error: "Error Happend" });
// 	// 	});
// }

function editLike(req, res, db) {
	const { like } = req.body;

	db("likes")
		.where({ profile_id })
		.update({ profile_id: like })
		.returning("*")
		.then((updatedLikes) => {
			if (updatedLikes.length === 0) {
				res.status(404).json({ error: "Like not found." });
			} else {
				res.json(updatedLikes);
			}
		})
		.catch((error) => {
			console.error(error);
			res.status(500).json({ error: "Error updating like." });
		});
}

module.exports = {
	getLikes,
	editLike,
	postLike,
};
