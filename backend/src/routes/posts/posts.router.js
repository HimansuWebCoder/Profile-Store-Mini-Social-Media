const express = require("express");
const {
	getImages,
	postImage,
	editImage,
	deleteImage,
} = require("../../controllers/posts/images.controller");

const {
	getVideos,
	postVideo,
	editVideo,
	deleteVideo,
} = require("../../controllers/posts/videos.controller");

const {
	getDocs,
	postDoc,
	editDoc,
	deleteDoc,
} = require("../../controllers/posts/docs.controller");

const {
	getBlog,
	postBlog,
	editBlog,
	deleteBlog,
} = require("../../controllers/posts/blogs.controller");

const {
	getLikes,
	editLike,
} = require("../../controllers/posts/likes.controller");

const {
	getComments,
	postComment,
	editComment,
	deleteComment,
} = require("../../controllers/posts/comment.controller");

const {
	getSavedPosts,
	postSavePost,
	deleteSavedPost,
} = require("../../controllers/posts/save-post.controller");
const db = require("../../config/db");
const postsRouter = express.Router();

// --------------------- Image posts API End-Points START -------------------
// GET Images
postsRouter.get("/images", (req, res) => {
	getImages(req, res, db);
});

// POST Images
postsRouter.post("/images", (req, res) => {
	postImage(req, res, db);
});

// UPDATE Image
postsRouter.put("/images/imageId/editImage", (req, res) => {
	editImage(req, res, db);
});

// DELETE Image
postsRouter.delete("/images/imageId/deleteImage", (req, res) => {
	deleteImage(req, res, db);
});
// --------------------- Image posts API End-Points END -------------------

// --------------------- Video posts API End-Points START -------------------
// GET Videos
postsRouter.get("/videos", (req, res) => {
	getVideos(req, res, db);
});

// POST Videos
postsRouter.post("/videos", (req, res) => {
	postVideo(req, res, db);
});

// UPDATE Video
postsRouter.put("/videos/videoId/editVideo", (req, res) => {
	editVideo(req, res, db);
});

// DELETE Video
postsRouter.delete("/videos/videoId/deleteVideo", (req, res) => {
	deleteVideo(req, res, db);
});
// --------------------- Video posts API End-Points END -------------------

// --------------------- Doc posts API End-Points START -------------------
// GET Docs
postsRouter.get("/docs", (req, res) => {
	getDocs(req, res, db);
});

// POST Docs
postsRouter.post("/docs", (req, res) => {
	postDoc(req, res, db);
});

// UPDATE Doc
postsRouter.put("/docs/docId/editDoc", (req, res) => {
	editDoc(req, res, db);
});

// DELETE Doc
postsRouter.delete("/docs/docId/deleteDoc", (req, res) => {
	deleteDoc(req, res, db);
});
// --------------------- Doc posts API End-Points END -------------------

// --------------------- Blog posts API End-Points START -------------------
// GET Blogs
postsRouter.get("/blogs", (req, res) => {
	getBlog(req, res, db);
});

// POST Blogs
postsRouter.post("/blogs", (req, res) => {
	postBlog(req, res, db);
});

// UPDATE Blog
postsRouter.put("/blogs/blogId/editBlog", (req, res) => {
	editBlog(req, res, db);
});

// DELETE Blog
postsRouter.delete("/blogs/blogId/deleteBlog", (req, res) => {
	deleteBlog(req, res, db);
});
// --------------------- Blog posts API End-Points END -------------------

// --------------------- Like posts API End-Points START -------------------
// GET Likes
postsRouter.get("/likes", (req, res) => {
	getLikes(req, res, db);
});

// UPDATE Likes
postsRouter.put("/likes/likeId/editLike", (req, res) => {
	editLike(req, res, db);
});
// --------------------- Like posts API End-Points END -------------------

// --------------------- Commnet posts API End-Points START -------------------
// GET Comments
postsRouter.get("/comments", (req, res) => {
	getComments(req, res, db);
});

// POST Comments
postsRouter.post("/comments", (req, res) => {
	postComment(req, res, db);
});

// UPDATE Comment
postsRouter.put("/comments/commentId/editComment", (req, res) => {
	editComment(req, res, db);
});

// DELETE Comment
postsRouter.delete("/comments/commentId/deleteComment", (req, res) => {
	deleteBlog(req, res, db);
});
// --------------------- Comment posts API End-Points END -------------------

// --------------------- Save-posts API End-Points START -------------------
// GET Save-posts
postsRouter.get("/save-posts", (req, res) => {
	getSavedPosts(req, res, db);
});

// POST save-posts
postsRouter.post("/save-posts", (req, res) => {
	postSavePost(req, res, db);
});

// DELETE save-posts
postsRouter.delete("/save-posts/savePostId/deleteSavedPost", (req, res) => {
	deleteSavedPost(req, res, db);
});
// --------------------- Save-posts API End-Points END -------------------

module.exports = postsRouter;
