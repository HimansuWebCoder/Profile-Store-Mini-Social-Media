const express = require("express");
const app = express();
const db = require("./config/db");

// Import Middlewares
const bodyParserMiddleware = require("./middlewares/bodyParserMiddleware");
const corsMiddleware = require("./middlewares/corsMiddleware");

app.use(bodyParserMiddleware);
app.use(corsMiddleware);

// Import Routes
const loginRouter = require("./routes/auth/login.router");
const signupRouter = require("./routes/auth/signup.router");
const profileFeedsRouter = require("./routes/profile-feeds.router");
const profileAdminRouter = require("./routes/profile-admin/profile-admin.router");
const sectionRouter = require("./routes/sections/section.router");
const postsRouter = require("./routes/posts/posts.router");
const feedbackRouter = require("./routes/feedbacks.router");

// API Routers
app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);
app.use("/profile-feeds", profileFeedsRouter);
app.use("/profile-admin", profileAdminRouter);
app.use("/profile-admin/add-section", sectionRouter);
app.use("/profile-admin/posts", postsRouter);
app.use("/user-feedbacks", feedbackRouter);

module.exports = app;
