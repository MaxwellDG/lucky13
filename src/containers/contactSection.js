import React, { useState } from 'react'
import { GoogleMaps } from '../components/googlemaps'
import { useFormik } from 'formik'
import axios from 'axios'

const initialValues = {
        name: "",
        email: "",
        emailConfirm: "",
        contactee: "general",
        message: ""
    }

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,9}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    } else if (!(values.email === values.emailConfirm)){
        errors.emailConfirm = "Emails do not match"
    } else if (!values.message){
        errors.message = "A message is required."
    }
    return errors
}



export const ContactSection = () => {

    const[submitted, setSubmitted] = useState(false)

    const formik = useFormik({
        validate,
        initialValues,
        onSubmit: async (values) => {
            let response = await axios.post("https://api.homebase.design/lucky13/email", {
                name: values.name,
                email: values.email,
                contactee: values.contactee,
                message: values.message
            })

            if(response.status === 200){ 
                formik.resetForm({
                    name: "",
                    email: "",
                    emailConfirm: "",
                    contactee: "general",
                    message: ""
                    })
                    setSubmitted(true)
                    setTimeout(() => {
                        setSubmitted(false);
                    }, 5000);
                }
            }
    })
    

        return(
            <div className="whole-container">
                <div id="contact-block">
                    <div id="contact-block-upper">
                        <h2>Get in Touch!</h2>
                    </div>
                    <div id="contact-block-lower">
                        <form onSubmit={ formik.handleSubmit }>
                            <p>* Please fill out all the fields below.</p>
                            <div className="formik-errors-container">
                                <label>Name:</label>
                                { formik.errors.name && formik.touched.name ? <p className="formik-errors">{ formik.errors.name }</p> : null }
                            </div>
                                <input 
                                    className="input-field" 
                                    id="input-name" 
                                    type="text" 
                                    name="name"
                                    value={ formik.values.name } 
                                    onChange={ formik.handleChange } 
                                    onBlur={ formik.handleBlur }
                                />
                            <div className="formik-errors-container">
                                <label>Email:</label>
                                { formik.errors.email && formik.touched.email ? <p className="formik-errors">{ formik.errors.email }</p> : null }
                            </div>
                                <input 
                                    className="input-field" 
                                    id="input-email" 
                                    type="email" 
                                    name="email" 
                                    value={ formik.values.email } 
                                    onChange={ formik.handleChange } 
                                    onBlur={ formik.handleBlur }
                                />
                            <div className="formik-errors-container">
                                <label>Confirm email:</label>
                                { formik.errors.emailConfirm && formik.touched.emailConfirm ? <p className="formik-errors">{ formik.errors.emailConfirm }</p> : null }
                            </div>
                                <input 
                                    className="input-field" 
                                    id="input-email-confirm" 
                                    type="emailConfirm" 
                                    name="emailConfirm" 
                                    value={ formik.values.emailConfirm } 
                                    onChange={ formik.handleChange } 
                                    onBlur={ formik.handleBlur }
                                />
                            <label id="label-select">Who would you like to contact? 
                                <select name="contactee" value={ formik.values.contactee } onChange={ formik.handleChange } >
                                    <option value="General">General</option>
                                    <option value="Maxine">Maxine</option>
                                    <option value="Jessy">Jesse</option>
                                    <option value="Jesse">Jessy</option>
                                </select>
                            </label>
                            <div className="formik-errors-container">
                                <label>Message:</label>
                                { formik.errors.message && formik.touched.message ? <p className="formik-errors">{ formik.errors.message }</p> : null }
                            </div>
                                <textarea 
                                    id="input-textarea" 
                                    value={ formik.values.message } 
                                    name="message" 
                                    onChange={formik.handleChange} 
                                    onBlur={ formik.handleBlur }>
                                </textarea>
                            <input id="form-submit" className="artist-links" type="submit" value={ submitted ? "Sent! Chat soon." : "Submit" }/>
                        </form>
                        <img alt="image_storefront" src="images/storefrontwborder.png"></img>
                    </div>
                    <div id="google-maps">
                        <GoogleMaps />
                    </div>
                </div>
            </div>
        )
    }