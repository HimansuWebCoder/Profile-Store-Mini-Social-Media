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
		fetch(`http://localhost:8000/api/profile-info/${id}`, {
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
			<button onClick={handleNavigate}>Back</button>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input
						className="input-form"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label>Headline:</label>
					<input
						className="input-form"
						type="text"
						value={headline}
						onChange={(e) => setHeadline(e.target.value)}
					/>
				</div>
				<button type="submit">Update Profile</button>
			</form>
		</div>
	);
}

export default ProfileInfoEdit;
