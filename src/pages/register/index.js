import React, { useEffect, useState,} from "react";
import AuthService from "../../services/auth.service";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../../context/GlobalState";
import Navbar from '../../components/navbar';
import styles from './register.module.css';
import jwtDecode from 'jwt-decode';
//------------------------------------------------------------------------------------------------------------------------------
function Register() {
  const {state, dispatch} = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });
//------------------------------------------------------------------------------------------------------------------------------
  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
//------------------------------------------------------------------------------------------------------------------------------
  async function handleRegister(e) {
    e.preventDefault();
    try {
      await AuthService.register(user);
      
      const loginResp = await AuthService.login(user.email, user.password, user.username);
  
      if (loginResp.access) {
        const data = jwtDecode(loginResp.access);
        await dispatch({
          type: 'SET_USER',
          payload: data,
        });
        router.push('/');
      } else {
        console.log('Login after registration failed');
        dispatch({ type: 'LOGOUT_USER' });
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }
//------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className={styles.container}>
        <h1>Register</h1>
      <div className="flex">
        <form className="mx-auto border-2 bg-mtgray" onSubmit={handleRegister}>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="firstName">First Name:</label><br></br>
            <input
              className="border"
              type="text"
              id="firstName"
              required
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="lastName">Last Name:</label><br></br>
            <input
              className="border"
              type="text"
              id="lastName"
              required
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="email">Email:</label><br></br>
            <input
              className="border"
              type="text"
              id="email"
              required
              onChange={(e) => {
                let olduser = user;
                olduser.email = e.target.value;
                olduser.username = e.target.value;
                setUser(olduser);
              }}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="password">Password:</label><br></br>
            <input
              className="border"
              type="password"
              id="password"
              required
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="passwordConf">Confirm Password:</label><br></br>
            <input
              className="border"
              type="password"
              id="passwordConf"
              required
              onChange={(e) => handleChange("passwordConf", e.target.value)}
            />
          </div>
          <div className="flex">
            <input
              type="submit"
              value="Register!"
              className={styles.button}
              disabled={
                user.password &&
                user.password.length >= 8 &&
                user.password === user.passwordConf &&
                user.firstName &&
                user.lastName &&
                user.email
                  ? false
                  : true
              }
            />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;