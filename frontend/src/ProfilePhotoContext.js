import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiUrl } from "./utils/utils";
const ProfilePhotoContext = createContext();

function ProfilePhotoProvider({ children }) {
	const [profilePhoto, setProfilePhoto] = useState("");
	const [loading, setLoading] = useState(true);
	const location = useLocation();

	useEffect(() => {
		fetch(`${apiUrl}/api/profile-photo`)
			.then((res) => res.json())
			.then((photo) => {
				setTimeout(() => {
					setProfilePhoto(photo[photo.length - 1].image);
					setLoading(false);
				}, 2000);
			});
	}, [location]);

	return (
		<ProfilePhotoContext.Provider value={{ profilePhoto, loading }}>
			{children}
		</ProfilePhotoContext.Provider>
	);
}

export { ProfilePhotoContext, ProfilePhotoProvider };
