import { useState, useEffect } from "react";
import { apiUrl } from "../../../utils/utils";
import "./Login.css";

function Login() {
	const [ loginInput, setLoginInput ] = useState("");
	const [input, setInput] = useState("");


function submitHandler() {
		fetch(`${apiUrl}/login`, {
			    method: "post",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({email: loginInput}),
				credentials: "include"
		})
}

	function inputHandler(e) {
		setLoginInput(e.target.value); 
	}

	return (
		<div className="login-container">
			<h1>I am Login page</h1>
            <input type="text" value={loginInput} onChange={inputHandler} />
            <button onClick={submitHandler}>submit</button>
		</div>
	);
}

export default Login;
