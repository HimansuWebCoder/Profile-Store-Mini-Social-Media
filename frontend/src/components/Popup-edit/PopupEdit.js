import { Link } from "react-router-dom";

import "./PopupEdit.css";
function PopupEdit({ msg }) {
	return (
		<div className="popup-edit-container">
			<div>
				<p>{msg}</p>
				<Link id="link" to="/admin">
					X
				</Link>
			</div>
		</div>
	);
}

export default PopupEdit;
