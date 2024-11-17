import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import "./Signup.css";

function Signup() {
	const [ name, setName ] = useState("");
	const [ signupInput, setSignupInput ] = useState("");
	const [ password, setPassword ] = useState("");
	const [input, setInput] = useState("");
    const navigate = useNavigate();

function submitHandler() {
		fetch(`${apiUrl}/signup`, {
			    method: "post",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({name: name, email: signupInput, password: password}),
				credentials: "include"
		})
		.then((response) => {
           if (response.ok) {
		        navigate("/profiles");
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

	function passwordHandler(e) {
		setPassword(e.target.value); 
	}

	function nameHandler(e) {
		setName(e.target.value); 
	}

	return (
		<div className="login-container">
            <input type="text" value={name} onChange={nameHandler} placeholder="Enter your Name " /><br/>
            <input type="text" value={signupInput} onChange={inputHandler} placeholder="Enter your Email " /><br/>
            <input type="text" value={password} onChange={passwordHandler} placeholder="Enter your Password "/><br/>
            <button type="submit" onClick={submitHandler}>submit</button>
		</div>
	);
}

export default Signup;
