const cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: "dtiasevyl",
	api_key: "411418114532979",
	api_secret: "Y4GRLW3VVy2_RwrO9TV5YMfHKFI", // Click 'View API Keys' above to copy your API secret
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
