const {
	getProjectsModel,
	postProjectModel,
	editProjectModel,
	deleteProjectModel,
} = require("../../../models/projects.model");

// GET Projects
function getProjects(req, res) {
	getProjectsModel()
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
	const { project_url, profile_id } = req.body; // now I profileId manually but when use session I use this in that case

	// if (!project_url || !profile_id) {
	// 	return res.status(400).json({
	// 		Error: "ProjectURL and ProfileID must required",
	// 	});
	// }

	postProjectModel(project_url, profile_id)
		.then((projectUrls) => {
			return res.status(201).json({
				message: "Project_urls created successfully",
				data: projectUrls,
			});
		})
		.catch((error) => {
			console.error(`Failed to post projectUrls to DB: ${error}`);
			return res.status(500).json({ Error: "Internal Server Error" });
		});
}

// UPDATE Project
function editProject(req, res, db) {
	// const { project_id } = req.body;
	const { project_url, project_id } = req.body;
	const { id } = req.params;

	if (!project_url) {
		// for now I skip project_id for individual email login user
		return res
			.status(400)
			.json({ Error: "projectURL or profileId must needed" });
	}

	editProjectModel(id, project_id, project_url)
		.then((projectUrls) => {
			if (projectUrls.length > 0) {
				return res.status(200).json({
					message: "project updated successfully",
					data: projectUrls,
				});
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
	const { id } = req.params;

	deleteProjectModel(id)
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
