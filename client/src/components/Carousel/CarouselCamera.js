import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, StylesProvider } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import styles from '../../assets/scss/carousel.module.scss'
export default function CustomCarousel(props) {
    return (
        <Carousel className={styles.formatImg} autoPlay>
            {
                props.items.map((item, i) => <img height="350px" width="350px" key={i} src={item} />)
            }
        </Carousel>
    )
    
}