import { useState } from "react" ;
import "../styles/Login.css" ;

const STUB_USERNAME: string = "username";
const STUB_PASSWORD: string = "password";

type UserPassType = {
  username: string,
  password: string
}

function Login() {
  const [data, setData] = useState<UserPassType[]>([]);
  const [id, setId] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [loginMessage, setLoginMessage] = useState<string>("");

  console.log(data);
  const handleUser = (e : React.ChangeEvent<HTMLInputElement>) => {
    setId(_ => e.target.value);
  }
  const handlePass = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPass(_ => e.target.value);
  }
  const handleLogin = () => {
    console.log("Handling Login! username: "+ id + " Passowrd: "+pass);
    if (id === STUB_USERNAME) {
      if (pass === STUB_PASSWORD) {
        setLoginMessage("Login Successful!");
      } else {
        setLoginMessage("Incorrect password");
      }
    } else {
      setLoginMessage("Username not found");
    }
  }
  const handleSignUp = () => {
    console.log("User signed up!");
    console.log("Username: "+id+" Password: "+pass);
    setData((old: any): any => {
      return [...old, {username: id, password: pass}]
    });
  }
  return (
    <div className="login-holder">
      <h1>Login or Sign Up</h1>
      <input type="text" placeholder="Username" onChange={handleUser}/>
      <input type="password" placeholder="Password" onChange={handlePass}/>
      <div className="button-holder">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp}>Sign up</button>
      </div>
      <p>{loginMessage}</p>
    </div>
  );
}

export default Login;