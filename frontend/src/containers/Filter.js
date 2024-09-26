import { Link } from "react-router-dom";
import "../styles/containers/filter_container.css";

function FilterContainer() {
	return (
		<div className="profile_filter_container">
			<Link className="link" to="/">
				Posts
			</Link>
			<Link className="link" to="/">
				Profiles
			</Link>
		</div>
	);
}

export default FilterContainer;
