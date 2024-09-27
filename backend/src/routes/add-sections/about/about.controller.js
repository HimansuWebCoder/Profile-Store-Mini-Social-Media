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

	getAboutModel()
		.then((aboutData) => {
			if (aboutData.length !== 0) {
				return res.status(200).json(aboutData);
			} else {
				return res.status(404).json({ Error: "about data not found" });
			}
		})
		.catch((error) => {
			console.error(`Failed to fetch about data from DB: ${error}`);
			return res.status(500).json({ Error: "Internal Server Error" });
		});
}

// UPDATE about of profile
function editAboutProfile(req, res) {
	// const { description } = req.body;
	const { id } = req.params;
	const { description, profile_id } = req.body;

	if (!description || !profile_id) {
		return res
			.status(400)
			.json({ Error: "description or profileId must needed" });
	}

	editAboutModel(id, profile_id, description)
		.then((descriptionData) => {
			if (descriptionData.length > 0) {
				return res.status(200).json({
					message: "description data edited successfully",
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
