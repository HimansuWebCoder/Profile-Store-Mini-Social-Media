import { Link } from "react-router-dom";

import "./PopupEdit.css";
function PopupEdit({ msg }) {
	return (
		<div className="popup-edit-container">
			<div>
				<img
					id="popup-edit-img"
					src="/assets/images/check.png"
					alt="check"
				/>
				<p>{msg}</p>
				<Link id="link" to="/admin">
					<img
						id="popup-cancel-img"
						src="/assets/images/cancel.png"
						alt="cancel popup"
					/>
				</Link>
			</div>
		</div>
	);
}

export default PopupEdit;
