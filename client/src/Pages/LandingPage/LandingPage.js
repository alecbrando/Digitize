import React, {useEffect, useState} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { Section } from '../../components/section/section'
// core components
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer.js"
import styles from "../../assets/scss/landing.module.scss"
import CustomCarousel from '../../components/Carousel/Carousel'
import Banner from '../../components/BannerSeperator/Banner'



export default function LandingPage() {
  const [cameras_first, setCameras] = useState()
  const [cameras_second, setCameras_sec] = useState()
  const [cameras_third, setCameras_third] = useState()
  const data = useSelector(state => state.cameras)

  let arr = []

    useEffect(() => {
      Object.keys(data).map(camera =>  arr.push(data[camera]))
      setCameras(arr.slice(0,5))
      setCameras_sec(arr.slice(5,10))
      setCameras_third(arr.slice(10,15))
    }, [data])
    
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <div className={styles.jumbotron}>
          <CustomCarousel/>
        </div>
      </div>
      <div className={styles.pictureContainer}>
        <Section name={'Nikon Collection'} data={cameras_first}/>
        <div className={styles.bannerContainer}>
          <Banner url={"https://i.imgur.com/SCoQg63.jpg"}/> 
        </div>
        <Section name={'Sony Collection'} data={cameras_second}/>
        <div className={styles.bannerContainer}>
          <Banner url={"https://i.imgur.com/VV5uBT7.jpg"}/> 
        </div>
        <Section name={'Canon Collection'} data={cameras_third}/>
      </div>
      <Footer/>
    </div>
  )
}