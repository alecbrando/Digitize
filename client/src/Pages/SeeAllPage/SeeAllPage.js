import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer.js"
import styles from '../../assets/scss/search.module.scss'
import { NavLink, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { login } from '../../Redux/actions/authActions'
import { useHistory } from 'react-router-dom'
import Tile from '../../components/tile/tile'
import SearchIcon from '@material-ui/icons/Search';


export default function SeeAllPage() {
    window.scrollTo(0, 0)
    const cameras = useSelector(state => state.cameras)
    let brand = window.location.pathname.slice(5)


    const renderCameras = () => {
        if(cameras) {
        return Object.keys(cameras).map((camera) => {
            const cameraInfo = cameras[camera]
            if (cameraInfo.brand === brand) {
                            return (
                                <div className={styles.tileContainer}>
                                    <Tile key={cameraInfo.id} title={cameraInfo.title} url={cameraInfo.urls[0]} price={cameraInfo.price} id={cameraInfo.id} />
                                </div>
                            )
                        }
                    })
        }
    }

    const about = {
        "Nikon": "Legendary from F to Z For generations, Nikon cameras have been trusted by photographers and picture takers of every caliber for their enduring performance and outstanding image quality, empowering them to capture the essence of the moment.",
        "Sony": "Capture your moment with the best cameras from Sony. From pocket-size to professional-style, they all pack features to deliver the best quality pictures.",
        "Canon": "Canon EOS cameras enhance the photographic experience, whether you're a seasoned professional or a beginner. If you're a beginner, the EOS Rebel line will help you take your first steps in DSLR photography and enjoy great picture quality, responsive performance and new creative flexibility."
    }

    const header = about[brand]

    return (
        <>
            <Header></Header>
            <div className={styles.outContainer}>
                <div>
                    <h1 className={styles.headerSet}>{header}</h1>
                </div>
                <div className={styles.container}>
                {renderCameras()}
                </div>
            </div>
            <Footer />
        </>
    )

}
