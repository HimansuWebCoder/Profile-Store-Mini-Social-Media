const express = require("express");
const app = express();
// const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const upload = require("./config/config");
const cloudinary = require("cloudinary").v2;
const db = require("./config/db");
const morgan = require("morgan");
const session = require("./config/session");
const connectPg = require("connect-pg-simple");
const pg = require("pg");
const PgSession = connectPg(session);
const { Pool } = require("pg");

require("dotenv").config();

// const pgPool = db.client.pool;
// const pgPool = new Pool({
//   connectionString: process.env.DATABASE_URL_LOCAL,
//   ssl: { rejectUnauthorized: false }, // Set based on your environment
// });

// for development only
// app.use(
// 	session({
// 		store: new PgSession({
// 			pool: pgPool,
// 			tableName: "sessions",
// 		}),
// 		secret: "@@@***###)))",
// 		resave: false,
// 		saveUninitialized: false,
// 		cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24}, // 1 day expiration for session cookie
// 	}),
// );

// Cors middleware should come first before session management
const corsMiddleware = require("./middlewares/corsMiddleware");
app.use(corsMiddleware);

// for development and memory() store only
// app.use(
// 	session({
// 		secret: "@@@***###)))",
// 		resave: false,
// 		saveUninitialized: false,
// 		cookie: {
// 		 secure: false,
// 		 maxAge: 1000 * 60 * 60 * 24
// 		 }, // 1 day expiration for session cookie
// 	}),
// );

// Must set this proxy for production
app.set('trust proxy', 1);

// for production only
app.use(
	session({
		secret: "@@@***###)))",
		resave: false,
		saveUninitialized: false,
		cookie: { 
			secure: true,
			httpOnly: true,  
      sameSite: "None",
      maxAge: 1000 * 60 * 60 * 24 
		},
	}),
);


// Configuration
cloudinary.config({
	cloud_name: process.env.cloudinary_cloudName,
	api_key: process.env.cloudinary_api_key,
	api_secret: process.env.cloudinary_api_secret, // Click 'View API Keys' above to copy your API secret
});

// Import Middlewares
app.use(morgan("tiny"));
const bodyParserMiddleware = require("./middlewares/bodyParserMiddleware");

// app.use(
// 	session({
// 		secret: "@@@***###)))",
// 		resave: false,
// 		saveUninitialized: false,
// 		cookie: { secure: false}
// 	}),
// );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParserMiddleware);

// function isAuthenticated(req, res, next) {
// 	if(req.session.email) {
// 		next();
// 	} else {
// 		res.status(401).json({message: "Unauthorized, Please log in first."});
// 	}
// }

function isAuthenticated(req, res, next) {
	if (req.session.email && req.session.password) {
		next();
	} else {
		res.status(401).json({message: "Unauthorized, please log in first."});
	}
}

app.use(express.static(path.join(__dirname, "./public")));

// Import Routes
const apiRouter = require("./routes/api/api.router");

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.put("/api/upload/:id", upload.single("avatar"), function (req, res, next) {
	console.log("uploaded file: ", req.file);
	console.log("uploaded file: ", req.body);

	if (!req.file) {
		return res.status(400).json({ message: "no file uploaded" });
	}

	const email = req.session.email;

	if (!email) {
		return res.status(400).json({Error: "login to update profile photo"})
	}

	// res.status(201).json({
	// 	message: "file uploaded successfully",
	// 	filename: req.file.filename,
	// });

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

	const id = req.params.id;
	const imagePath = req.file.path;

	const uploadImage = async (imagePath, res) => {
		const options = {
			use_filename: false,
			unique_filename: true,
			overwrite: true,
		};

		try {
			// Upload the image
			const result = await cloudinary.uploader.upload(imagePath, options);
			// console.log(result);
			db("profile_photo")
				.where({ profile_id: id })
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
		} catch (error) {
			console.error(error);
			return res.status(500).json({
				error: "error occurred when uploading image",
			});
		}
	};

	// console.log(uploadImage(imagePath));

	uploadImage(imagePath, res);
});

// API Routers
app.use("/api", apiRouter);

app.get("/likes", isAuthenticated, (req, res, next) => {
  const email = req.session.email;
if (!email) {
	return res.json("you need to login to get likes")
} else {
	db("profiles")
	  .select("*")
	  .where({email: req.session.email})
	  .then(like => {
	  	return res.json(like);
	  })
}
})


app.get("/all-users", isAuthenticated, (req, res, next) => {
	db("profiles")
	  .join("profile_info", "profiles.id", "=", "profile_info.profile_id")
	  .join("profile_photo", "profiles.id", "=", "profile_photo.profile_id")
	  .select("*")
	  .then(users => {
	  	res.json(users);
	  })
	  .catch(error => {
	  	next(error);
	  });
})

