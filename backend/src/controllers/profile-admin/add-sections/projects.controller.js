const db = require("../../../config/db");

// GET Projects
function getProjects(req, res, db) {
	// res.send("get Projects");
	db.select("*")
		.from("projects")
		.then((projects) => {
			if (projects.length > 0) {
				return res.status(200).json(projects);
			} else {
				res.status(404).json({ Error: "projects not found" });
			}
		})
		.catch((error) => {
			console.error(`Failed to retrieve projects data: ${error}`);
			return res.status(500).json({
				Error: "Failed to retrieve projects data",
			});
		});
}

// POST Project
function postProject(req, res, db) {
	// res.send("post Project");
	// const { projectURL } = req.body;
	const { projectURL, profileId } = req.body; // now I profileId manually but when use session I use this in that case

	if (!projectURL || !profileId) {
		return res.status(400).json({
			Error: "ProjectURL and ProfileID must required",
		});
	}

	db("projects")
		.insert({ project_url: projectURL, profile_id: profileId })
		.returning("*")
		.then((projectUrls) => {
			return res.status(201).json({
				message: "Project_urls created successfully",
			});
		})
		.catch((error) => {
			console.error(`Failed to post projectUrls to DB: ${error}`);
			return res.status(500).json({ Error: "Internal Server Error" });
		});
}

// UPDATE Project
function editProject(req, res, db) {
	// const { projectURL } = req.body;
	const { projectURL, profileId } = req.body;
	const { projectId } = req.params;

	if (!projectURL || !profileId) {
		return res
			.status(400)
			.json({ Error: "projectURL or profileId must needed" });
	}

	db("projects")
		.where({ id: projectId, profile_id: profileId })
		.update({ project_url: projectURL }) // if both are same like project_url : project_url (req value) so there is no need to separately value given only one value give and that totally fine as destruturing used
		.returning("*")
		.then((projectUrls) => {
			if (projectUrls.length > 0) {
				return res.status(200).json(projectUrls);
			} else {
				return res.status(404).json({
					message: "project URL not found",
					data: projectUrls,
				});
			}
		})
		.catch((error) => {
			console.error(`Failed to update projectUrls: ${error}`);
			return res.status(500).json({
				Error: "Internal Server Error",
			});
		});
}

// DELETE Project
function deleteProject(req, res, db) {
	const { projectId } = req.params;

	db("projects")
		.where({ id: projectId })
		.del()
		.returning("*")
		.then((deletedProject) => {
			if (deletedProject === 0) {
				return res.status(404).json({ error: "Project doesn't exist" });
			} else {
				return res.status(200).json({
					message: "Project deleted successfully",
				});
			}
		})
		.catch((error) => {
			console.error(`Failed to delete project: ${error}`);
			return res.status(500).json({ error: "Internal Server Error" });
		});
}

module.exports = {
	getProjects,
	postProject,
	editProject,
	deleteProject,
};
