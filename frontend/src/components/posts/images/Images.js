import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";

function Images() {
	const [postImages, setPostImages] = useState([]);
	const location = useLocation();
	useEffect(() => {
		fetch(`${apiUrl}/api/posts/images`)
			.then((res) => res.json())
			.then((images) => {
				console.log(images);
				setPostImages(images);
			});
	}, [location]);
	return (
		<div>
			<h1>Images</h1>
			{postImages.map((img) => (
				<div
					key={img.id}
					style={{
						maxWidth: "200px",
						height: "100px",
						border: "1px solid black",
					}}
				>
					<img
						src={img.image_url}
						style={{ maxWidth: "50px", height: "50px" }}
						alt="posted image"
					/>
				</div>
			))}
		</div>
	);
}

export default Images;
