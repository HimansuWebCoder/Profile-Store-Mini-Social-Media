const {
	profileInfoGetModel,
	editProfileInfoModel,
	getOneProfileInfoModel,
} = require("../../../models/profileInfo.model");
const session = require("express-session");
const db = require("../../../config/db");


function getOneProfileInfo(req, res) {
	const email = req.session.email;
	const password = req.session.password;
	const { id } = req.params;

	if (!email) {
		return res.status(400).json({Error: "Login to see profile info"});
	}

	// the below one is correctly ok show data according to session and auth

	// db("profiles")
	//   .select("*")
	//   .where({email: req.session.email, id: id})
	//   .then(user => {
	//   	// return res.json(user);
	//   	if (user.length === 0) {
	//   		return res.status(404).json({Error: "user not found"})
	//   	} else {
	//   		return res.status(200).json(user)
	//   	}
	//   })

	// let's try this one multiple table join


	db("profiles")
	  .select("*")
	  .where({email: req.session.email, id, password: req.session.password})
	  .then(user => {
	  	console.log(user)

	  	if (user.length > 0) {
	  	 const userId = user[0].id
	  	 return db("profile_info")
	  	           .select("*")
	  	           .where({profile_id: userId})
	  	           .then(profile => {
	  	           	return res.json(profile)
	  	           })
	  	} else {
	  		return res.json({user: user, status: "not found any user"})
	  	}

	  })
	  .catch(error => {
	  	return res.status(500).json({Error: `get profile info errror ${error}`})
	  }) 
}

// GET One Profile's Information
// function getOneProfileInfo(req, res) {
// 	const email = req.session.email;
// 	const { id } = req.params;

// 	if (!email) {
// 		return res.status(400).json({ Error: "You need to login to see user profile-info"})
// 	}


	
// 	  b("profiles")
// 	      .innerJoin("profile_info", "profiles.id", "=", "profile_info.profile_id")
// 	      .innerJoin("skills", "profiles.id", "=", "skills.profile_id")
// 			  .select("*")
// 			  .where("profiles.id", id)
// 			  .then(user => {
// 			  	// console.log(user);
// 			  	// return res.json("Your successfully logged in");
// 			  	// return res.json(user[0])
// 			  	// console.log(user);
// 			  	// const profileId = user[0].id; 
// 			  	// console.log(profileId)
// 			  	return res.json(user)
// 			  	// if (user.length > 0) {
// 			  	//    return res.json(user)
// 			  	// } else {
// 			  	// 	return res.json("User profile not")
// 			  	// }
// 			  	// if (profileId !== id) {
// 			  	// 	return res.json({user: user, error: "data not found"})
// 			  	// } else {
// 			  	// 	db("profiles")
// 			  	// 	  .join("profile_info", "profiles.id", "=", "profile_info.profile_id")
// 			  	// 	  .join("skills", "profiles.id", "=", "skills.profile_id")
// 			  	// 	  .join("profile_links", "profiles.id", "=", "profile_links.profile_id")
// 			  	// 	  .join("images", "profiles.id", "=", "images.profile_id")
// 			  	// 	  .join("about", "profiles.id", "=", "about.profile_id")
// 			  	// 	  .join("comments", "profiles.id", "=", "comments.profile_id")
// 			  	// 	  .join("profile_photo", "profiles.id", "=", "profile_photo.profile_id")
// 			  	// 	  .select("*")
// 			  	// 	  .where("profile_info.profile_id", profileId) 
// 			  	// 	  .then(data => {
// 			  	// 	  	// return res.json(data)
// 			  	// 	  	if (data.length !== 0) {
// 			  	// 	  		return res.json(data)
// 			  	// 	  	} else {
// 			  	// 	  		return res.json("Not found any data")
// 			  	// 	  	}
// 			  	// 	  // 	if (data.length === 0) {
// 			  	// 	  // 	return res.json({data: data, Error: "user not found"})

