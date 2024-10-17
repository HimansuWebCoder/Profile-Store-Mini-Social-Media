import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../../utils/utils";

function AboutEdit() {
	const [description, setDescription] = useState("");
	const [input, setInput] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	const id = location.pathname.split("/")[3];

	useEffect(() => {
		fetch(`${apiUrl}/api/about/${id}`, {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ description: input }),
		});
	});

	const handleNavigate = () => {
		navigate("/admin");
	};

	return (
		<div
			style={{
				width: "200px",
				height: "200px",
				backgroundColor: "rgba(0, 0, 0, 0.2)",
				color: "white",
				position: "absolute",
				top: "550px",
				padding: "10px",
			}}
		>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={handleNavigate}>Submit</button>
		</div>
	);
}

export default AboutEdit;
