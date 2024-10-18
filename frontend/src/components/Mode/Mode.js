import "./Mode.css";

function SystemMode({ mode, setMode }) {
	let image;
	const toggleMode = () => {
		setMode(mode === "black" ? "white" : "black");
	};

	if (mode === "white") {
		image = <img className="toggle-img" src="/assets/images/sun.png" />;
	} else {
		image = <img className="toggle-img" src="/assets/images/moon.png" />;
	}

	return (
		<div className="mode-container">
			<button onClick={toggleMode}>{image}</button>
		</div>
	);
}

export default SystemMode;
