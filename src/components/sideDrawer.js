import React from 'react'
import { Link } from 'react-router-dom'

export const SideDrawer = props => {

    let drawerClass = "side-drawer"

    if(props.showDrawer === true){
        drawerClass = "side-drawer open"
    }

    return(
        <nav className={ drawerClass }>
            <ul>
                <li><Link to="/about" onClick={ props.toggleDrawer }>About</Link></li>
                <li><Link to="/maxine" onClick={ props.toggleDrawer }>Maxine</Link></li>
                <li><Link to="/jessy" onClick={ props.toggleDrawer }>Jessy</Link></li>
                <li><Link to="/jesse" onClick={ props.toggleDrawer }>Jesse</Link></li>
                <li><Link to="/contact" onClick={ props.toggleDrawer }>Contact</Link></li>
                <li><Link to="/merch" onClick={ props.toggleDrawer }>Merch</Link></li>
            </ul>
        </nav>
    )
}
