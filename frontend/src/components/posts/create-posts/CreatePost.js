import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import PopupEdit from "../../Popup-edit/PopupEdit";

function CreatePost() {
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
			const response = await fetch(`${apiUrl}/api/posts/images`, {
				method: "post",
				body: formData,
			});

			if (response.ok) {
				const data = await response.json();
				console.log("File uploaded successfully:", data);
				setPopupMessage(data.message);
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
					{popupMessage && (
						<PopupEdit msg={popupMessage} redirect="/posts" />
					)}
				</form>
			</div>
		</div>
	);
}

export default CreatePost;
