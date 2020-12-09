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


export default function SearchPage() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    const history = useHistory()

    const cameras = useSelector(state => state.cameras)


    const renderCameras = () => {

        if(cameras) {
        return Object.keys(cameras).map((camera) => {
            const cameraInfo = cameras[camera]
            // console.log(cameras)
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
        console.log(value)
        
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
