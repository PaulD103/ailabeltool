import React from 'react';

import './style.css';

import Navigation from '../navigation/index.tsx';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth.ts';


const LogIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = "PD";
    const username = document.getElementById("username")?.nodeValue;
    const password = document.getElementById("password")?.nodeValue;
    dispatch(authActions.login({name, username, password}));
  };
  return(
    <div className='login'>
      <Navigation />
      <div className='loginForm'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input id='username' name='username' />
          <label htmlFor='password'>Password</label>
          <input id='password' name='password' />
          <button className='loginButton' type='submit'>
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;