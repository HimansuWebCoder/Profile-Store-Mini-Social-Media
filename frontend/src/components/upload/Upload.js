import { Link } from "react-router-dom";

import "./Upload.css";
function Upload() {
	return (
		<div className="upload-container">
			<div className="upload-sub-container">
				<form
					action="/upload"
					method="post"
					enctype="multipart/form-data"
				>
					<input type="file" name="avatar" />
					<button type="submit">
						<Link to="/admin">Upload</Link>
					</button>
					<button>
						<Link to="/admin">Back</Link>
					</button>
				</form>
			</div>
		</div>
	);
}

export default Upload;
