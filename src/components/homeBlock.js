import React from 'react'
import { Link } from 'react-router-dom'


export const HomeBlock = (props) => {

    return(
        <Link to={ `/${ props.linkLocation }` } className="block" id={ props.type }>
            { props.title ? <h2 className="whiteText" id="home-block-title">{ props.title }</h2> : null }
            { props.text ? props.text : null }
            { props.linkBlock ? <p className="linkButton">{ props.linkBlock }</p> : null }
        </Link>
    )
}