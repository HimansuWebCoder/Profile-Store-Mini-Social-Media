// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import PopupEdit from "../../components/Popup-edit/PopupEdit";
// import "./ProfileInfoEdit.css";

// const apiUrl = process.env.REACT_APP_API_URL_LOCAL;
// // const apiUrl = process.env.REACT_APP_API_URL_PROD;

// function ProfileInfoEdit() {
// 	const [name, setName] = useState("");
// 	const [headline, setHeadline] = useState("");
// 	const [isUpdated, setIsUpdated] = useState(false);
// 	const [message, setMessage] = useState("");
// 	const [loading, setLoading] = useState(true); // Add loading state
// 	const location = useLocation();
// 	const navigate = useNavigate();
// 	const id = location.pathname.split("/")[3];
// 	// const id = 1;

// 	useEffect(() => {
// 		if (id) {
// 			// Fetch current profile info and populate form
// 			fetch(`${apiUrl}/api/profile-info/${id}`)
// 				.then((response) => {
// 					if (!response.ok) {
// 						throw new Error("Network response was not ok");
// 					}
// 					return response.json();
// 				})
// 				.then((data) => {
// 					setName(data.profile_name);
// 					setHeadline(data.headline);
// 					setLoading(false); // Set loading to false after fetching
// 				})
// 				.catch((error) => {
// 					console.error("Error fetching profile info:", error);
// 					setLoading(false); // Ensure loading is false on error as well
// 				});
// 		} else {
// 			setLoading(false); // Set loading to false if no ID
// 		}
// 	}, [id]);

// 	// Fetch profile info for the given id
// 	// useEffect(() => {
// 	// 	// Fetch current profile info and populate form
// 	// 	fetch(`http://localhost:8000/api/profile-info/${id}`)
// 	// 		.then((response) => response.json())
// 	// 		.then((data) => {
// 	// 			setName(data.profile_name);
// 	// 			setHeadline(data.headline);
// 	// 		})
// 	// 		.catch((error) => {
// 	// 			console.error("Error fetching profile info:", error);
// 	// 		});
// 	// }, [id]);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		fetch(
// 			// `https://profile-store-mini-social-media.onrender.com/api/profile-info/${id}`,
// 			`${apiUrl}/api/profile-info/${id}`,
// 			{
// 				method: "PUT",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify({ name, headline }),
// 			},
// 		)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				// alert(data.message);
// 				// console.log(data);
// 				setMessage(data.message);
// 				if (data.success) {
// 					setIsUpdated(true);
// 				} else {
// 					alert(data.message);
// 				}
// 			})
// 			.catch((error) => {
// 				console.error("Error updating profile:", error);
// 			});
// 	};

// 	const handleNavigate = () => {
// 		navigate("/admin");
// 	};

// 	return (
// 		<div className="profile-info-edit-container">
// 			{isUpdated ? (
// 				<PopupEdit msg={message} />
// 			) : loading ? ( // Conditional rendering based on loading state
// 				<p>Loading...</p> // Show loading text while fetching
// 			) : !id ? ( // Check if ID is invalid (null or undefined)
// 				<p>Error: No ID provided for editing.</p> // Display an error if no ID is present
// 			) : (
// 				<div className="edit-sub-container">
// 					<div className="redirect-btn-container">
// 						<button id="redirect-root-btn" onClick={handleNavigate}>
// 							Back
// 						</button>
// 					</div>
// 					<form className="form" onSubmit={handleSubmit}>
// 						<label>Name:</label>
// 						<input
// 							className="input-form"
// 							type="text"
// 							value={name}
// 							onChange={(e) => setName(e.target.value)}
// 						/>
// 						<br />
// 						<label>Headline:</label>
// 						<input
// 							className="input-form"
// 							type="text"
// 							value={headline}
// 							onChange={(e) => setHeadline(e.target.value)}
// 						/>

// 						<button id="submit-btn" type="submit">
// 							Update Profile
// 						</button>
// 					</form>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// export default ProfileInfoEdit;

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
	const [loading, setLoading] = useState(true);
	const location = useLocation();
	const navigate = useNavigate();
	const id = location.pathname.split("/")[3];

	useEffect(() => {
		if (id) {
			// Fetch current profile info and populate form
			fetch(`${apiUrl}/api/profile-info/${id}`)
				.then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json();
				})
				.then((data) => {
					console.log("my profile data:", data);
					setName(data.profile_name);
					setHeadline(data.headline);
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error fetching profile info:", error);
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	}, [id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`${apiUrl}/api/profile-info/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, headline }),
		})
			.then((res) => res.json())
			.then((data) => {
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
			{isUpdated ? (
				<PopupEdit msg={message} />
			) : loading ? (
				<p>Loading...</p>
			) : !id ? (
				<p>Error: No ID provided for editing.</p>
			) : (
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
			)}
		</div>
	);
}

export default ProfileInfoEdit;
