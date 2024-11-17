import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import "./Login.css";

function Login() {
	const [ loginInput, setLoginInput ] = useState("");
	const [ password, setPassword ] = useState("");
	const [input, setInput] = useState("");
    const navigate = useNavigate();

function submitHandler() {
		fetch(`${apiUrl}/login`, {
			    method: "post",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({email: loginInput, password: password}),
				credentials: "include"
		})
		.then((response) => {
           if (response.ok) {
		        navigate("/profiles");
		      } else {
		        console.error("Login failed");
		        alert("email incorrect or Login failed or")
		      }
		})
		 .catch((error) => {
	      console.error("An error occurred:", error);
	    });
}

	function inputHandler(e) {
		setLoginInput(e.target.value); 
	}

	function passwordHandler(e) {
		setPassword(e.target.value); 
	}

	return (
		<div className="login-container">
            <input type="text" value={loginInput} onChange={inputHandler} placeholder="Enter your email here" /><br/>
            <input type="text" value={password} onChange={passwordHandler} placeholder="Enter your password here"/><br/>
            <button onClick={submitHandler}>submit</button>
		</div>
	);
}

export default Login;
