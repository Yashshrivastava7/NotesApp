import { useState } from "react" ;
import "../styles/Login.css" ;

export default function Login() {
  return (
    <div className="login-holder">
      <h1>Login or Sign Up</h1>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <div className="button-holder">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}
