import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import PopupEdit from "../../Popup-edit/PopupEdit";
import { apiUrl } from "../../../utils/utils";
import "./EditImagePost.css";

function EditImagePost() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [popupMessage, setPopupMessage] = useState(null);
	const [imgPublicId, setImgPublicId] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	// const imgPostId = location.pathname.split("/")[3];
	const { id } = useParams();
	// useEffect(() => {
	// 	console.log(imgPostId);
	// 	console.log("my editimage edit image id: ", id);
	// }, []);

	useEffect(() => {
		console.log("image upload id:", id)
	})

	useEffect(() => {
		fetch(`${apiUrl}/images/${id}`, {
			method: "get"
		})
		.then(res => res.json())
		.then(img => {
			console.log(img);
			console.log("image public id:", img[0].public_id)
			setImgPublicId(img[0].public_id)
		})
	}, [])

	// function editImgPostHandler() {
	// 	fetch(`${apiUrl}/api/posts/images/${imgPostId}`, {
	// 		method: "put",
	// 		headers: {"Content-Type": "application/json"},
	// 		body: JSON.stringify({})
	// 	});
	// }

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
		formData.append("imagePublicId", imgPublicId); 

		try {
			const response = await fetch(`${apiUrl}/api/posts/images/${id}`, {
				method: "put",
				body: formData,
				credentials: "include"
			});

			if (response.ok) {
				const data = await response.json();
				console.log("File uploaded successfully:", data);
				// setPopupMessage(data.message);
				setPopupMessage("Updated post successfully!");
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
						<Link to="/posts">Back</Link>
					</button>
					{popupMessage && (
						<PopupEdit msg={popupMessage} redirect="/posts" />
					)}
				</form>
			</div>
		</div>
	);
}

export default EditImagePost;
