const db = require("../../config/db");

function signup(req, res, db) {
	res.send("signup");
}

// const defaultImg = "himansu.png";

// function registerProfile(req, res, db) {
// 	const email = req.body.email;
// 	// check if email is provided later we do this when auth created
// 	db("profiles")
// 		.insert({ email: email })
// 		.returning("*")
// 		.then((profileData) => {
// 			const profileId = profileData[0].id;
// 			return db("profile_photo")
// 				.insert({ image: defaultImg, profile_id: profileId })
// 				.returning("*");
// 		})
// 		.then((data) => {
// 			res.json({
// 				profile: data,
// 			});
// 		})
// 		.catch((err) => {
// 			console.log("error inserting data", err);
// 			res.json({ err: "error happening in inserting data" });
// 		});
// }

module.exports = { signup };
