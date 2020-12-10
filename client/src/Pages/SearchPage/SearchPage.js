import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer.js"
import styles from '../../assets/scss/search.module.scss'
import {  useSelector } from 'react-redux';
import Tile from '../../components/tile/tile'
import SearchIcon from '@material-ui/icons/Search';


export default function SearchPage() {
    const [value, setValue] = useState('')
    const cameras = useSelector(state => state.cameras)


    const renderCameras = () => {
        if(cameras) {
        return Object.keys(cameras).map((camera) => {
            const cameraInfo = cameras[camera]
            if (cameraInfo.title.includes(value)) {
                            return (
                                <div className={styles.tileContainer}>
                                    <Tile key={cameraInfo.id} title={cameraInfo.title} url={cameraInfo.urls[0]} price={cameraInfo.price} id={cameraInfo.id} />
                                </div>
                            )
                        }
                    })
        }
    }

    const handleSearch = (value) => {
        setValue(value)
    }

    return (
        <>
            <Header></Header>
            <div className={styles.outContainer}>
                <div>
                    <h1>Shop All</h1>
                </div>
                <div className={styles.searchSection}>
                <SearchIcon fontSize='large' />
                    <input className={styles.input} placeholder='Type a Value' onChange={(e) => handleSearch(e.target.value)} value={value}></input>
                </div>
                <div className={styles.container}>
                {renderCameras()}
                </div>
            </div>
            <Footer />
        </>
    )

}
