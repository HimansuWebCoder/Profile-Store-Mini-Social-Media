import { useState, useEffect } from "react";
import "./ProfileLinks.css";
import { apiUrl } from "../../utils/utils";
// const apiUrl = process.env.REACT_APP_API_URL_LOCAL;
// // const apiUrl = process.env.REACT_APP_API_URL_PROD;

function ProfileLinks() {
	const [links, setLinks] = useState([]);

	useEffect(() => {
		fetch(
			// "https://profile-store-mini-social-media.onrender.com/api/profile-links",
			`${apiUrl}/api/profile-links`,
		)
			.then((res) => res.json())
			.then((profileLinks) => {
				console.log(profileLinks);
				console.log(profileLinks);
				setLinks(profileLinks);
			});
	}, []);
	return (
		<div className="links-parent-container">
			{links.map((linkData, index) => (
				<ul className="links-child-container" key={index}>
					<li tabIndex="0">
						<a
							className="links"
							href={linkData.linkedin_url}
							target="_blank"
						>
							<img
								className="link-icons"
								src="/assets/images/linkedin.png"
							/>
						</a>
					</li>
					<li tabIndex="0">
						<a
							className="links"
							href={linkData.portfolio_url}
							target="_blank"
						>
							<img
								className="link-icons"
								src="/assets/images/portfolio.png"
							/>
						</a>
					</li>
					<li tabIndex="0">
						<a
							className="links"
							href={linkData.github_url}
							target="_blank"
						>
							<img
								className="link-icons"
								src="/assets/images/github.png"
							/>
						</a>
					</li>
					<li tabIndex="0">
						<a
							className="links"
							href={linkData.youtube_url}
							target="_blank"
						>
							<img
								className="link-icons"
								src="/assets/images/youtube.png"
							/>
						</a>
					</li>
					<li tabIndex="0">
						<a
							className="links"
							href={linkData.twitter_url}
							target="_blank"
						>
							<img
								className="link-icons"
								src="/assets/images/twitter.png"
							/>
						</a>
					</li>
					<li tabIndex="0">
						<a
							className="links"
							href={linkData.facebook_url}
							target="_blank"
						>
							<img
								className="link-icons"
								src="/assets/images/facebook.png"
							/>
						</a>
					</li>
					<li tabIndex="0">
						<a
							className="links"
							href={linkData.instagram_url}
							target="_blank"
						>
							<img
								className="link-icons"
								src="/assets/images/instagram.png"
							/>
						</a>
					</li>
				</ul>
			))}
		</div>
	);
}

export default ProfileLinks;
