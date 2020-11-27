import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '../components/carousel'


export const ArtistSection = (props) => {

    return(
        <div className="whole-container">
            <div id="artist-div">
                <div id="artist-top-block">
                    <div id="artist-top-block-left">
                        <h2>{ props.name }</h2>
                        <p>{ props.text }</p>
                    </div>
                    <div id="artist-top-block-right">       
                        <ul className="artist-links" id="artist-links-top">
                            <li key={ 0 }>
                                <a href={ props.linkLocation } target="_blank" rel="noopener noreferrer"><button>Follow { props.name } on Instagram</button></a>
                            </li>
                            <li key={ 1 }>
                                <Link to="/contact"><button>Book with { props.name }</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                    <Carousel images={ props.images } />
                <div className="artist-links" id="artist-links-bottom">
                    <a href={ props.linkLocation } target="_blank" rel="noopener noreferrer"><button>Follow { props.name } on Instagram</button></a>
                    <Link to="/contact"><button>Book with { props.name }</button></Link>
                </div>
            </div>
        </div>
    )
}