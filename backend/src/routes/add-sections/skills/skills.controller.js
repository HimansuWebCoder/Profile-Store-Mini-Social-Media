const {
	getSkillsModel,
	postSkillModel,
	editSkillModel,
	deleteSkillModel,
} = require("../../../models/skills.model");

// GET Skills
function getSkills(req, res) {
	getSkillsModel()
		.then((skillsData) => {
			if (skillsData.length > 0) {
				// either > 0 or !== 0
				return res.status(200).json(skillsData);
			} else {
				return res.status(404).json({ Error: "skillsData not found" });
			}
		})
		.catch((err) => {
			console.error(`Failed to retrieved data from Database: ${err}`);
			return res.status(500).json({ Error: "Internal Server Error" });
		});

	// db("skills")
	// 	.join("profiles", "skills.profile_id", "profiles.id")
	// 	.select("*")
	// 	.then((skillsData) => {
	// 		if (skillsData.length !== 0) {
	// 			return res.status(200).json(skillsData);
	// 		} else {
	// 			return res.status(404).json({ Error: "skills data not found" });
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		console.error(`Failed to retrieved data from Database: ${error}`);
	// 		return res.status(500).json({ Error: "Internal Server Error" });
	// 	});
}

// POST Skills
function postSkill(req, res) {
	// const { skill } = req.body;
	const { skill, profile_id } = req.body;

	// if (!skill) {
	// 	res.status(400).json({error: "skillName  must required"});
	// }

	if (!skill || !profile_id) {
		return res
			.status(400)
			.json({ Error: "skillName & profileId must required" });
	}

	postSkillModel(skill, profile_id)
		.then((skill) => {
			return res.status(201).json({
				message: "Skills created successfully",
				data: skill,
			});
		})
		.catch((error) => {
			console.error(
				`Failed to Insert skill to skills table in DB: ${error}`,
			);
			return res.status(500).json({
				Error: "Internal Server Error",
			});
		});
}

// UPDATE Skill
function editSkill(req, res) {
	// const { skillName } = req.body;
	const { skillName, profileId } = req.body;
	const id = req.params.skillId;

	if (!skillName) {
		return res
			.status(400)
			.json({ Error: "skillName and profileId must needed" });
	}

	db("skills")
		// .where({ id: id })
		.where({ id: id, profile_id: profileId })
		// .where({ profile_id: profileId }) // because when I insert before skill in skills table I did not include profile_id foreign key so id: id not matched so only profile_id: profileId give if matched then I did this ({id: id, profile_id: profileId});
		.update({ skill: skillName })
		.returning("*")
		.then((skillsData) => {
			if (skillsData.length !== 0) {
				return res.status(200).json({
					message: "skills update successfully",
					data: skillsData,
				});
			} else {
				return res.status(404).json({
					Error: "Skills not found for update",
				});
			}
		})
		.catch((error) => {
			console.error(`Failed to update skills into DB: ${error}`);
			return res.status(500).json({
				Error: "Internal Server Error",
			});
		});
}

// DELETE Skill
function deleteSkill(req, res) {
	const { id } = req.params;

	deleteSkillModel(id)
		.then((deletedSkill) => {
			// res.json({ result: `Successfully Deleted: ${result[0]}` });
			if (deletedSkill.length === 0) {
				// or result.length > 0
				return res.status(404).json({ Error: "Skill does not exist" });
			} else {
				return res.status(200).json({
					message: "Skill Deleted Successfully",
				});
			}
		})
		.catch((err) => {
			console.error(`Failed to delete skill: ${err}`);
			return res.status(500).json({
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
