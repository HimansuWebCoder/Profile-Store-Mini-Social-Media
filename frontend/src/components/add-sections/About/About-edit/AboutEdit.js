import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../../utils/utils";
import PopupEdit from "../../../Popup-edit/PopupEdit";
import "./AboutEdit.css";

// Loading should be in util file it uses almost every component I will do it later DRY
function AboutEdit() {
	const [description, setDescription] = useState("");
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(true);
	const [popupMessage, setPopupMessage] = useState(null);
	const location = useLocation();
	const navigate = useNavigate();
	const id = location.pathname.split("/")[3];

	useEffect(() => {
		fetch(`${apiUrl}/api/about`)
			.then((res) => res.json())
			.then((aboutData) => {
				setTimeout(() => {
					setDescription(aboutData[0].description);
					setInput(aboutData[0].description);
					setLoading(false);
				}, 1000);
			});
	}, [id]);

	function editAboutHandler() {
		fetch(`${apiUrl}/api/about/${id}`, {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ description: input }),
		})
			.then((res) => res.json())
			.then((data) => {
				// alert(data.message);
				setPopupMessage(data.message);
			});
	}

	const handleNavigate = () => {
		navigate("/admin");
	};

	return (
		<div className="about-edit-main-container">
			{loading ? (
				<h2 id="about-loading-header">loading...</h2>
			) : (
				<div className="about-edit-container">
					<textarea
						className="textarea"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					>
						{description}
					</textarea>
					<button onClick={editAboutHandler}>Submit</button>
					<button onClick={() => navigate("/admin")}>Exit</button>
				</div>
			)}
			{popupMessage && <PopupEdit msg={popupMessage} redirect="/admin"/>}
		</div>
	);
}

export default AboutEdit;
