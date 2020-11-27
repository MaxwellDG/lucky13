import React from 'react'

export const CheckoutItem = (props) => {

    function getItemDescription(name){
        switch(name){
            case "Lucky13 T-shirt":
                return "A cotton graphic-T."
            case "Rocksteady T-shirt":
                return "A cotton graphic-T with animals with shirts on them."
            case "13 Bracelet":
                return "An adult-sized bracelet made out of beads."
            case "1-hour Giftcard":
                return "A giftcard for 1 hour of tattoo time with any artist. * Note that the minimum time allowed per appointment is 1 hour."
            case "3-hour Giftcard":
                return "A giftcard for 3 hours of tattoo time with any artist. * Note that the minimum time allowed per appointment is 1 hour."        
            default:
                return "Checkout item"        
        }
    }

    return(
        <li key={ props.index }>
            <img alt="image_checkout_item" src={ props.image } />
            <div>
                <p id="checkout-item-name">{ props.name }</p>
            </div>
            <div>
                <p>{ getItemDescription(props.name) }</p>
            </div>
            <div>
                <p>{ props.size }</p>
            </div>
            <div>
                <p>@</p>
                <p>$ { props.price }</p>
            </div>
            <div>
                <p>x</p>
                <p>{ props.quantity }</p>
            </div>
            <div>
                <p>=</p>
                <p id="checkout-item-total">${ (props.quantity * props.price) }.00</p>
            </div>
            <button id="checkout-item-x" onClick={ () => props.removeFunc(props.index) }>X</button>  
        </li>
    )

}