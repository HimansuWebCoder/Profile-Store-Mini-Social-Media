const express = require("express");
const app = express();
const db = require("./config/db");
const session = require("express-session");

// Import Middlewares
const bodyParserMiddleware = require("./middlewares/bodyParserMiddleware");
const corsMiddleware = require("./middlewares/corsMiddleware");

app.use(
	session({
		secret: "@@@***###)))",
		resave: false,
		saveUninitialized: true,
	}),
);

app.use(bodyParserMiddleware);
app.use(corsMiddleware);

// Import Routes
// const loginRouter = require("./routes/auth/login.router");
// const signupRouter = require("./routes/auth/signup.router");
// const profileFeedsRouter = require("./routes/profile-feeds.router");
const feedbackRouter = require("./routes/feedbacks.router");

const apiRouter = require("./routes/api/api.router");

app.use("/api", apiRouter);

// API Routers
// app.use("/auth/api/login", loginRouter);
// app.use("/auth/api/signup", signupRouter);
// app.use("/api/profile-feeds", profileFeedsRouter);
app.use("/api/user-feedbacks", feedbackRouter);

module.exports = app;
