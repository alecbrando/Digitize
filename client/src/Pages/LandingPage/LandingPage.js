import React from "react";
import {useDispatch, useSelector } from 'react-redux';

// core components
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer.js"
import styles from "../../assets/scss/landing.module.scss"
import CustomCarousel from '../../components/Carousel/Carousel'




export default function LandingPage() {
  const data = useSelector(state => state.cameras)
  console.log(data)

  const renderOut = () => {
      const result = Object.keys(data).map(camera => {
              return (
                <div>
                  <img height="500px" src={data[camera].urls[0]}/>
                </div>
              )
      })

      return result;
    }
    
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <div className={styles.jumbotron}>
          <CustomCarousel/>
        </div>
      </div>
      <div>
        {renderOut()}
      </div>
      
      <Footer/>
    </div>
  )
}