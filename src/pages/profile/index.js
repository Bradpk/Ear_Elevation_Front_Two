import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import { useGlobalState } from '../../context/GlobalState';
import authService from '../../services/auth.service';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import axios from 'axios'; 

const ProfilePage = () => {
  const [postData, setPostData] = useState({ title: '', content: '' });
  const [fetchedData, setFetchedData] = useState([]);
  const [userLogs, setUserLogs] = useState([]);
  const {state, dispatch} = useGlobalState();
  
  // useEffect(() => {
  //   fetchPosts();
  // }, []);
//----------------------
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
//-----------------------
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/api/test/', postData);
  //     console.log('Post request response:', response.data);
  //     fetchPosts(); 
  //   } catch (error) {
  //     console.error('Error making post request:', error);
  //   }
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setPostData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  //------

  const fetchUserLogs = async () => {
    try {
      const user_id = state.user.user_id; 
      const response = await axios.get(`http://127.0.0.1:8000/api/user-log/${user_id}`);
      setUserLogs(response.data);
    } catch (error) {
      console.error('Error fetching user logs:', error);
    }
  };

  useEffect(() => {
    getName();
    fetchUserLogs(); 
  }, []);
  //-------------

  return (
    <div>
      <Navbar />
      {/* <h2>New Post</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={postData.content}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create Post</button>
      </form> */}

      <h2>Welcome!</h2>
      <p>{state.user.data && state.user.data.first_name}, {state.user.data && state.user.data.last_name}</p>
      <h2>Exercise History</h2>
      <ul>
        {userLogs.map((log, index) => (
          <li key={index}>
            <p>{log.exercise_id}</p>
            <p>{log.date_completed}</p>
            <p>{log.total_questions}</p>
            <p>{log.correct_answers}</p>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;


