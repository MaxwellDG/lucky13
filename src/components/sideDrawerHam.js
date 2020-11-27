import React from 'react'

const sideDrawerHam = (props) => {

    return(
        <button id="icon-ham" onClick={ () => props.hamburger() }>
            <div className="icon-ham-line"></div>
            <div className="icon-ham-line"></div>
            <div className="icon-ham-line"></div>
        </button>
    )
}

export default sideDrawerHam