// 			  	// 	  // } else {
// 			  	// 	  // 	return res.json({
// 			  	// 	  // 		data: data,
// 			  	// 	  // 		profilePhoto: data[0].image,
// 			  	// 	  // 		likes: data[0].likes_count,
// 			  	// 	  // 		name: data[0].name,
// 			  	// 	  // 		headline: data[0].headline,
// 			  	// 	  // 		about: data[0].description,
// 			  	// 	  // 		skill: data[0].skill,
// 			  	// 	  // 		comment: data[0].comment,
// 			  	// 	  // 		imagePost: data[0].image_url,
// 			  	// 	  // 		socialLinks: {
// 			  	// 	  // 			github: data[0].github_url,
// 			  	// 	  // 			linkedin: data[0].linkedin_url,
// 			  	// 	  // 			twitter: data[0].twitter_url,
// 			  	// 	  // 			instagram: data[0].instagram_url,
// 			  	// 	  // 			youtube: data[0].youtube_url,
// 			  	// 	  // 			facebook: data[0].facebook_url,
// 			  	// 	  // 			portfolio: data[0].portfolio_url
// 			  	// 	  // 		}
// 			  	// 	  // 	})
// 			  	// 	  // }
// 			  	// 	  })

// 			  	// }


// 			  })

//   .catch(error => {
//     console.error(error);
//     res.status(500).json({ error: `An error occurred ${error}` });
//   });

// 	}
	     	// if (!profile.length) {
	     	// 	return res.json(profile)
	     	// } else {
	     	// 	return res.json("not found")
	     	// }
	     // .select('profile_info.name','profile_info.headline', 'profiles.email')
	     	// getOneProfileInfoModel(id)
	     	//   .then(oneProfile => {
	     	//   	if (profile.id === oneProfile.profile_id) {
	     	//   		return res.json(oneProfile)
	     	//   	} else {
	     	//   		return res.json("wron credential")
	     	//   	}
	     	//   })

	  // knex('profiles')
      //   .join('profile_info', 'profiles.id', '=', 'profile_info.profile_id')
      //   .select('profiles.id', 'profiles.email', 'profiles.likes_count', 'profile_info.name', 'profile_info.headline')
      //   .where('profiles.email', email)  // Filter by logged-in user's email
      //   .then((rows) => {
      //       // Send the specific user's profile data
      //       res.json(rows);
      //   })

	// getOneProfileInfoModel(id)
	// 	.then((profileInfoData) => {
	// 		// or > 0
	// 		// if (profileInfoData.length !== 0) {
	// 		// 	return res.status(200).json(profileInfoData);
	// 		// } else {
	// 		// 	return res.status(404).json({
	// 		// 		Error: "profile information data not found",
	// 		// 	});
	// 		// }
	// 		db("profiles")
	// 		 .select("*")
	// 		 .then(profileData => {
    //             if (profileInfoData.profile_id === profileData.id ) {
	// 		 	return res.json(profileData)
    //             }
	// 		 })
	// 	})
	// 	.catch((error) => {
	// 		console.error(
	// 			`Error occurred retrieved data from profile_info: ${error.stack} || ${error.message} ${error}`,
	// 		);
	// 		return res.status(500).json({
	// 			Error: "Internal Server Error",
	// 		});
	// 	});


