import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { camera } from '../../Redux/actions/cameraActions'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from '../../assets/scss/cart.module.scss'
import CustomCarousel from '../../components/Carousel/CarouselCamera'
import { addCart, removeCart } from '../../Redux/actions/cartActions'
import { useHistory, Link } from 'react-router-dom'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CartTile from '../../components/CartTile/CartTile'

export default function CartPage() {
    const cart = useSelector(state => state.carts)
    const data = useSelector(state => state.cameras.camera)
    const [price, setPrice]= useState(0)
    const loggedIn = useSelector(state => state.auth.id)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        let value = window.location.pathname.slice(9)
        dispatch(camera(value))
        getPrice();
    }, [cart])

    const renderCart = () => {
        return cart.map((camera, i) => {
            return <CartTile key={i} title={camera.title} price={camera.price} url={camera.urls[0]} id={camera.id} />
        })
    }

    const getPrice = () => {
        let total = 0;
        cart.forEach(camera => total = total + camera.price);
        total = total.toFixed(2)
        setPrice(total)
    }

    return (
        <>
            <Header></Header>
            <div className={styles.cartContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.leftPane}>
                        <div className={styles.topHalfCart}>
                            <h2 className={styles.cartInfo}>
                            Shopping Cart
                            </h2>
                            <div className={styles.cartInfoItems}>
                            TOTAL ITEMS: {cart.length}
                            </div>
                        </div>
                        <div className={styles.bottomHalfCart}>
                            <div>
                                {renderCart()}
                    
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightPane}>
                    <div className={styles.orderInfo}>
                            <div className={styles.orderSummary}>
                                Order Summary
                            </div>    
                            <div className={styles.orderDetails}>
                                <div>
                                    Ship To
                                </div>
                                <div>
                                    1600 Amphitheatre Parkway Mountain View
                                </div>
                            </div>  
                            <div className={styles.orderDetails}>
                                <div>
                                    Payment
                                </div>
                                <div className={styles.creditCard}>
                                    <CreditCardIcon/>
                                    3432
                                </div>
                            </div>    
                            <div className={styles.orderDetails}>
                                <div>
                                    Subtotal
                                </div>
                                <div>
                                    $25
                                </div>
                            </div>    
                            <div className={styles.orderDetails}>
                                <div>
                                    Shipping
                                </div>
                                <div>
                                    $19.99
                                </div>
                            </div>    
                            <div className={styles.orderDetails}>
                                <div>
                                    Total
                                </div>
                                <div>
                                    ${price}
                                </div>
                            </div>    
                              
                    </div>
                        <div className={styles.bottomInfo}>
                            <div className={styles.bottomInfoEach}>
                                <Link to='https://www.linkedin.com/in/alec-garcia-4159b0169/' className={styles.link}>Linkedin</Link>
                            </div>    
                            <div className={styles.bottomInfoEach}>
                                <Link to='https://github.com/alecbrando/Digitize' className={styles.link}>Github</Link>
                            </div>    
                        </div>        
                    </div>
                </div>
                <div className={styles.middleContainer}>
                    
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
