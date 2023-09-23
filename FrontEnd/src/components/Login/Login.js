import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, Link } from "react-router-dom"
import './Login.css'; // Import your CSS file
import { useUser } from '../../UserContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { user, login, logout } = useUser();


    const handleLogin = async (e) => {
    e.preventDefault();
    console.log( email, password, isAdmin);
    // Add authentication logic here (e.g., check credentials)

    try {
        const response = await axios.post('http://localhost:5000/users/login', { email, password, isAdmin });
  
        // Check the response status or data for success or errors
        if (response.status === 200) {
          // Registration successful, handle accordingly (e.g., redirect)
          console.log('Login successful!');
          login({ username: 'exampleUser' });
          navigate("/");
        } else {
          // Registration failed, handle accordingly (e.g., display error messages)
          console.error('Login failed:', response.data);
          alert("Your login credentials are incorrect.")
          // prompt for user.
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error('An error occurred:', error);
      }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAdminCheckboxChange = (e) => {
    setIsAdmin(e.target.checked);
  };


  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <div className="login-form">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
      
          <label style={ {"text-align": "center"}}>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={handleAdminCheckboxChange}
            />
            Login as Admin
          </label>
       
        
           <button onClick={handleLogin}>Login</button>
           <p>
               Don't have an account? <Link to="/register">Register</Link>
           </p>
       
      </div>
    </div>
  );
}

export default LoginPage;

