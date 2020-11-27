import React from 'react'
import { NavButton } from '../components/navButton'
import SideDrawerHam from '../components/sideDrawerHam'

export const NavBar = (props) => {

        return(
            <div id="nav-bar">
                <div id="nav-container">
                    <div id="nav-image-link">
                        <NavButton route="/" image="/images/13logo.png" />
                    </div>
                    <div>
                        <SideDrawerHam hamburger={ props.hamburger }/>
                    </div>
                    <div id="nav-text-links">
                        <NavButton route="/about" text="About Us" />
                        <NavButton route="/maxine" text="Maxine" />
                        <NavButton route="/jessy" text="Jessy" />
                        <NavButton route="/jesse" text="Jesse" />
                        <NavButton route="/contact" text="Contact" />
                        <NavButton route="/merch" text="Merch" />
                    </div>
                </div>
            </div>
        )
    }