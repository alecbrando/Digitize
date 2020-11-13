import React, {useEffect, useState} from "react";
import Tile from '../tile/tile'
import styles from '../../assets/scss/section.module.scss'
import Button from '@material-ui/core/Button';

export default function section(props) {

    console.log(props)
    const renderCameras = () => {
        if(props.data){
            props.data.map(camera => {
                return <Tile title={camera.title} url={camera.urls[0]} price={camera.price} id={camera.id}/>
            })
        }
    }

    useEffect(() => {

    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.topSec}>
                <h1 className={styles.topText}>{props.name}</h1>
                <Button variant="outlined" >See All</Button>
            </div>
            <div>
                {renderCameras()}
            </div>
        </div>
    )
}
