const cors = require("cors");
require("dotenv").config();

module.exports = cors({
	origin: "http://localhost:3000",
    credentials: true
});