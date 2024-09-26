const db = require("../config/db");

function getProfileLinksModel() {
	return db.select("*").from("profile_links");
}

// use spread/...rest operator instead
function postProfileLinkModel(urls) {
	return db
		.insert({
			portfolio_url: urls.portfolioUrl,
			github_url: urls.githubUrl,
			linkedin_url: urls.linkedinUrl,
			twitter_url: urls.twitterUrl,
			instagram_url: urls.instagramUrl,
			youtube_url: urls.youtubeUrl,
			facebook_url: urls.facebookUrl,
			profile_id: urls.profileId, // when use session then this is used in that case not in this
			profile_info_id: urls.profileInfoId,
		})
		.into("profile_links")
		.returning("*");
}

// function editProfileLinkModel(
// 	portfolioUrl,
// 	githubUrl,
// 	linkedinUrl,
// 	twitterUrl,
// 	instagramUrl,
// 	youtubeUrl,
// 	facebookUrl,
// 	id,
// 	profileId,
// ) {
// 	return db("profile_links")
// 		.where({
// 			id: id,
// 			profile_id: profileId,
// 		})
// 		.update({
// 			portfolio_url: portfolioUrl,
// 			github_url: githubUrl,
// 			linkedin_url: linkedinUrl,
// 			twitter_url: twitterUrl,
// 			instagram_url: instagramUrl,
// 			youtube_url: youtubeUrl,
// 			facebook_url: facebookUrl,
// 		})
// 		.returning("*");
// }

function editProfileLinkModel(id, profileId, update) {
	return db("profile_links")
		.where({
			id: id,
			profile_id: profileId,
		})
		.update({
			portfolio_url: update.portfolioUrl,
			github_url: update.githubUrl,
			linkedin_url: update.linkedinUrl,
			twitter_url: update.twitterUrl,
			instagram_url: update.instagramUrl,
			youtube_url: update.youtubeUrl,
			facebook_url: update.facebookUrl,
		})
		.returning("*");
}

module.exports = {
	getProfileLinksModel,
	postProfileLinkModel,
	editProfileLinkModel,
};
