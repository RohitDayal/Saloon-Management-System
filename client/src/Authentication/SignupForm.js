import React, { useState } from "react";
import LoginForm from "./LoginForm";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(false);

  async function signup(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      body: JSON.stringify({ name, mail, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      setName("");
      setPassword("");
      setMail("");
      alert("Registration successful");
    } else {
      alert("Registration failed");
    }
  }
  const handleToggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };
  return (
    <>
      {isLoginMode ? (
        <LoginForm />
      ) : (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign up</h3>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  value={mail}
                  onChange={(ev) => setMail(ev.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3 Auth-btn" >
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={signup}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
     
      <button onClick={handleToggleMode} className="toggle-btn">
        {isLoginMode ? "Sign up" : "Sign in"}
      </button>
    </>
  );
};

export default SignupForm;