app.get("/all-users/:id", isAuthenticated, (req, res, next) => {
	const {id} = req.params;

	// const email = req.session.email;

	// db("profiles")
	//   .select("*")
	//   .where({id: id})
	//   .then(profile => {
	//   	// res.json(profile)
	//   	if (profile.length > 0) {
	//   	const profileId = profile[0].id
	//   	return db("profile_info")
	//   	         .select("*")
	//   	         .where({profile_id: profileId})
	//   	         .then(info => {
	//   	         	res.json(info)
	//   	         })
	//   	} else {
	//   		return res.json({message: "user doesn't exists"})
	//   	}
	//   })

	  db("profile_info")
	     .join("profiles", "profile_info.profile_id", "=", "profiles.id")
	     .select("*")
	     .where({profile_id: id})
	     .then(user => {
	     	// console.log(user)
	     	// res.json(user)
	     	const userInfo = user;

	     	if (user) {
	     		return db("about")
	     		       .select("*")
	     		       .where({profile_id: id})
	     		       .then(about => {
	     		       	 // res.json(about)
	     		       	// res.json({about: about, info: userInfo })

	     		       	const aboutInfo = about;
	     		       	  db("skills")
	     		       	    .select("*")
	     		       	    .where({profile_id: id})
	     		       	    .then(skill => {
	     		       	    	 // res.json({user: userInfo, about: aboutInfo, skill: skill })
	     		       	    	return db("profile_photo")
	     		       	    	        .select("*")
	     		       	    	        .where({profile_id: id})
	     		       	    	        .then(photo => {
	     		       	    	        	const userPhoto = photo;
	     		       	    	        	res.json({user: userInfo, about: aboutInfo, skill: skill, profilePhoto: userPhoto })
	     		       	    	        })
	     		       	    })
	     		       })
	     	}
	     })
})

app.get("/all", (req, res) => {
	res.json(req.session.userData)
})

app.get("/profileinfo", (req, res) => {
	db("profile_info")
	   .select("*")
	   .where({name: req.session.name})
	   .then(user => {
	   	res.json(user)
	   })
})

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});



app.post("/signup", (req, res) => {
	// const { name, email, password } = req.body;
	const {name, email, password} = req.body;
	// const name = "";
	const skill = "";
	const headline = "";
	const description = "";
  const image = "https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png";
  const github_url = "";
  


	const usersData = {
		description: "description",
		comment: null,
		experience: null,
		image_url: null,
		language: null,
		name: "your name",
		headline: "your headline",
		github_url: null,
		linkedin_url: null,
		twitter_url: null,
		youtube_url: null,
		instagram_url: null,
		portfolio_url: null,
		facebook_url: null,
		image: "https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
		email: email,
		// password: password,
		project_url: null,
		saved_post: null,
		skill: "your skills"
	}

	// req.session.userData = usersData;
	// req.session.email = usersData.email;
	req.session.email = email;
	req.session.password = password;
	req.session.name = name;
	req.session.headline = headline;
	req.session.skill = skill;
	req.session.image = image;
	req.session.description = description;
	req.session.github_url = github_url;


	// req.session.email = email;

	if (!email) {
		return res.status(400).json({Error: "Signup to use the App"})
	}

	if (!email || !password) {
		return res.status(400).json({Error: "Email and Password needed to signup"});
	}

   
   // db("profiles")
   //   .select("*")
   //   .then(userEmail => {
   //   	  console.log(userEmail)
   //      if (userEmail > 0) {
   //      	return res.json("Email already exists!");
   //      }

   //      console.log("session data when signup:", req.session.userData);

   //      const profileId = userEmail[0].id

   //      db("profile_info")
   //        .insert({name: name, profile_id: profileId})
   //        .where({email: email})
   //        .returning("*")
   //        .then(user => {
   //        	console.log(user)
   //        	return res.json(user)
   //        })         
   //   })

db("profiles")
  .select("*")
  .where({ email: req.session.email }) // Check if email exists
  .then((existingProfiles) => {
    console.log(existingProfiles);
    if (existingProfiles.length > 0) {
      return res.json("Email already exists!");
    }

    // Insert into "profiles" table if the email does not exist
    db("profiles")
      .insert({ email: req.session.email, password: req.session.password })
      .returning("*")
      .then((profile) => {
        const profileId = profile[0].id;
        console.log("Profile ID:", profileId);

        // Insert into "profile_info" table
        db("profile_info")
          .insert({ name: req.session.name, headline: req.session.headline, profile_id: profileId })
          .returning("*")
          .then((profileInfo) => {
            console.log("Profile Info:", profileInfo);

            // Insert into "skills" table
            db("skills")
              .insert({
                skill: req.session.skill,
                profile_id: profileId,
              })
              .returning("*")
              .then((skillsInfo) => {
                console.log("Skills Info:", skillsInfo);

                // Insert into "about" table
                db("about")
                  .insert({
                    description: req.session.description,
                    profile_id: profileId,
                  })
                  .returning("*")
                  .then((aboutInfo) => {
                    // return res.json(aboutInfo);
                    // return res.json("Signup successfully!")
                    db("profile_photo")
                      .insert({image: req.session.image, profile_id: profileId})
                      .returning("*")
                      .then((photo) => {
                      	return res.json("signup successfully!")
                      })
                  })
                  .catch((err) =>
                    console.error("Error inserting into 'about':", err)
                  );
              })
              .catch((err) =>
                console.error("Error inserting into 'skills':", err)
              );
          })
          .catch((err) =>
            console.error("Error inserting into 'profile_info':", err)
          );
      })
      .catch((err) => console.error("Error inserting into 'profiles':", err));
  })
  .catch((err) => console.error("Error selecting from 'profiles':", err));



})


