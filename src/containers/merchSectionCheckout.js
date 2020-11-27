import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CheckoutItem } from '../components/checkoutItem'
import { StripeCheckout } from '../components/stripeCheckout'

export const MerchSectionCheckout = () => {

    const location = useLocation()

    if(location.data !== undefined){ 
        window.localStorage.setItem("items", JSON.stringify(location.data.itemsInCart))
        window.localStorage.setItem("total", location.data.total)
    }

    const [checkoutInfo, setCheckoutInfo] = useState({ 
        checkoutItems: JSON.parse(window.localStorage.getItem("items")),
        total: window.localStorage.getItem("total")
     })


    function removeItemFromCheckout(index){
        setCheckoutInfo((prevState) => {
            /* this is close, just gotta get it at the correct index */
            return{
                itemsInCart: prevState.checkoutItems.splice(prevState.checkoutItems[index], 1),
                total: prevState.total
            }
        })
    }

    let selectedItemsDivs = <li key={ 0 }>
                                <p>Oh no! Your cart's empty! Go back and select something to purchase first.</p>
                            </li>
        if(checkoutInfo.checkoutItems.length > 0){                      
            selectedItemsDivs = checkoutInfo.checkoutItems.map((value, index) => {

            return(
                <CheckoutItem key={ index }
                                image={ value.image } 
                                name={ value.name } 
                                quantity={ value.quantity } 
                                price={ value.price } 
                                size={ value.size }
                                removeFunc={ removeItemFromCheckout } />
            )
        })
    }

        return(
            <div id="checkout-section" className="trans-page">
                <div id="checkout-top">
                    <Link to="/merch"><button><img alt="image_return_arrow" src="/images/baseline_chevron_left_black_18dp.png" />Back to selections</button></Link>
                    <p>Lucky13 Tattoos Checkout</p>
                    <div></div>
                </div>
                <ul>
                    { selectedItemsDivs }
                    <div id="checkout-numbers">
                        <p style={{ opacity: "25%" }}>Taxes: { (checkoutInfo.total * 0.13).toFixed(2) }</p>
                        <p>Total: { parseFloat(checkoutInfo.total).toFixed(2) }</p>
                    </div>
                </ul>
                  <StripeCheckout totalPrice={ checkoutInfo.total }/>
            </div>
        )
    }
