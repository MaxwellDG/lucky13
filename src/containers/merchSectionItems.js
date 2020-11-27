import React from 'react'
import { MerchItem } from '../components/merchItem'

export default class MerchSectionItems extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            itemsInCart: [],
            total: 0.00
        }
        this.addToCheckout = this.addToCheckout.bind(this)
    }

    addToCheckout(quantity, name, price, size){
        this.setState((prevState) => {
            return{
                itemsInCart: [...prevState.itemsInCart, {name, quantity, price, size}],
                total: prevState.total + (quantity * price)
            }
        })
    }

    removeFromCheckout(index){
        this.setState((prevState) => {
            /* this is close, just gotta get it at the correct index */
            return{
                itemsInCart: prevState.itemsInCart.splice(prevState.itemsInCart[index], 1),
                total: prevState.total
            }
        })
    }


    render(){

        let selectedItems = this.state.itemsInCart.map((value, index) => {
            return(
                <li key={ index }>
                    <p style={{color: "black"}}>{ value.name }</p>
                    <p>{ value.size }</p>
                    <p>x { value.quantity }</p>
                    <p>$ { value.price * value.quantity }</p>
                    <button id="merch-x" onClick={() => this.removeFromCheckout(index) }>X</button>
                </li>
            )
        })

        return(
            <div id="merch-block">
                <div id="merch-top">
                    <h2>Merchandise</h2>
                    <div id="merch-checkout-container">
                        <div id="merch-checkout">
                            <img alt="img_diamond" src="images/diamond.png"/>
                            <h3>Shopping Cart</h3>
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
                            <button id="total-checkout" onClick={ () => this.goToCheckout }>Checkout</button>
                        </div>
                    </div>
                </div>
                <ul id="merch-items">
                    <MerchItem index={ 0 } name="Lucky13 T-shirt" price={ 25.00 } image="images/lucky13logo.png" sizes={["S", "M", "L"]} addFunc={ this.addToCheckout }/>
                    <MerchItem index={ 1 } name="Rocksteady T-shirt" price={ 25.00 } image="images/lucky13logo.png" sizes={["S", "M", "L"]} addFunc={ this.addToCheckout }/>
                    <MerchItem index={ 2 } name="13 Bracelet" price={ 15.00 } image="images/lucky13favicon.png" addFunc={ this.addToCheckout }/>
                    <MerchItem index={ 3 } name="1-hour Giftcard" price={ 100.00 } image="images/lucky13favicon.png" addFunc={ this.addToCheckout }/>
                    <MerchItem index={ 4 } name="3-hour Giftcard" price={ 270.00 } image="images/lucky13favicon.png" addFunc={ this.addToCheckout }/>
                </ul>
            </div>
        )
    }
}