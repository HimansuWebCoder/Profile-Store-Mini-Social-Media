const db = require("../../../config/db");

// GET Skills
function getSkills(req, res, db) {
	// 	db.select("*")
	// 		.from("skills")
	// 		.then((skillsData) => {
	// 			if (skillsData.length > 0) {
	// 				// either > 0 or !== 0
	// 				res.status(200).json(skillsData);
	// 			} else {
	// 				res.status(404).json({ error: "skillsData not found" });
	// 			}
	// 		})
	// 		.catch((err) => {
	// 			console.error(`Failed to retrieved data from Database: ${err}`);
	// 			res.status(500).json({ error: "Unexpected Error happend" });
	// 		});

	db("skills")
		.join("profiles", "skills.profile_id", "profiles.id")
		.select("*")
		.then((skillsData) => {
			if (skillsData.length !== 0) {
				res.status(200).json(skillsData);
			} else {
				res.status(404).json({ status: "skills data not found" });
			}
		})
		.catch((err) => {
			console.error(`Failed to retrieved data from Database: ${err}`);
			res.status(500).json({ error: "Unexpected Error happend" });
		});
}

// POST Skills
function postSkill(req, res, db) {
	// const { skillName } = req.body;
	const { skillName, profileId } = req.body;

	// if (!skillName) {
	// 	res.status(400).json({error: "skillName  must required"});
	// }

	if (!skillName || !profileId) {
		res.status(400).json({ error: "skillName & profileId must required" });
	}

	db.insert({ skill: skillName, profile_id: profileId })
		.into("skills")
		.returning("*")
		.then((skill) => {
			if (skill.length > 0) {
				res.status(201).json({
					message: "Skills created successfully",
					data: skill,
				});
			} else {
				res.status(400).json({
					error: "Bad request for post skills",
				});
			}
		})
		.catch((err) => {
			console.error(
				`Failed to Insert skill to skills table in DB: ${err}`,
			);
			res.status(409).json({
				error: "Conflict during post",
			});
		});
}

// UPDATE Skill
function editSkill(req, res, db) {
	// const { skillName } = req.body;
	const { skillName, profileId } = req.body;
	const id = req.params.skillId;

	if (!skillName) {
		res.status(400).json({ error: "skillName and profileId must needed" });
	}

	db("skills")
		// .where({ id: id })
		.where({ id: id, profile_id: profileId })
		// .where({ profile_id: profileId }) // because when I insert before skill in skills table I did not include profile_id foreign key so id: id not matched so only profile_id: profileId give if matched then I did this ({id: id, profile_id: profileId});
		.update({ skill: skillName })
		.returning("*")
		.then((skillsData) => {
			if (skillsData.length !== 0) {
				res.status(200).json({
					message: "skills update successfully",
					data: skillsData,
				});
			} else {
				res.status(404).json({
					error: "Skills not found for update",
				});
			}
		})
		.catch((err) => {
			console.error(`Failed to update skills into DB: ${err}`);
			res.status(409).json({
				error: "Conflict during update",
			});
		});
}

// DELETE Skill
function deleteSkill(req, res, db) {
	const { skillId } = req.params;

	db("skills")
		.where({ id: skillId })
		.del()
		.returning("*")
		.then((deletedSkill) => {
			// res.json({ result: `Successfully Deleted: ${result[0]}` });
			if (deletedSkill.length === 0) {
				// or result.length > 0
				res.status(404).json({ error: "Skill does not exist" });
			} else {
				res.status(200).json({
					message: "Skill Deleted Successfully",
				});
			}
		})
		.catch((err) => {
			console.error(`Failed to delete skill: ${err}`);
			res.status(500).json({
				error: "Internal Server Error",
			});
		});
}

module.exports = {
	getSkills,
	postSkill,
	editSkill,
	deleteSkill,
};
