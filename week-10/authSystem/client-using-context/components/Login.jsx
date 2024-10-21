import React, { useContext, useState } from "react";
import { signup, login } from '../src/services/api'
import { AuthContext } from "../context/AuthContext";


const Login = () => {

  const { login } = useContext(AuthContext); //import login from context directly 

  //create states for signup and login forms
  const [signupData, setSignupData] = useState({username: '', password: ''})
  const [loginData, setLoginData] = useState({username: "", password: ""});

  //create state for error messages
  const [message, setMessage] = useState('')

  //handle the form input changes for both the states here
  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name] : e.target.value
    })
  }

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  //handle both the form submission functionalities

  const handleSignupSubmit = async (e) => {
    e.preventDefault(); //prevent default submission in forms
    try{
      const response = await signup(signupData.username, signupData.password);
      console.log(response.data.message);
      setMessage(response.data.message);
    }catch(error){
      if(error.response){
        console.log(error.response.data.message); //correctly access the error response object in the catch block
        setMessage(error.response.data.message);
      } else {
        console.error('Error during signup', error.message);
        setMessage('An error occurred during signup, please try again');
      }

    }
  } 

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); //prevent default submission in forms
    try {
      const response = await login(loginData.username, loginData.password);
      console.log(response.data.message);
      // setAuthState({
      //   username: loginData.username,
      //   isLoggedIn: true
      // })

      //just call the login function declared above from context
      login(username);
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        setMessage(error.response.data.message);
      } else {
        console.error("Error during login", error.message);
        setMessage("An error occurred during login, please try again");
      }
    }
  };

  return (
    <div>
      {message && <p>{message}</p>}
      {/* Signup Form */}
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignupSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username" //here we can't use signup-username as we defined the handleInputChange function as username as key
              value={signupData.username}
              onChange={handleSignupChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      {/* Login Form */}
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
