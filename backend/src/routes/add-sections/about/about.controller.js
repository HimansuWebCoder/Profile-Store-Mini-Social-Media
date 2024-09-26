const db = require("../../../config/db");

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

	db("about")
		.join("profiles", "about.profile_id", "profiles.id")
		.select("*")
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

// UPDATE about inof of profile
function editAboutProfile(req, res) {
	// const { description } = req.body;
	const { aboutId } = req.params;
	const { description, profileId } = req.body;

	if (!description || !profileId) {
		return res
			.status(400)
			.json({ Error: "description or profileId must needed" });
	}

	db("about")
		.where({ id: aboutId, profile_id: profileId })
		.update({ description }) // this is because description : description is same so only one we can give one, or if your req value is different you must give otherwise get error
		.returning("*")
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
