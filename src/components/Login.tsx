import { useState } from "react" ;
import "../styles/Login.css" ;

type userPass = {
  username : string ;
  password : string ;
}

function Login() {
  const [log , setLog] = useState<userPass[]>([]);
  let id : string = "" ;
  let pass : string = "" ;
  const handleUser = (e : React.ChangeEvent<HTMLInputElement>) => {
    id = e.target.value ;
  }
  const handlePass = (e : React.ChangeEvent<HTMLInputElement>) => {
    pass = e.target.value ;
  }
  const handleLogin = () => {
    let flag : number = 0;
    log.map((n) => { 
      if(n.username === id){
        flag = 1;
        if(n.password === pass) {
          <p>
            Login Successful
          </p>
        }
        else {
            <p className="red">
              Wrong Password
            </p>
        }
      }
    });
    if(log.length === 0 || flag === 0) {
        <p className="red">
          User does not exist
        </p>
    }
    console.log(log);
  }
  const handleSignUp = () => {
    setLog((old : userPass[]) : userPass[] => {
      let newLog : userPass = { username : id , password : pass} ; 
      return [newLog , ...old]
    });
    console.log(log);
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
    </div>
  );
}

export default Login;