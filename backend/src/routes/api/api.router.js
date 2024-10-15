const express = require("express");
const aboutSectionRouter = require("../add-sections/about/about.router");
const experiencesSectionRouter = require("../add-sections/experiences/experiences.router");
const languagesSectionRouter = require("../add-sections/languages/languages.router");
const profileLinksSectionRouter = require("../add-sections/profile-links/profile-links.router");
const projectsSectionRouter = require("../add-sections/projects/projects.router");
const skillsSectionRouter = require("../add-sections/skills/skills.router");

const profilesRouter = require("../profile/profile/profiles.router");
const profileInfoRouter = require("../profile/profile-info/profileInfo.router");
const profilePhotoRouter = require("../profile/profile-photo/profile-photo.router");

const apiRouter = express.Router();

apiRouter.use("/about", aboutSectionRouter);
apiRouter.use("/experiences", experiencesSectionRouter);
apiRouter.use("/languages", languagesSectionRouter);
apiRouter.use("/profile-links", profileLinksSectionRouter);
apiRouter.use("/projects", projectsSectionRouter);
apiRouter.use("/skills", skillsSectionRouter);
apiRouter.use("/profiles", profilesRouter);
apiRouter.use("/profile-info", profileInfoRouter);
apiRouter.use("/profile-photo", profilePhotoRouter);

module.exports = apiRouter;
