import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useFormik } from 'formik';
// import axios from 'axios'

export const StripeCheckout = (totalPrice) => {

    const stripe = useStripe();
    const elements = useElements();

    const CARD_OPTIONS = {
        iconStyle: 'solid',
        style: {
          base: {
            iconColor: '#44c128',
            margin: "25px",
            color: "black",
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            background: "white",
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {color: '#fce883'},
            '::placeholder': {color: '#000'},
          },
          invalid: {
            iconColor: '#ffc7ee',
            color: 'red',
          }
        }
      };


    const formik = useFormik({

        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            email: "",
            city: "",
            province: "ON",
            zip: ""
        },

        onSubmit: async values => {

          if (!stripe || !elements) {
            return;
          }
          /*
                               const { data: client_secret } = await axios.post("https://api.homebase.design/lucky13/pay", {
                                  amount: parseFloat(totalPrice).toFixed(2) * 100,
                                  email: values.email
                              })

                              const { error, paymentMethod } = await stripe.createPaymentMethod({
                                type: 'card',
                                card: elements.getElement(CardElement),
                                billing_details: {
                                    address: {
                                      city: values.city,
                                      country: "CA",
                                      line1: values.address,
                                      line2: null,
                                      postal_code: values.zip,
                                      state: null
                                    },
                                      email: values.email,
                                      name: values.firstName.concat(" ".concat(values.lastName)),
                                      phone: "+15555555555"
                                  }
                                })

                                

                              console.log(paymentMethod)

                                
                                if (error) {
                                    console.log('[error]', error) 
                                } else {
                                    console.log('[PaymentMethod]', paymentMethod)
                                }

                                const confirmedCardPayment = await stripe.confirmCardPayment(client_secret, {
                                    payment_method: paymentMethod.id
                                })
            */

          alert("Sorry, but we are not accepting purchases at this time. Nothing has been charged to your credit card.")



        }
      });


    return (
      <div id="stripe-container">
        <img alt="img_stripe_logo" src="/images/stripeLogo.png"></img>
        <form id="stripe-form" onSubmit={ formik.handleSubmit }>
          <span style={{ borderTopLeftRadius: "5px" }}>
            <input style={{borderRight: "1px solid grey"}} id="firstName" name="firstName" type="text" placeholder="First Name " onChange={formik.handleChange} value={formik.values.firstName}/>
            <input id="lastName" name="lastName" type="text" placeholder="Last Name " onChange={formik.handleChange} value={formik.values.lastName}/>
          </span>
          <span>
            <input id="email" name="email" type="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email}/>
          </span>
          <span>
            <input id="address" name="address" type="text" placeholder="Home address" onChange={formik.handleChange} value={formik.values.address}/>
          </span>
          <span>
            <input style={{borderRight: "1px solid grey"}} id="city" name="city" type="text" placeholder="City" onChange={formik.handleChange} value={formik.values.city}/>
            <input style={{borderRight: "1px solid grey"}} id="province" name="province" type="text" placeholder="ON" value={formik.values.province} readOnly={ true } />
            <input id="zip" name="zip" type="text" placeholder="Postal Code" onChange={formik.handleChange} value={formik.values.zip}/>
          </span>
            <CardElement options={ CARD_OPTIONS }/>
            <button type="submit" disabled={ !stripe }>Pay Now</button>
        </form>
      </div>
    )
  }

