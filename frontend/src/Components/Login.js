import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
      .then((res) => {
        alert("Login successful");
        navigate('/main'); 

    
      })
      .catch((err) => {
        alert("Invalid email or password");
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
    <h2>Login into your account</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit" className="btn btn-outline-success">Login</button>
      </div>
    </form>
  </div>
  );
};

export default Login;
