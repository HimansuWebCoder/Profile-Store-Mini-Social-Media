import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProfileInfoEdit.css";

function ProfileInfoEdit() {
	const [name, setName] = useState("");
	const [headline, setHeadline] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	const id = location.pathname.split("/")[3];
	// const id = 1;

	useEffect(() => {
		console.log(id);
		console.log(location);
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

	// Handler for updating profile info
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`https://profile-store-mini-social-media.onrender.com/api/profile-info/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, headline }),
		})
			.then((response) => {
				if (response.ok) {
					alert("Profile updated successfully!");
					navigate("/admin", { state: { profileId: id } });
				} else {
					alert("Failed to update profile.");
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
			<div className="edit-sub-container">
				<div className="redirect-btn-container">
					<button id="redirect-root-btn" onClick={handleNavigate}>
						Back
					</button>
				</div>
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
		</div>
	);
}

export default ProfileInfoEdit;
