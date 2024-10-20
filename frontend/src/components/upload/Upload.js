// import { Link } from "react-router-dom";

// import "./Upload.css";
// function Upload() {
// 	return (
// 		<div className="upload-container">
// 			<div className="upload-sub-container">
// 				<form
// 					action="/upload"
// 					method="post"
// 					enctype="multipart/form-data"
// 				>
// 					<input type="file" name="avatar" />
// 					<button type="submit">Upload</button>
// 					<button>
// 						<Link to="/admin">Back</Link>
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

// export default Upload;

import { useState } from "react";
import { Link } from "react-router-dom";
import PopupEdit from "../Popup-edit/PopupEdit";
import "./Upload.css";

function Upload() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [popupMessage, setPopupMessage] = useState(null);

	const handleFileChange = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!selectedFile) {
			alert("Please select a file to upload");
			return;
		}

		const formData = new FormData();
		formData.append("avatar", selectedFile);

		try {
			const response = await fetch("http://localhost:8000/upload", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				const data = await response.json();
				console.log("File uploaded successfully:", data);
				setPopupMessage("Upload Profile Image successfully");
				// Redirect or handle success as needed
			} else {
				console.error("Failed to upload file");
			}
		} catch (error) {
			console.error("Error during file upload:", error);
		}
	};

	return (
		<div className="upload-container">
			<div className="upload-sub-container">
				<form onSubmit={handleSubmit}>
					<input
						type="file"
						name="avatar"
						onChange={handleFileChange}
					/>
					<button type="submit">Upload</button>
					<button>
						<Link to="/admin">Back</Link>
					</button>
				</form>
				{popupMessage && <PopupEdit msg={popupMessage} />}
			</div>
		</div>
	);
}

export default Upload;
