const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig);


passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await db('profiles').where("id", id).first();
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: process.env.REDIRECT_URI
},


async (accessToken, refreshToken, profile, done) => {
	try {
		let user = await db("profiles").where("google_id", profile.id).first();
		if (!user) {
			[user] = await db("profiles").insert({
				google_id: profile.id, 
				email: profile.emails[0].value,
				name: profile.displayName
			}).returning("*");
		}
		return done(null, user);
	} catch (err) {
		return done(err, null);
	}
}));

console.log(passport._strategies); 
