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

require("dotenv").config();

// for development only
// app.use(
// 	session({
// 		secret: "@@@***###)))",
// 		resave: false,
// 		saveUninitialized: false,
// 		cookie: { secure: false},
// 	}),
// );

// for production only
app.use(
	session({
		secret: "@@@***###)))",
		resave: false,
		saveUninitialized: false,
		cookie: { secure: true},
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
const corsMiddleware = require("./middlewares/corsMiddleware");

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
app.use(corsMiddleware);

function isAuthenticated(req, res, next) {
	if(req.session.email) {
		next();
	} else {
		res.status(401).json({message: "Unauthorized, Please log in first."});
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

app.get("/likes", (req, res) => {
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

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});


app.post("/login", (req, res, next) => {
	const { email } = req.body;
	req.session.email = email;

   if (!email) {
   	return res.status(404).json("Login data is required");
   } 

	db("profiles")
	  .select("*")
	  .where({email: req.session.email})
	  .then(user => {

	  	if (!user.length) {
	  		return res.json("Email not found or wrong email");
	  	} else {
	  		// return res.json("You are successfully logged in");
	  		return res.status(200).json({data: user, status: "You are successfully logged in"})
	  	}
	  	// console.log(user);
	  	// if (user.length === 0) {
	  	// 	req.session.email = null;
	  	// 	return res.json("email not found or wrong email")
	  	// } else {
	  	// return res.json("Your successfully logged in");
	  	// }
	  	// return res.json(user[0])
	  }) 
})


app.post("/signup", (req, res) => {
	const { email } = req.body;
	const name = "himansu";
	const headline = "marketer"

	req.session.email = email;
	req.session.name = name;
	req.session.headline = headline;

	db("profiles")
	   .insert({email: req.session.email})
	   .returning("*")
	   .then(email => {
	   	console.log(email)
	   	// return res.json(email[0].id)
	   	return db("profile_info")
	   	          .insert({name: name, headline: headline, profile_id: email[0].id})
	   	          .returning("*")
	   	          .then(info => {
	   	          	return res.status(201).json("successfully inserted")
	   	          })
	   })
})

app.put("/myinfo/:id", (req, res) => {
	const { name, headline } = req.body;
	const { id } = req.params;

	req.session.name = name;
	req.session.headline = headline;
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
	`, [req.session.name, req.session.headline, email , id])
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
