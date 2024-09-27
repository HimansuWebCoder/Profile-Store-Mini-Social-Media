const {
	getProfileLinksModel,
	postProfileLinkModel,
	editProfileLinkModel,
} = require("../../../models/profile-links.model");

function getProfileLinks(req, res) {
	getProfileLinksModel()
		.then((profileLinks) => {
			if (profileLinks.length > 0) {
				return res.status(200).json(profileLinks);
			} else {
				return res
					.status(404)
					.json({ Error: "profile links data not found" });
			}
		})
		.catch((error) => {
			console.error(`Failed to retrieve profile links from DB: ${error}`);
			return res.status(500).json({ error: "Internal Server Error" });
		});

	// db("profile_links")
	// 	.join("profiles", "profile_links.profile_id", "profiles.id")
	// 	.select("*")
	// 	.then((data) => {
	// 		return res.json(data);
	// 	});
}

// POST profile links
function postProfileLink(req, res) {
	// const { portfolioUrl, githubUrl, linkedinUrl, twitterUrl, instagramUrl, youtubeUrl, facebookUrl } = req.body;
	// using spread/...rest operator instead
	const { ...urls } = req.body;

	postProfileLinkModel(urls)
		.then((profileLinks) => {
			return res.status(201).json({
				message: "profile links created successfully",
				data: profileLinks,
			});
		})
		.catch((error) => {
			console.error(`Error occurred to post profile_links: ${error}`);
			return res.status(500).json({
				Error: "Internal Server Error",
			});
		});
}

function editProfileLink(req, res) {
	// using spread/...rest operator instead
	const { profile_id, profile_info_id, ...urls } = req.body;

	if (!profile_id) {
		// i did not have profile_info_id so I skip for now
		return res.status(400).json({ Error: "profileId  must required" });
	}

	const { id } = req.params; // or you can do const profileLinkId = req.params.id; also
	console.log(id);
	editProfileLinkModel(id, profile_id, urls)
		// editProfileLinkModel(id, urls) // try also without profile_id without specific user email general view but there is no need, this is your choice but highly recommended use use all but what needed only that extract and use for update or anything
		.then((profileLinks) => {
			if (profileLinks.length > 0) {
				return res.status(200).json({
					message: "profile links updated successfully",
					data: profileLinks,
				});
			} else {
				return res.status(404).json({
					Error: "profile links not found to update",
				});
			}
		})
		.catch((error) => {
			console.error(`Failed to update profile links: ${error}`);
			return res.status(500).json({
				Error: "Internal Server Error",
			});
		});
}

function deleteProfileLink(req, res) {
	res.send("delete link");
}

module.exports = {
	getProfileLinks,
	postProfileLink,
	editProfileLink,
	deleteProfileLink,
};