// GET Profile's Information
function getProfileInfo(req, res) {
	const email = req.session.email;
	// const email = req.session.email;
	// const profileName = req.session.email;
	// const profileHeadline = req.session.headline;

	// const profileName = req.session.userData.name;

	if(!email) {
		return res.status(400).json({status: "Email needed to see profile-info"});
	}

	profileInfoGetModel()
		.then((profileInfoData) => {

     db("profiles")
        .join("profile_info", "profiles.id", "=", "profile_info.profile_id")
        .select("*")
        .where({email: email})
        .then(user => {
        	// return res.json(user)
        	if (user.length > 0) {
        		return res.json(user)
        	} else {
        		return res.json("user exist but not found any data")
        	}
        })

			// or > 0
		// 	if (profileInfoData.length !== 0) {
		// 		return res.status(200).json(profileInfoData);
		// 	} else {
		// 		return res.status(404).json({
		// 			Error: "profile information data not found",
		// 		});
		// 	}
		// })
		// .catch((error) => {
		// 	console.error(
		// 		`Error occurred retrieved data from profile_info: ${error.stack} || ${error.message} ${error}`,
		// 	);
		// 	return res.status(500).json({
		// 		Error: "Internal Server Error",
		// 	});

			// db("profiles")
			//   .select("*")
			//   .where({email: req.session.email})
			//   .then(user => {
			//   	// console.log(user);
			//   	// return res.json("Your successfully logged in");
			//   	// return res.json(user[0])
			//   	const profileId = user[0].id; 
			//   	if (user.length > 0) {
			//   		// return res.json(user)
			//   		db("profiles")
			//   		  .join("profile_info", "profiles.id", "=", "profile_info.profile_id")
			//   		  .join("skills", "profiles.id", "=", "skills.profile_id")
			//   		  .join("profile_links", "profiles.id", "=", "profile_links.profile_id")
			//   		  .join("images", "profiles.id", "=", "images.profile_id")
			//   		  .join("about", "profiles.id", "=", "about.profile_id")
			//   		  .join("comments", "profiles.id", "=", "comments.profile_id")
			//   		  .join("profile_photo", "profiles.id", "=", "profile_photo.profile_id")
			//   		  .select("*")
			//   		  .where("profiles.id", profileId) 
			//   		  .then(data => {
			//   		  	return res.json({
			//   		  		data: data
			//   		  		// profilePhoto: data[0].image,
			//   		  		// likes: data[0].likes_count,
			//   		  		// name: data[0].name,
			//   		  		// headline: data[0].headline,
			//   		  		// about: data[0].description,
			//   		  		// skill: data[0].skill,
			//   		  		// comment: data[0].comment,
			//   		  		// imagePost: data[0].image_url,
			//   		  		// socialLinks: {
			//   		  		// 	github: data[0].github_url,
			//   		  		// 	linkedin: data[0].linkedin_url,
			//   		  		// 	twitter: data[0].twitter_url,
			//   		  		// 	instagram: data[0].instagram_url,
			//   		  		// 	youtube: data[0].youtube_url,
			//   		  		// 	facebook: data[0].facebook_url,
			//   		  		// 	portfolio: data[0].portfolio_url
			//   		  		// }
			//   		  	})
			//   		  })
			//   	}
			//   })

		});
}



// app.post("/login", (req, res) => {
// 	const { email } = req.body;
// 	req.session.email = email;

// 	db("profiles")
// 	  .select("*")
// 	  .where({email: req.session.email})
// 	  .then(user => {
// 	  	// console.log(user);
// 	  	// return res.json("Your successfully logged in");
// 	  	// return res.json(user[0])
// 	  	const profileId = user[0].id; 
// 	  	if (user.length > 0) {
// 	  		db("profiles")
// 	  		  .join("profile_info", "profiles.id", "=", "profile_info.profile_id")
// 	  		  .select("*")
// 	  		  .where("profile_info.profile_id", profileId) 
// 	  		  .then(data => {
// 	  		  	return res.json(data)
// 	  		  })
// 	  	}
// 	  })
// })

// UPDATE Profile's Information
function editProfileInfo(req, res) {
	const { name, headline } = req.body;
	const { id } = req.params;

	// req.session.name = name;
	const email = req.session.email;
	req.session.name = name;
	req.session.headline = headline;
	// req.session.headline = headline;


	if (!name || !headline) {
		return res.status(400).json({ Error: "name & headline are needed" });
	}


	if (!email) {
		return res.status(400).json("Login to update profile info");
	} 

console.log("name ---------", req.session.name);
console.log("headline ---------", headline);
console.log("id ---------", id)
console.log("email ---------", email)


editProfileInfoModel(name, headline,id)
     .then(info => {
     	console.log(info)
     	return res.json({
     		message: "profile info updated successfully!",
         Data: info,
     })
     })


	// editProfileInfoModel( name, headline, email, id)
	// 	.then((info) => {
	// 		if (info.length > 0) {
	// 			console.log("info", info)
	// 			return res.status(200).json(info.rows);
	// 		} else {
	// 			return res.status(404).json("User exists but not found email to update")
	// 		}

	// 		// return res.json(info.rows)

		  
	// 	})
	// 	.catch(err => {
	// 		res.status(500).json({error: `${err}`});
	// 	})




}

module.exports = {
	getProfileInfo,
	editProfileInfo,
	getOneProfileInfo,
};
