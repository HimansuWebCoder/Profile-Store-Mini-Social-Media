import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PopupEdit from "../../components/Popup-edit/PopupEdit";
import "./ProfileInfoEdit.css";

// const apiUrl = process.env.REACT_APP_API_URL_LOCAL;
const apiUrl = process.env.REACT_APP_API_URL_PROD;

function ProfileInfoEdit() {
	const [name, setName] = useState("");
	const [headline, setHeadline] = useState("");
	const [isUpdated, setIsUpdated] = useState(false);
	const [message, setMessage] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	const id = location.pathname.split("/")[3];
	// const id = 1;

	useEffect(() => {
		console.log("id", id);
	}, []);

	// Fetch profile info for the given id
	// useEffect(() => {
	// 	// Fetch current profile info and populate form
	// 	fetch(`http://localhost:8000/api/profile-info/${id}`)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setName(data.profile_name);
	// 			setHeadline(data.headline);
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error fetching profile info:", error);
	// 		});
	// }, [id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(
			// `https://profile-store-mini-social-media.onrender.com/api/profile-info/${id}`,
			`${apiUrl}/api/profile-info/${id}`,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, headline }),
			},
		)
			.then((res) => res.json())
			.then((data) => {
				// alert(data.message);
				// console.log(data);
				alert(data.success);
				setMessage(data.message);
				if (data.success) {
					setIsUpdated(true);
				} else {
					alert(data.message);
				}
			})
			.catch((error) => {
				console.error("Error updating profile:", error);
			});
	};

	const handleNavigate = () => {
		navigate("/admin");
	};

	return (
		<div className="profile-info-edit-container">
			{/*<PopupEdit />*/}
			{isUpdated ? (
				<PopupEdit msg={message} />
			) : (
				<div className="edit-sub-container">
					<div className="redirect-btn-container">
						<button id="redirect-root-btn" onClick={handleNavigate}>
							Back
						</button>
					</div>
					{/*{popupContent}*/}
					{/*<PopupEdit />*/}
					<form className="form" onSubmit={handleSubmit}>
						<label>Name:</label>
						<input
							className="input-form"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<br />
						<label>Headline:</label>
						<input
							className="input-form"
							type="text"
							value={headline}
							onChange={(e) => setHeadline(e.target.value)}
						/>

						<button id="submit-btn" type="submit">
							Update Profile
						</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default ProfileInfoEdit;
