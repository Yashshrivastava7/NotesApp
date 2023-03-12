import { useEffect, useState } from "react";
import "../styles/Login.css";

type UserPassType = {
  username: string;
  password: string;
};

function Login() {
  const [data, setData] = useState<UserPassType[]>([]);
  const [id, setId] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [loginMessage, setLoginMessage] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    if (isClicked) {
      console.log(data);
      setIsClicked(false);
    }
  }, [isClicked]);

  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId((_) => e.target.value);
  };
  const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass((_) => e.target.value);
  };
  const handleLogin = () => {
    const filtered = data.filter((e) => e.username === id);
    if (filtered.length === 0) {
      setLoginMessage("Username not found !");
      return;
    }

    if (filtered[0].password === pass) {
      setLoginMessage("Login Successful");
    } else {
      setLoginMessage("Incorrect pass");
    }
  };
  const handleSignUp = () => {
    console.log("User signed up!");
    console.log("Username: " + id + " Password: " + pass);
    const filtered = data.filter((e) => e.username === id);
    if (filtered.length !== 0) {
      setLoginMessage("User already exists!");
      setIsClicked(true);
      return;
    }
    setData((old) => {
      return [...old, { username: id, password: pass }];
    });
    setIsClicked(true);
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
