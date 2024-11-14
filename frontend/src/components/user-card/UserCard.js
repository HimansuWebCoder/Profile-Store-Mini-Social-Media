import { useState,useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { apiUrl } from "../../utils/utils";
import "./UserCard.css";

function UserCard() {
	const [ userCardInfo, setUserCardInfo ] = useState("");
	const [ users, setUsers ] = useState([]);
	const location = useLocation();
	const userId = location.pathname.split("/")[2]


	useEffect(() => {
		console.log(userId)
	},[])

	useEffect(() => {
		fetch(`${apiUrl}/all-users/${userId}`, {
			method: "get",
			credentials: "include",
		})
		.then(res => res.json())
		.then(user => {
			console.log(user)
			if (user.length > 0) {
			setUsers(user);
			} else {
				alert("user not found");
			}

		})
	}, [])

	return (
		<div className="usercard-container">
			<h1>I am user Card</h1>
			{users.map(user => (
				<div key={user.id}>
                 <h1>{user.name}</h1>
                 <p>{user.headline}</p>
				</div>
				))}
		</div>
	)
}

export default UserCard;