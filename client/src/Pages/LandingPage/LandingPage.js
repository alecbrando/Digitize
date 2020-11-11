import React from "react";

// core components
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer.js"
import styles from "../../assets/scss/landing.module.scss"





export default function LandingPage() {
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <div className={styles.jumbotron}>
          <img className={styles.cropped} src="https://i.imgur.com/jVxBVqE.jpg"/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}