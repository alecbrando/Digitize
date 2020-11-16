import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { camera } from '../../Redux/actions/cameraActions'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from '../../assets/scss/product.module.scss'
import CustomCarousel from '../../components/Carousel/CarouselCamera'
import {addCart} from '../../Redux/actions/cartActions'
import { useHistory } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'

export default function ProductDetail() {
    const data = useSelector(state => state.cameras.camera)
    const loggedIn = useSelector(state => state.auth.id)
    const [cameraData, setCameraData] = useState({})
    const [images, setImages] = useState([])
    const [cameraInfo, setCameraInfo] = useState('')
    const [skuNumber, setSkuNumber] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('')
    const [quantity, setQuantity] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        let value = window.location.pathname.slice(9)
        dispatch(camera(value))  
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
    if(data) {
        setImages(data.urls)
        setCameraInfo(data.title)
        setSkuNumber(data.id)
        setDescription(data.description)
        setBrand(data.brand)
        setPrice(data.price)
        setType(data.type)
        setQuantity(data.quantity)
        setCameraData(data)
    }
    }, [data])

    const addToCart = () => {
        if(loggedIn) {
            dispatch(addCart(cameraData))
        }
    }

    return (
        <>
        <Header></Header>
            <div className={styles.productContainer}>

                <div className={styles.topContainer}>
                        <div className={styles.leftPane}>
                            {images ? <CustomCarousel items={images}>
                            </CustomCarousel> : ''
                            }
                            <div className={styles.cameraInfo}>
                                {cameraInfo}
                            </div>
                        </div>
                        <div className={styles.rightPane}>
                        <h1 className={styles.cameraTitle}>
                            {cameraInfo}
                        </h1>
                        <h3 className={styles.cameraSku}>
                            SKU: {skuNumber}
                        </h3>
                        <div className={styles.cameraCartParent}>
                        {loggedIn ? 
                        <Link to="/cart">
                        <button className={styles.cameraCart} onClick={addToCart}>
                                Add to Cart
                        </button>
                        </Link> :
                        <button className={styles.cameraCart} onClick={() => history.push('/login')}>
                                Log in
                        </button>   
                        }
                        </div>
                        </div>
                </div>
                <div className={styles.middleContainer}>
                    <h3 className={styles.productDetails}>
                        Product Details
                    </h3>
                    
                    <p className={styles.productDetailsInfo}>
                        {description}
                    </p>
                
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.cameraDetails}>
                        <div className={styles.cameraDetailsTitle}>Brand</div>
                        <div>{brand}</div>
                    </div>
                    <div className={styles.cameraDetails}>
                        <div className={styles.cameraDetailsTitle}>Type</div>
                        <div>{type}</div>
                    </div>
                    <div className={styles.cameraDetails}>
                        <div className={styles.cameraDetailsTitle}>Quantity</div>
                        <div>{quantity}</div>
                    </div>
                    <div className={styles.cameraDetails}>
                        <div className={styles.cameraDetailsTitle}>Price</div>
                        <div>${price}</div>
                    </div>
                </div>
        </div>
        <Footer></Footer>
        </>
        
    )
}
