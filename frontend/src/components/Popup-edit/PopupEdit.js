import { Link } from "react-router-dom";
import { apiUrl } from "../../utils/utils";
import { useState, useEffect } from "react";
import "./PopupEdit.css";

function PopupEdit({ msg, redirect }) {
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		if (msg) {
			setTimeout(() => setLoader(false), 1000);
		}
	}, [msg]);

	// this is also working but above it better method because of msg coming and check condition
	// useEffect(() => {
	// 	setLoader(false);
	// }, 1000);

	return (
		<div className="popup-edit-container">
			{loader ? (
				<h2 id="popup-edit-header-loader">Loading...</h2>
			) : (
				<div>
					<img
						id="popup-edit-img"
						src="/assets/images/check.png"
						alt="check"
					/>
					<p>{msg}</p>
					<Link id="link" to={redirect}>
						<img
							id="popup-cancel-img"
							src="/assets/images/cancel.png"
							alt="cancel popup"
						/>
					</Link>
				</div>
			)}
		</div>
	);
}

export default PopupEdit;
