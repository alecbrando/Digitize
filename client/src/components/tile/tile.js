import { StylesProvider } from '@material-ui/core'
import React from 'react'
import styles from '../../assets/scss/tile.module.scss'
export default function tile(props) {
    console.log(props)
    return (
        <div className={styles.imgContainer}>
            <img  height="150px" src={props.url}/>
            <div className={styles.tileContainer}>{props.title}</div>
        </div>
    )
}
