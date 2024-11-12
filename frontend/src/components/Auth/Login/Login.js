import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../utils/utils";
import "./Login.css";

function Login() {
	const [ loginInput, setLoginInput ] = useState("");
	const [input, setInput] = useState("");
    const navigate = useNavigate();

function submitHandler() {
		fetch(`${apiUrl}/login`, {
			    method: "post",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({email: loginInput}),
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
		setLoginInput(e.target.value); 
	}

	return (
		<div className="login-container">
			<h1>login testing phase now please use existing email. Use any to see result</h1>
			<h3 style={{color: "white"}}>himansu@gmail.com</h3>
			<h3 style={{color: "white"}}>h@gmail.com</h3>
            <input type="text" value={loginInput} onChange={inputHandler} placeholder="himansu@gmail.com" />
            <button onClick={submitHandler}>submit</button>
		</div>
	);
}

export default Login;
