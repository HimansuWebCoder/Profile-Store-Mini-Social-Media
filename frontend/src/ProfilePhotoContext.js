import { createContext, useState, useEffect } from "react";
import { apiUrl } from "./utils/utils";
const ProfilePhotoContext = createContext();

function ProfilePhotoProvider({ children }) {
	const [profilePhoto, setProfilePhoto] = useState("");

	useEffect(() => {
		fetch(`${apiUrl}/api/profile-photo`)
			.then((res) => res.json())
			.then((photo) => {
				setProfilePhoto(photo[photo.length - 1].image);
			});
	}, []);

	return (
		<ProfilePhotoContext.Provider value={{ profilePhoto }}>
			{children}
		</ProfilePhotoContext.Provider>
	);
}

export { ProfilePhotoContext, ProfilePhotoProvider };
