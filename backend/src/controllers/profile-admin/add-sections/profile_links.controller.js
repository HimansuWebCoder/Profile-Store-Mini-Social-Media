const db = require("../../../config/db");

function getProfileLinks(req, res, db) {
	// res.send("get links");
	// db.select("*")
	// 	.from("profile_links")
	// 	.then((profileLinks) => {
	// 		if (profileLinks.length > 0) {
	// 			return res.status(200).json(profileLinks);
	// 		} else {
	// 			return res.status(404).json({ Error: "profile links data not found" });
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		console.error(`Failed to retrieve profile links from DB: ${error}`);
	// 		return res.status(500).json({ error: "Internal Server Error" });
	// 	});

	db("profile_links")
		.join("profiles", "profile_links.profile_id", "profiles.id")
		.select("*")
		.then((data) => {
			return res.json(data);
		});
}

function postProfileLink(req, res, db) {
	// res.send("post link");
	// const { portfolio_link, github_link, linkedin_link, twitter_link, instagram_link, youtube_link, facebook_link } = req.body;
	const {
		portfolio_link,
		github_link,
		linkedin_link,
		twitter_link,
		instagram_link,
		youtube_link,
		facebook_link,
		profileId,
	} = req.body;

	db.insert({
		portfolio_url: portfolio_link,
		github_url: github_link,
		linkedin_url: linkedin_link,
		twitter_url: twitter_link,
		instagram_url: instagram_link,
		youtube_url: youtube_link,
		facebook_url: facebook_link,
		profile_id: profileId,
	})
		.into("profile_links")
		.returning("*")
		.then((profileLinks) => {
			return res.status(201).json({
				message: "profile links created successfully",
				data: profileLinks,
			});
		})
		.catch((error) => {
			console.error(`Error occurred to post profile_links: ${error}`);
			return res.status(500).json({
				error: "Internal Server Error",
			});
		});
}

function editProfileLink(req, res, db) {
	// res.send("edit link");
	const {
		portfolio_link,
		github_link,
		linkedin_link,
		twitter_link,
		instagram_link,
		youtube_link,
		facebook_link,
		profileId,
	} = req.body;

	const { profileLinkId } = req.params;

	db("profile_links")
		.where({
			id: profileLinkId,
			profile_id: profileId,
		})
		.update({
			portfolio_url: portfolio_link,
			github_url: github_link,
			linkedin_url: linkedin_link,
			twitter_url: twitter_link,
			instagram_url: instagram_link,
			youtube_url: youtube_link,
			facebook_url: facebook_link,
		})
		.returning("*")
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

function deleteProfileLink(req, res, db) {
	res.send("delete link");
}

module.exports = {
	getProfileLinks,
	postProfileLink,
	editProfileLink,
	deleteProfileLink,
};
