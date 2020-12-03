import React from 'react'
import { MerchItem } from '../components/merchItem'
import { Link } from 'react-router-dom'


export default class MerchSection extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            itemsInCart: [],
            total: 0.00
        }
        this.addToCheckout = this.addToCheckout.bind(this)
    }

    addToCheckout(image, quantity, name, price, size){
        this.setState((prevState) => {
            return{
                itemsInCart: [...prevState.itemsInCart, {image, name, quantity, price, size}],
                total: prevState.total + (quantity * price)
            }
        })
    }

    removeFromCheckout(index, price){
        this.setState((prevState) => {
            let newArray = Object.assign([], prevState.itemsInCart)
            newArray.splice(index, 1)
            return{
                itemsInCart: newArray,
                total: prevState.total - price
            }
        })
    }

    render(){
        const { itemsInCart, total } = this.state

        let selectedItems = itemsInCart.map((value, index) => {
            return(
                <li key={ index }>
                    <p style={{color: "black"}}>{ value.name }</p>
                    <p>{ value.size }</p>
                    <p>x { value.quantity }</p>
                    <p>$ { value.price * value.quantity }</p>
                    <button id="merch-x" onClick={() => this.removeFromCheckout(index, (value.price * value.quantity)) }>X</button>
                </li>
            )
        })


        // Note on line 79: data is passed to the MerchSectionCheckout component through a link and then data is attached to the location prop */
        return(
            <div>
                <div id="merch-block" className="page">
                    <div id="merch-top">
                        <h2>Merchandise</h2>
                        <div id="merch-checkout-container">
                            <div id="merch-checkout">
                            <div id="diamond-container">
                                <img alt="img_diamond" src="images/diamond.png"/>
                                <h3>Shopping Cart</h3>
                            </div>
                                <div className="check-info-container" id="items-container">
                                    <p>Items: </p>
                                    <ul id="selected-items">
                                        { selectedItems }
                                    </ul>
                                </div>
                                <div className="check-info-container" id="tax-container">
                                    <p>Tax: </p>
                                <p>({ (this.state.total * 0.13).toFixed(2) })</p>
                                </div>
                                <div className="check-info-container" id="total-container">
                                    <p>Total: </p>
                                    <p>{ (this.state.total * 1.13).toFixed(2) }</p>
                                </div>
                                <Link id="total-checkout" to={{pathname:"/merch/checkout", data: { itemsInCart, total: total }}}><button >Checkout</button></Link>
                            </div>
                        </div>
                    </div>
                    <ul id="merch-items">
                        <MerchItem index={ 0 } name="Lucky13 T-shirt" price={ 25.00 } image="/images/shirt1.png" sizes={["S", "M", "L"]} addFunc={ this.addToCheckout }/>
                        <MerchItem index={ 1 } name="Sailors T-shirt" price={ 25.00 } image="/images/shirt2.png" sizes={["S", "M", "L"]} addFunc={ this.addToCheckout }/>
                        <MerchItem index={ 2 } name="13 Ring" price={ 15.00 } image="/images/ring.jpg" addFunc={ this.addToCheckout }/>
                        <MerchItem index={ 3 } name="1-hour Giftcard" price={ 100.00 } image="/images/giftcard.webp" addFunc={ this.addToCheckout }/>
                        <MerchItem index={ 4 } name="3-hour Giftcard" price={ 270.00 } image="/images/giftcard.webp" addFunc={ this.addToCheckout }/>
                    </ul>
                </div>
            </div>
        )
    }
}