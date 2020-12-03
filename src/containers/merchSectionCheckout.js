import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CheckoutItem } from '../components/checkoutItem'
import { StripeCheckout } from '../components/stripeCheckout'

export const MerchSectionCheckout = () => {

    const location = useLocation()

    const [checkoutInfo, setCheckoutInfo] = useState({ 
        checkoutItems: location.data ? location.data.itemsInCart : [],
        total: location.data ? location.data.total : 0
     })


    function removeItemFromCheckout(index, price){
        console.log(index)
        let newArray = Object.assign([], checkoutInfo.checkoutItems)
        newArray.splice(index, 1)
        setCheckoutInfo({
            checkoutItems: newArray,
            total: checkoutInfo.total - price
        })
    }

    let selectedItemsDivs = <li id="empty-cart" key={ 0 }>
                                <p>Oh no! Your cart's empty! Go back and select something to purchase first.</p>
                            </li>
        if(checkoutInfo.checkoutItems.length > 0){                      
            selectedItemsDivs = checkoutInfo.checkoutItems.map((value, index) => {
            return(
                <CheckoutItem   index={ index }
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
            <div id="checkout-section">
                <div id="checkout-top">
                    <Link to="/merch"><button><img alt="image_return_arrow" src="/images/baseline_chevron_left_black_18dp.png" />Back to selections</button></Link>
                    <p>Lucky13 Tattoos Checkout</p>
                    <div></div>
                </div>
                <ul>
                    { selectedItemsDivs }
                    <div id="checkout-numbers">
                        <p style={{ opacity: "25%" }}>Taxes: { (checkoutInfo.total * 0.13).toFixed(2) }</p>
                        <p>Total: { parseFloat(checkoutInfo.total * 1.13).toFixed(2) }</p>
                    </div>
                </ul>
                  <StripeCheckout totalPrice={ checkoutInfo.total }/>
            </div>
        )
    }
