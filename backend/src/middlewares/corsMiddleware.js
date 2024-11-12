const cors = require("cors");
require("dotenv").config();

// for development only
// module.exports = cors({
// 	origin: "http://localhost:3000",
//     credentials: true
// });

// for production only
module.exports = cors({
	// origin: "https://profile-store-mini-social-media.onrender.com",
	origin: ['http://localhost:3000', 'https://profile-store-mini-social-media.onrender.com', 'http://profile-store-frontend.vercel.app'], // or you can use multiple domain origin
	// origin: "*",
    credentials: true
});