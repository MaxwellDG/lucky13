import React from 'react'
import { Link } from 'react-router-dom'

export const SideDrawer = props => {

    let drawerClass = "side-drawer"

    if(props.showDrawer === true){
        drawerClass = "side-drawer open"
    }

    return(
        <nav className={ drawerClass }>
            <img id="drawer-img" alt="image_log" src="/images/13logo.png"></img>
            <ul>
                <li>
                    <Link to="/about" onClick={ props.toggleDrawer }>About<img alt="image_drawer" src="/images/chevron_carousel.png" className="drawer-chevron"></img></Link>

                </li>
                <li>
                    <Link to="/maxine" onClick={ props.toggleDrawer }>Maxine<img alt="image_drawer" src="/images/chevron_carousel.png" className="drawer-chevron"></img></Link>
                </li>
                <li>
                    <Link to="/jessy" onClick={ props.toggleDrawer }>Jessy<img alt="image_drawer" src="/images/chevron_carousel.png" className="drawer-chevron"></img></Link>
                </li>
                <li>
                    <Link to="/jesse" onClick={ props.toggleDrawer }>Jesse<img alt="image_drawer" src="/images/chevron_carousel.png" className="drawer-chevron"></img></Link>
                </li>
                <li>
                    <Link to="/contact" onClick={ props.toggleDrawer }>Contact<img alt="image_drawer" src="/images/chevron_carousel.png" className="drawer-chevron"></img></Link>
                </li>
                <li>
                    <Link to="/merch" onClick={ props.toggleDrawer }>Merch<img alt="image_drawer" src="/images/chevron_carousel.png" className="drawer-chevron"></img></Link>
                </li>
            </ul>
        </nav>
    )
}
