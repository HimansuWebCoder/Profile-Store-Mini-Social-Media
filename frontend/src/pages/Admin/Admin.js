import { useContext, useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import ProfilePhoto from "../../components/Profile-photo/ProfilePhoto";
import ProfileInfo from "../../components/Profile-info/ProfileInfo";
import About from "../../components/add-sections/About/About";
import Skills from "../../components/add-sections/Skills/Skills";
import { apiUrl } from "../../utils/utils";
import { ThemeContext } from "../../ThemeContext";
import "./Admin.css";

function Admin() {
	const [profileImg, setProfileImg] = useState("");
	const [loading, setLoading] = useState(true);
	const [profilePhotoId, setProfilePhotoId] = useState("");
	const [images, setImages] = useState([]);
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	const navigate = useNavigate();
	const location = useLocation();

		useEffect(() => {
		const fetchProfileInfo = async () => {
			try {
				const profileInfo = await fetch(`${apiUrl}/api/profile-info`, {
					method: "get",
			        credentials: "include"
				});
				const profileInfoData = await profileInfo.json();
				// if (!profileInfoData.ok) {
				// 	alert("You are Offline");
				// }

				console.log("profile info data", profileInfoData)
				console.log("profile info id ", location)
				setTimeout(() => {
					setImages(profileInfoData)
					console.log("all my info data", profileInfoData)
				}, 1000);
			} catch (error) {
				console.error("Error fetching profile-info:", error);
			}
		};
		fetchProfileInfo();
	}, [location]);


	useEffect(() => {
		fetch(`${apiUrl}/api/profile-photo`, {
			method: "get",
			credentials: "include"
		})
			.then((res) => res.json())
			.then((photo) => {
				if (photo.length > 0) {
				console.log("my profile", photo[0].id);
				console.log("profile-image", photo[photo.length - 1].image);
				setProfilePhotoId(photo[0].id);
				setTimeout(() => {
					setProfileImg(photo[0].image);
					setLoading(false);
				  }, 2000);
				} else {
					alert("Login to see your admin")
					navigate("/login")
				}
			});
	}, [location]);

	
	return (
		<div
			style={{ backgroundColor: isDarkMode ? "#395B64" : "#092635" }}
			className="admin-container"
		>
			<div className="admin-sub-container">
				<Link id="home-link" to="/">
					<img id="home-route" src="/assets/images/home.png" />
				</Link>
				<div className="sub-admin-container editProfilePhoto">
					<Link to={`/admin/file/${profilePhotoId}`}>
						<img
							className="editpencil"
							src="/assets/images/pencil.png"
							alt="Edit Profile Photo"
						/>
					</Link>
				</div>
				{/*Profile Photo Component*/}
				{loading ? (
					<h2
						style={{
							margin: "auto",
							maxWidth: "100px",
							height: "auto",
						}}
					>
						Loading...
					</h2>
				) : (
					<ProfilePhoto
						imgSrc={profileImg}
						alt="profile image"
						size="100px"
						bg="#d2e0fb"
						className="profile-photo-logo-container"
					/>
				)}
				<Outlet />
				<div className="sub-admin-container showinfo">
					<ProfileInfo />
				</div>
				{/*<div className="sub-admin-container add-section">
					<h3>Add-Section</h3>
					<img
						className="add-button"
						src="/assets/images/add-button.png"
						alt="section"
					/>
				</div>*/}
				<About />
				<div className="sub-admin-container edit">
					<h3>My Posts</h3>
					<Link to="/admin/create-post">
						<img
							className="add-button"
							src="/assets/images/add-button.png"
							alt="post"
						/>
					</Link>
				</div>
				<div style={{width:"100%", height: "200px", display: "flex", overflowX: "auto", overflowY: "hidden", alignItems: "center"}}>
					{
						images.map(img => (
                             <div>
                             	<img style={{width:"200px"}} src={img.image_url} alt="images" />
                             </div>
							))
					}
				</div>
				<Skills />
			</div>
		</div>
	);
}

export default Admin;
