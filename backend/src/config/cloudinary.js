const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUDNAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadImage = async (imagePath) => {
	const options = {
		use_filename: true,
		unique_filename: false,
		overwrite: true,
	};

	try {
		// Upload the image
		const result = await cloudinary.uploader.upload(imagePath, options);
		console.log(result);
		return result.public_id;
	} catch (error) {
		console.error(error);
	}
};

// console.log(uploadImage(imagePath));

module.exports = uploadImage;
