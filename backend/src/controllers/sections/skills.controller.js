const db = require("../../config/db");

function getSkills(req, res, db) {
	db.select("*")
		.from("skills")
		.then((skill) => {
			res.status(200).json(skill);
		})
		.catch((err) => {
			res.status(500).json({ error: "Unexpected Error happend" });
		});
}

function postSkill(req, res, db) {
	const { skillName } = req.body;
	// db("skills")
	// 	.insert({ skill })
	// 	.then((skill) => {
	// 		res.json(skill);
	// 	})
	// 	.catch((err) => {
	// 		console.log("failed to insert skill into database", err);
	// 		res.status(500).json({ error: "Unexpected error occured" });
	// 	});

	// db.insert({ skill: skillName })
	// 	.into("skills")
	// 	.returning("*")
	// 	.then((skill) => {
	// 		res.json(skill);
	// 	});

	db("skills")
		.returning("skill")
		.insert({ skill: skillName })
		.then((skill) => {
			res.json(skill);
		});
}

function editSkill(req, res, db) {
	res.send("edit Skill");
}

function deleteSkill(req, res, db) {
	res.send("delete Skill");
}

module.exports = {
	getSkills,
	postSkill,
	editSkill,
	deleteSkill,
};
