import React, {useEffect, useState} from "react";
import Tile from '../tile/tile'
import styles from '../../assets/scss/section.module.scss'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

export function Section(props) {
    const history = useHistory()

    const renderCameras = () => {
        if(props.data){
            return props.data.map(camera => {
                return (
                      <Tile key={camera.id} title={camera.title} url={camera.urls[0]} price={camera.price} id={camera.id}/>
                )
            })
        }
    }

    useEffect(() => {

    }, [props.data])

    return (
        <div className={styles.container}>
            <div className={styles.topSec}>
                <h1 className={styles.topText}>{props.name}</h1>
                <Button variant="outlined" onClick={() => history.push(`/all/${props.brand}`)} >See All</Button>
            </div>
            <div className={styles.tile}>
                {renderCameras()}
            </div>
        </div>
    )
}
