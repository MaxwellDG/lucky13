import React from 'react'

export const SideBackDrop = props => {

    return(
        <div id="side-backdrop" onClick={ () => props.hamburger(false) }></div>
    )
}