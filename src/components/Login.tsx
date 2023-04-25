import { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Login() {
  const [id, setId] = useState<string>("");
  const [pass, setPass] = useState<string>("");
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
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idPass),
    });
    console.log(res);
    console.log("Status Code: " + res.status);
    if (res.status !== 200) {
      toast.error("Invalid Credentials");
      return;
    }
    navigate("/app");
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
    console.log("Status Code: " + res.status);
    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      toast.success(`${id} registered successfully`);
      return;
    }
    toast.error(data.message);
  };
  return (
    <div className="login-container">
      <div className="login-holder">
        <div className="login">
          <h1>NotesApp</h1>
          <input type="text" placeholder="Username" onChange={handleUser} />
          <input type="password" placeholder="Password" onChange={handlePass} />
          <div className="button-holder">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignUp}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
