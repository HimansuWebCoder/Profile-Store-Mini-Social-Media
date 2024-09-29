import { useState, useEffect } from "react";
import "./ProfileLinks.css";

function ProfileLinks() {
	const [links, setLinks] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/profile-links")
			.then((res) => res.json())
			.then((profileLinks) => {
				console.log(profileLinks);
				console.log(profileLinks);
				setLinks(profileLinks);
			});
	}, []);
	return (
		<div className="link-container">
			{links.map((linkData) => (
				<ul className="links-container" key={linkData.profileid}>
					<li tabindex="0">
						<a
							className="links"
							href={linkData.linkedin_url}
							target="_blank"
						>
							Linkedin
						</a>
					</li>
					<li tabindex="0">
						<a
							className="links"
							href={linkData.portfolio_url}
							target="_blank"
						>
							Portfolio
						</a>
					</li>
					<li tabindex="0">
						<a
							className="links"
							href={linkData.github_url}
							target="_blank"
						>
							Github
						</a>
					</li>
					<li tabindex="0">
						<a
							className="links"
							href={linkData.youtube_url}
							target="_blank"
						>
							Youtube
						</a>
					</li>
					<li tabindex="0">
						<a
							className="links"
							href={linkData.twitter_url}
							target="_blank"
						>
							Twitter
						</a>
					</li>
					<li tabindex="0">
						<a
							className="links"
							href={linkData.facebook_url}
							target="_blank"
						>
							Facebook
						</a>
					</li>
					<li tabindex="0">
						<a
							className="links"
							href={linkData.instagram_url}
							target="_blank"
						>
							Instagram
						</a>
					</li>
				</ul>
			))}
		</div>
	);
}

export default ProfileLinks;
