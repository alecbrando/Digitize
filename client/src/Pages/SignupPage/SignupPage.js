import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer.js"
import styles from '../../assets/scss/login.module.scss'
import { NavLink, Redirect } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { signup } from '../../Redux/actions/authActions'


export default function SignUpPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const currentId = useSelector(state => state.auth.id)


  const onSignIn = () => {
    dispatch(signup(email, password))
  }

  if(currentId) return <Redirect to="/"/>

  return (
    <>
      <Header></Header>
      <div className={styles.outContainer}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img height="500" width="600" src="https://i.imgur.com/ejG8NLS.png" />
        </div>
        
        <div className={styles.rightContainer}>
          <div className={styles.loginText}>
            <h2>Sign Up</h2>
          </div>
          <label htmlFor="username" className={styles.labelText}>Username</label>
          <input type="text" name="username" className={styles.inputs} value={email} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="email" className={styles.labelText}>Email</label>
          <input type="text" name="email" className={styles.inputs} value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password" className={styles.labelText}>Password</label>
          <input type="password" name="password"  className={styles.inputs} value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className={styles.buttonContainer}>
          <button className={styles.bottomButtons} onClick={onSignIn}>Sign Up</button>
        </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
  
}
