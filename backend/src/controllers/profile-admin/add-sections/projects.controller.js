const db = require("../../../config/db");

// GET Projects
function getProjects(req, res, db) {
	// res.send("get Projects");
		db.select("*")
			.from("projects")
			.then((projects) => {
				if (projects.length > 0) {
					res.status(200).json(projects);
				} else {
					res.status(404).json({ error: "projects not found" });
				}
			})
			.catch((err) => {
				console.error(`Failed to retrieve projects data: ${err}`);
				res.status(500).json({
					error: "Failed to retrieve projects data",
				});
			});
}

// POST Project
function postProject(req, res, db) {
	// res.send("post Project");
	// const { projectURL } = req.body;
	const { projectURL, profileId } = req.body; // now I profileId manually but when use session I use this in that case

	if (!projectURL || !profileId) {
		res.status(400).json({
			error: "ProjectURL and ProfileID must required",
		});
	}

		db("projects")
			.insert({ project_url: projectURL, profile_id: profileId })
			.returning("*")
			.then((projectUrls) => {
				if (projectUrls.length > 0) {
					res.status(201).json({
						message: "Project_urls created successfully",
					});
				} else {
					res.status(400).json({
						error: "Bad request for post projectUrls",
					});
				}
			})
			.catch((err) => {
				console.error(`Failed to post projectUrls to DB: ${err}`);
				res.status(409).json({ error: "Conflict during post project URL" });
			});
}


// UPDATE Project
function editProject(req, res, db) {
	// const { projectURL } = req.body;
	const { projectURL, profileId } = req.body;
	const  { projectId } = req.params;


		db("projects")
		 .where({ id: editProjectId, profile_id: profileId })
		 .update({project_url: projectURL})
		 .returning("*")
		 .then(projectUrls => {
		 	if (projectUrls.length > 0) {
               res.status(200).json(projectUrls);
		 	} else {
		 	   res.status(404).json({message: "project URL not found", data: projectUrls});	
		 	}
		 })
		 .catch (error) {
		 	console.error(`Failed to update projectUrls: ${error}`);
		 	res.status(409).json({error: "Conflict during update project URL"});
		 }
}

// DELETE Project
function deleteProject(req, res, db) {
	const { projectId } = req.params;

	db("projects")
	   .where({id: projectId})
	   .del()
	   .returning("*")
	   .then(deletedProject => {
	   	 if (deletedProject === 0) {
	   	 	res.status(404).json({ error: "Project doesn't exist"});
	   	 } else {
	   	 	res.status(200).json({ message: "Project deleted successfully"});
	   	  }
	   })
	   .catch(error => {
	   	 console.error(`Failed to delete project: ${error}`);
         res.status(500).json({error: "Internal Server Error"});
	   })
}

module.exports = {
	getProjects,
	postProject,
	editProject,
	deleteProject,
};
