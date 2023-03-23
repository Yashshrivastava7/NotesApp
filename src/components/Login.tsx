import { useEffect, useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { UserPassType } from "../types/Types";

function Login() {
  const [id, setId] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [loginMessage, setLoginMessage] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId((_) => e.target.value);
  };
  const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass((_) => e.target.value);
  };
  const handleLogin = async () => {
    const idPass = {
      username: id,
      password: pass,
    };
    const res = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idPass),
    });
    console.log("Status Code: "+res.status);
    if(res.status!==200){
      setLoginMessage("Invalid Credentials");
      return ;
    }
    setLoginMessage("Login Successful");
  };
  const handleSignUp = async () => {
    const idPass = {
      username: id,
      password: pass,
    };
    const res = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idPass),
    });
    console.log("Status Code: "+res.status);
    const data = await res.json();
    if(res.status===200){
      setLoginMessage(`${id} registered successfully`);
    }
  };
  return (
    <div className="login-holder">
      <h1>Login or Sign Up</h1>
      <input type="text" placeholder="Username" onChange={handleUser} />
      <input type="password" placeholder="Password" onChange={handlePass} />
      <div className="button-holder">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp}>Sign up</button>
      </div>
      <p>{loginMessage}</p>
    </div>
  );
}

export default Login;
