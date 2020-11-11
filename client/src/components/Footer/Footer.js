import React from 'react'
import { useHistory } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from '../../assets/scss/footer.module.scss'
import Button from '@material-ui/core/Button';
import { Redirect, Link } from 'react-router-dom'


export default function Footer() {

  const history = useHistory()

  return (
    <div className={styles.footer_Container}>
    <a href="https://github.com/alecbrando/Digitize" className={styles.smallContainer}><GitHubIcon  fontSize="large" className={styles.logos}/></a>
    <a href="https://www.linkedin.com/in/alec-garcia-4159b0169/" className={styles.smallContainer}><LinkedInIcon  fontSize="large" className={styles.logos}/></a>
    </div>
  )
}
