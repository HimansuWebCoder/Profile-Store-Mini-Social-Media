import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../../utils/utils";
import "./AboutEdit.css";

// Loading should be in util file it uses almost every component I will do it later DRY
function AboutEdit() {
	const [description, setDescription] = useState("");
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(true);
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
				alert(data.message);
				navigate("/admin");
			});
	}

	const handleNavigate = () => {
		navigate("/admin");
	};

	return (
		<div className="about-edit-container">
			{loading ? (
				<p>loading...</p>
			) : (
				<>
					<textarea
						className="textarea"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					>
						{description}
					</textarea>
					<button onClick={editAboutHandler}>Submit</button>
					<button onClick={() => navigate("/admin")}>Exit</button>
				</>
			)}
		</div>
	);
}

export default AboutEdit;
