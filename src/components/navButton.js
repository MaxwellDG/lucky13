import React from 'react'
import { Link } from 'react-router-dom'


export const NavButton = (props) => {
    
        return(
            <li>
                <Link className="header-text" to={ props.route }>{ props.text ? props.text : <img id="logo" alt="img_lucky13" src={ props.image } /> }</Link>
            </li>
        )
    }