// app.post("/login", (req, res, next) => {
// 	const { email } = req.body;
// 	// req.session.email = email;
// 	// req.session.userData= email;
// 	req.session.userData.email = email;
// 	console.log("session", req.session.userData)
// 	console.log("name", req.session.name)
// 	// if (req.session.userData) {
// 	// 	console.log("User already logged in:", req.session.userData);
// 	// 	return res.json(req.session.userData); // Return user data if it's already in session
// 	// }

// 	console.log(email)
// 	console.log(req.session.email);
  
//    if (!email) {
//    	return res.status(404).json("Login data is required");
//    } 

// 	db("profiles")
// 	  .select("*")
// 	  .where({email: req.session.userData.email})
// 	  .then(user => {
 
// 	  	if (!user.length) {
// 	  		return res.json("Email not found or wrong email");
// 	  	} else {
// 	  		// return res.json("You are successfully logged in");
// 	  		console.log("users data", req.session.userData)
// 	  		return res.status(200).json({data: user, status: "You are successfully logged in"})
// 	  	}
// 	  	// console.log(user);
// 	  	// if (user.length === 0) {
// 	  	// 	req.session.email = null;
// 	  	// 	return res.json("email not found or wrong email")
// 	  	// } else {
// 	  	// return res.json("Your successfully logged in");
// 	  	// }
// 	  	// return res.json(user[0])
// 	  }) 
// })

app.post("/login", (req, res, next) => {
	const { email, password } = req.body;

	// If the email is provided, store it in the session
	// req.session.userData = { email };  // Use an object to store user-related data
	// req.session.userData.email;
	// req.session.userData.email = email;
	req.session.email = email;
	req.session.password = password;
	// req.session.name = name;
	// req.session.userData.email = email;

	console.log("session", req.session.email);
	console.log("name", req.session.name);
	console.log("headline", req.session.headline);
	console.log("skill", req.session.skill);
	console.log("description", req.session.description);
	console.log("image", req.session.image);

	// If email is not provided, return a 404 error
	if (!email || !password) {
		return res.status(404).json("Login data is required");
	}

	// Check the database for the user with the provided email
	db("profiles ")
		.select("*")
		.where({ email: req.session.email, password: req.session.password })
		.then(user => {
			// If no user is found, destroy the session and return an error message
			if (!user.length) {
				req.session.destroy((err) => {
					if (err) {
						return res.status(500).json("Error destroying session");
					}
					return res.status(404).json("Email not found or wrong email");
				});
			} else {
				// If the user exists, return the user data with a success message
				console.log("User data:", req.session.name);
				return res.status(200).json({ data: user, status: "You are successfully logged in" });
			}
		})
		.catch(err => {
			// Handle any errors from the database query
			console.error("Error querying database:", err);
			return res.status(500).json("Error querying database");
		});
});




app.put("/myinfo/:id", (req, res) => {
	const { name, headline } = req.body;
	const { id } = req.params;

	req.session.userData.name = name;
	req.session.userData.headline = headline;
	const email = req.session.email;

	if (!email) {
		return res.status(400).json("logged in to see info")
	}

// db("profile_info")
//   .update({
//     name: name, 
//     headline: headline
//   })
//   .from("profile_info")  // Explicitly mention the table you're updating
//   .join("profiles", "profile_info.profile_id", "=", "profiles.id")  // Join the profiles table
//   .where("profiles.email", "=", "himansu@gmail.com")  // Filter by email in the profiles table
//   .andWhere("profile_info.profile_id", "=", id)  // Filter by profile_id in the profile_info table
//   .returning("*")  // Return the updated row(s)
//   .then(info => {
//     res.json(info);  // Send the updated data back to the client
//   })

db.raw(`
      UPDATE profile_info
      SET name = ?, headline = ? 
      FROM profiles 
      WHERE profile_info.profile_id = profiles.id 
        AND profiles.email = ?
        AND profile_info.profile_id = ?
      RETURNING *;
	`, [req.session.userData.name, req.session.userData.headline, email , id])
.then(info => {
	// res.json(info.rows)
	if (info.rows.length > 0) {
		return res.status(200).json(info.rows);
	} else {
		return res.status(404).json("User exists but not found email to update")
	}
})


})
	  	
	  



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

// knex('users')
//   .join('contacts', 'users.id', '=', 'contacts.user_id')
//   .select('users.id', 'contacts.phone');



// app.post('/login', (req, res) => {
//     const { email } = req.body;
//     req.session.email = email;
//     // req.session.password = password;

//     db("login")
//     .select("email")
//     .where({email: req.session.email})
//     .then((user) => {
//         console.log(user);
//         if (user.email === )
//         // return res.json(user);
//     })
//     .catch(error =>{
//         return res.status(500).json({Error: `Database error: ${error}`})
//     })
// })


module.exports = app;
