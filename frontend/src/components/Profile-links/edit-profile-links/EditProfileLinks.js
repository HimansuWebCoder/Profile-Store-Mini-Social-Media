import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import "./EditProfileLinks.css";

function EditProfileLinks() {
	const [socialLinks, setSocialLinks] = useState([]);
	const [input, setInput] = useState(null);
	useEffect(() => {
		fetch(`${apiUrl}/api/profile-links`)
			.then((res) => res.json())
			.then((profileLinks) => {
				console.log("profile Links", profileLinks);
				console.log(profileLinks);
				setSocialLinks(profileLinks);
			});
	}, []);

	return (
		<div className="profileLinks-container">
			<div className="profileLinks-sub-container">
				<div className="edit-profile-links-header">
					<h1>Edit profile links</h1>
					<Link to="/admin" id="cancel-edit-links">
						<h3>Cancel</h3>
					</Link>
				</div>
				<div>
					{socialLinks.map((links) => (
						<div key={links.id}>
							<div>
								<h2>Linkedin</h2>
								<p>{links.linkedin_url}</p>
							</div>

							<div>
								<h2>Twitter</h2>
								<p>{links.twitter_url}</p>
							</div>

							<div>
								<h2>Facebook</h2>
								<p>{links.facebook_url}</p>
							</div>

							<div>
								<h2>Instagram</h2>
								<p>{links.instagram_url}</p>
							</div>

							<div>
								<h2>Youtube</h2>
								<p>{links.youtube_url}</p>
							</div>

							<div>
								<h2>GitHub</h2>
								<p>{links.github_url}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default EditProfileLinks;
