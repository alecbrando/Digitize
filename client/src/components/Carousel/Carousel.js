import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, StylesProvider} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import styles from '../../assets/scss/carousel.module.scss'
export default function CustomCarousel(props)
{
    var items = [
            "https://i.imgur.com/jVxBVqE.jpg"
        ,
            "https://i.imgur.com/QIYhIrM.jpg"
        ,
            "https://i.imgur.com/IM5Aoot.jpg"
    ]
 
    return (
        <Carousel className={styles.formatImg} autoPlay>
            {
                items.map( (item, i) => <img height="600px" width="1339px" key={i} src={item} /> )
            }
        </Carousel>
    )
}