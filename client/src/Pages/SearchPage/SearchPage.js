import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer.js"
import styles from '../../assets/scss/search.module.scss'
import Tile from '../../components/tile/tile'
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux'
import { retrieveCameras } from '../../Redux/actions/cameraActions'


export default function SearchPage() {
    window.scrollTo(0, 0)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const cameras = useSelector(state => state.cameras)

    useEffect(() => {
        dispatch(retrieveCameras())
    }, [])


    const renderCameras = () => {
        if(cameras) {
        return Object.keys(cameras).map((camera) => {
            let cameraInfo = cameras[camera]
            if(cameraInfo.title){
            if (cameraInfo.title.toLowerCase().includes(value.toLowerCase())) {
                            return (
                                <div className={styles.tileContainer}>
                                    <Tile key={cameraInfo.id} title={cameraInfo.title} url={cameraInfo.urls[0]} price={cameraInfo.price} id={cameraInfo.id} />
                                </div>
                            )
                        }
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
