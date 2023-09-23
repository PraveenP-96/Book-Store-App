// import React, { useState } from 'react';
// import axios from 'axios';
// import {useNavigate} from "react-router-dom";

// function Registration() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     isAdmin:'',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Add registration logic here (e.g., send data to a server)
//     console.log('Registration Data:', formData);
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3001/api/register', formData);

//       // Check the response status or data for success or errors
//       if (response.status === 200) {
//         // Registration successful, handle accordingly (e.g., redirect)
//         console.log('Registration successful!');
//         // add reg alert
//         navigate("/login");
//       } 
//       else if(response.status === 201)
//     {
//       alert('Registration failure. Email already in use.');
//     }else {
//         // Registration failed, handle accordingly (e.g., display error messages)
//         console.error('Registration failed:', response.data);
//         alert('Your registration request failed. please try again.');
//       }
//     } catch (error) {
//       // Handle network errors or other exceptions
//       console.error('An error occurred:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>      
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Registration;

import React, { useState } from 'react';
import './Register.css'; // Import your CSS file
import axios from 'axios';
import {useNavigate, Link} from "react-router-dom";

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {

    const newPassword = e.target.value;
    setPassword(newPassword);

    // Check if the password meets the requirements
    //const isAlphanumeric = /^[0-9a-zA-Z]+$/.test(newPassword);
    const isMinLength = newPassword.length >= 6; // Adjust the minimum length as needed

    setIsPasswordValid(isMinLength);
  
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAdminCheckboxChange = (e) => {
    setIsAdmin(e.target.checked);
  };

  const handleRegister = async (e) => {
    // Here, you can add your registration logic
    // You can use 'email', 'password', 'confirmPassword', 'name', and 'isAdmin' states
    // to send a registration request to your backend and handle the registration accordingly.
     // Add registration logic here (e.g., send data to a server)
   // console.log('Registration Data:', formData);
    e.preventDefault();

    if (isPasswordValid === false) {
        
        alert('Password does not meet the requirements.');
      }
      
    if(password.length === 0 || email.length === 0 || name.length === 0)
    {
        alert('Please enter all the fields.');
    }
    else
    {

    try {
      const response = await axios.post('http://localhost:5000/users/register', name, email, password, isAdmin);

      // Check the response status or data for success or errors
      if (response.status === 200) {
        // Registration successful, handle accordingly (e.g., redirect)
        console.log('Registration successful!');
        // add reg alert
        navigate("/login");
      } 
      else if(response.status === 201)
    {
      alert('Registration failed. Email already in use.');
    }else {
        // Registration failed, handle accordingly (e.g., display error messages)
        console.error('Registration failed:', response.data);
        alert('Your registration request failed. please try again.');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('An error occurred:', error);
    }
  }

  };

   

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <div className="registration-form">
      <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
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
        {!isPasswordValid && (
          <p className="error-message">Password must be at least 6 characters long.</p>
        )}
        <div className="checkbox">
          <label style={ {"text-align": "center"}}>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={handleAdminCheckboxChange}
            />
            Register as Admin
          </label>
        </div>
        <button onClick={handleRegister}>Register</button>
        <p>
           Already have an account? <Link to="/login">Login</Link>
      </p>
      </div>
    </div>
  );
}

export default RegistrationPage;
