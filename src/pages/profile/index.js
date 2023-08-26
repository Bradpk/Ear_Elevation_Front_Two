import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import { useGlobalState } from '../../context/GlobalState';
import authService from '../../services/auth.service';
import styles from './profile.module.css';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import axios from 'axios'; 
//------------------------------------------------------------------------------------------------------------------------------
const ProfilePage = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [userLogs, setUserLogs] = useState([]);
  const {state, dispatch} = useGlobalState();
//------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user);
        dispatch({
            type: 'SET_USER',
            payload: user
        });
      }
    };
    getUserFromLocalStorage();
  }, []);

  useEffect(() => {
    getName();
    fetchUserLogs();
  }, [state.user]); 
//------------------------------------------------------------------------------------------------------------------------------
  const getName = async () => {
    try {
      console.log(state)
      const user_id = state.user.user_id
      const response = await axios.get('http://127.0.0.1:8000/api/huh/' + user_id); 
      const newUser = state.user;
      newUser.data = response.data;
      await dispatch({
      currentUser: newUser
      });
      console.log(response.data)
      setFetchedData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
//------------------------------------------------------------------------------------------------------------------------------
  const fetchUserLogs = async () => {
    try {
      const user_id = state.user.user_id; 
      const response = await axios.get(`http://127.0.0.1:8000/api/user-log/${user_id}`);
      setUserLogs(response.data);
    } catch (error) {
      console.error('Error fetching user logs:', error);
    }
  };
//------------------------------------------------------------------------------------------------------------------------------
  const deleteLog = async (logId, index) => {
    try {
      setUserLogs((prevLogs) =>
        prevLogs.map((log, i) =>
          i === index ? { ...log, deleting: true } : log
        )
      );
  
      await new Promise((resolve) => setTimeout(resolve, 250));
      await axios.delete(`http://127.0.0.1:8000/api/user-logs/${logId}`);
  
      setUserLogs((prevLogs) => prevLogs.filter((log) => log.log_id !== logId));
    } catch (error) {
      console.error('Error deleting user log:', error);
    }
  };
//------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
      <h2>Welcome!</h2>
      <p className={styles.name}>
  {state.user && state.user.data
    ? `${state.user.data.first_name}, ${state.user.data.last_name}`
    : 'User'}
</p>
      <h2>Exercise History</h2>
      <div className={styles.buttonGrid}>
        {userLogs.map((log, index) => (
         <li
         className={`${styles.box} ${log.deleting ? styles.deleting : ''}`}
         key={index}
       >
            <p className={styles.bold}>{log.exercise_id}</p>
            <p>{log.date_completed}</p>
            <p>{log.total_questions}</p>
            <p>{log.correct_answers}</p>
            <p>{log.percentage_correct}%</p>
            <button
      className={styles.button}
      onClick={() => deleteLog(log.log_id, index)}
    >
      Delete
    </button>
  </li>
))}
      </div>
    </div>
    </div>
    
  );
};

export default ProfilePage;