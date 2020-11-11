import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer.js"
import styles from '../../assets/scss/login.module.scss'
import { NavLink, Redirect } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { login } from '../../Redux/actions/authActions'


export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const currentId = useSelector(state => state.auth.id)

  const demo = () => {
    dispatch(login('demo@demo.com', 'password'))
  }

  const onLogin = () => {
    dispatch(login(email, password))
  }

  if(currentId) return <Redirect to="/"/>

  return (
    <>
      <Header></Header>
      <div className={styles.outContainer}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img height="500" width="600" src="http://clipart-library.com/images_k/camera-png-transparent/camera-png-transparent-11.png" />
        </div>
        
        <div className={styles.rightContainer}>
          <div className={styles.loginText}>
            <h2>Login</h2>
          </div>
          <label htmlFor="email" className={styles.labelText}>Email</label>
          <input type="text" name="email" className={styles.inputs} value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password" className={styles.labelText}>Password</label>
          <input type="password" name="password"  className={styles.inputs} value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className={styles.bottomLink}>
            <p><NavLink className={styles.bottomLink} to="/signup">CREATE ACCOUNT</NavLink></p>
          </div>
          <div className={styles.bottomButtons}>
          <Button variant="contained" onClick={onLogin}>Login</Button>
          <Button variant="contained" onClick={demo}>Demo</Button>
        </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
  
}
