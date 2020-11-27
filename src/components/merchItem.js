import React, { useState } from 'react'

export const MerchItem = (props) => {

    const [state, setState] = useState(
        {
            quantity: 0,
            size: ""
        }
    )

    function changeCount(number){
        if(state.quantity <= 0 && number === -1){
            number = 0
        }
        setState({
            quantity: state.quantity + number,
            size: state.size
        })
    }

    /* 
    
        let allSizes = sizes?.map((value, index) => {
            return(
                <li key={ index }>
                    <button >{ value }</button>
                </li>
            )
        })

    */

    return(
        <li key={ props.index } id="merch-item-block">
            <p className="merch-text">{ props.name }</p>
            <div id="merch-block-top">
                <img alt="image_merch" src={ props.image }></img>
            </div>
            <div id="merch-block-bot">
                <p className="merch-text"id="price">${ props.price }</p>
            </div>
            <div id="merch-quantity">
                <button className="quantity-button" onClick={ () => changeCount(1) }>+</button>
                    <p>{ state.quantity }</p>
                <button className="quantity-button" onClick={ () => changeCount(-1) }>-</button>
            </div>
            <button className="checkout-buttons" onClick={ () => {
                setState({quantity: 0, size: state.size})
                props.addFunc(props.image, state.quantity, props.name, props.price, state.size)}}>
                    Add to Cart
            </button>
        </li>
    )
}