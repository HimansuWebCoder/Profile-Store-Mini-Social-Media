import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import "./Signup.css";

function Signup() {
	const [ signupInput, setSignupInput ] = useState("");
	const [input, setInput] = useState("");
    const navigate = useNavigate();

function submitHandler() {
		fetch(`${apiUrl}/signup`, {
			    method: "post",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({email: signupInput}),
				credentials: "include"
		})
		.then((response) => {
           if (response.ok) {
		        navigate("/admin");
		      } else {
		        console.error("Login failed");
		      }
		})
		 .catch((error) => {
	      console.error("An error occurred:", error);
	    });
}

	function inputHandler(e) {
		setSignupInput(e.target.value); 
	}

	return (
		<div className="login-container">
			<h1>Signup testing phase now. for now you can only edit name and headline</h1>
            <input type="text" value={signupInput} onChange={inputHandler} placeholder="himansu@gmail.com" />
            <button onClick={submitHandler}>submit</button>
		</div>
	);
}

export default Signup;
