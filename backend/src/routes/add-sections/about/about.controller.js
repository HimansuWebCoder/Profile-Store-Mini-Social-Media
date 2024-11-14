const db = require("../../../config/db");
const {
	getAboutModel,
	editAboutModel,
} = require("../../../models/about.model");

// GET about info of profile
function getAboutProfile(req, res) {
	// res.send("about");
	// db.select("*")
	// 	.from("about")
	// 	.then((aboutData) => {
	// 		if (aboutData.length > 0) {
	// 			return res.status(200).json(aboutData);
	// 		} else {
	// 			return res.status(404).json({ Error: "bio data not found" });
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		console.error(`Failed to retrieve bio data from DB: ${error}`);
	// 		return res.status(500).json({ Error: "Internal Server Error" });
	// 	});

	const email = req.session.email;

	if (!email) {
		return res.status(400).json({Error: "You need to login to see about profile"})
	}

	getAboutModel()
	    .join("profiles", "about.profile_id", "=", "profiles.id")
	    .where({email: email})
		.then((aboutData) => {
			if (aboutData.length !== 0) {
				return res.status(200).json(aboutData);
			} else {
				return res.status(404).json({ Error: " user exist but about data not found" });
			}
		})
		.catch((error) => {
			console.error(`Failed to fetch about data from DB: ${error}`);
			return res.status(500).json({ Error: "Internal Server Error" });
		});
}

// UPDATE about of profile
function editAboutProfile(req, res) {
	const { description } = req.body;
	const { id } = req.params;
	// const { description, profile_id } = req.body;
	const email = req.session.email;
	req.session.description = description;

	if (!description) {
		return res
			.status(400)
			.json({ Error: "description or profileId must needed" });
	}


	if (!email) {
		return res.status(400).json({Error: "You need to login to update about profile"})
	}

	// if (!description || !profile_id) {
	// 	return res
	// 		.status(400)
	// 		.json({ Error: "description or profileId must needed" });
	// }

	// editAboutModel(id, profile_id, description)
	editAboutModel(id, description)
		.then((descriptionData) => {
			if (descriptionData.length > 0) {
				return res.status(200).json({
					message: "About Section updated successfully",
					data: descriptionData,
				});
			} else {
				return res.status(404).json({
					Error: "Description Data not found for Update",
				});
			}
		})
		.catch((error) => {
			console.error(`Failed to update data in description: ${error}`);
			return res.status(500).json({ Error: "Internal Server Error" });
		});
}

module.exports = {
	getAboutProfile,
	editAboutProfile,
};
