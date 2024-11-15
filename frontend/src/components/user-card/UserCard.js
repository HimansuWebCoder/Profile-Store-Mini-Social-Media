import { useState,useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { apiUrl } from "../../utils/utils";
import "./UserCard.css";

function UserCard() {
	const [ userCardInfo, setUserCardInfo ] = useState("");
	const [ users, setUsers ] = useState({});
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

			setUsers(user)
			console.log(user)
			console.log(user.user[0].name)
			console.log(user.user[0].headline)
			console.log(user.about[0].description)
			console.log(user.skill[0].skill)
			console.log(user.profilePhoto[0].image)
			// if (user.length > 0) {
			// setUsers(user);
			// } else {
			// 	alert("user not found");
			// }

		})
	}, [userId])

	return (
		<div className="usercard-container">
			<h1>User Card</h1>
			{/*<h1>{users.user[0]kb.name}</h1>*/}
                 {/*<h1>Name: {users.user[0].name}</h1>
                 <p>Headline: {users.user[0].headline}</p>
                 <p>About: {users.about[0].description}</p>
                 <p>Skills: {users.skill[0].skill}</p>*/}

			{/*<p>Skills: {users?.skill?.[0]?.skill}</p>*/}
			
			<img src={users?.profilePhoto?.[0]?.image} alt="profile image" style={{borderRadius: "100px"}} />
			<h1>{users?.user?.[0]?.name}</h1>
			<h1>{users?.user?.[0]?.headline}</h1>
			<h1>{users?.about?.[0]?.description}</h1>
			{/*<p>Skills: {users?.skill?.[1]?.skill || "No skills available"}</p>*/}
			<p>
			  Skills: {users?.skill?.length > 0 ? users.skill.map((item, index) => (
			    <span key={index}>{item.skill}{index < users.skill.length - 1 && ', '}</span>
			  )) : "No skills available"}
			</p>


		</div>
	)
}

export default UserCard;