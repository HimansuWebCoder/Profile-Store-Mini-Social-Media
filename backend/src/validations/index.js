const links = {
	linkedin: "linkedin.com",
	twitter: "twitter.com",
	facebook: "facebook.com",
};

// function rest(...links) {
// 	console.log(links);
// }

// rest(links.linkedin, links.twitter);

const { linkedin, ...rest } = links;

console.log(linkedin);
console.log(rest);
