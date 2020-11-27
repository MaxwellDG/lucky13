import React, { useState } from 'react'

export const Carousel = props => {

    const[currentX, setNewX] = useState(0)

    function slide(direction){
        if(direction === "left"){
            console.log(`left with x at ${ currentX }`)
            currentX === 0 ? setNewX((-100) * (props.images.length - 1)) : setNewX(currentX + 100)
        } else {
            console.log(`right with x at ${ currentX }`)
            currentX === -100 * (props.images.length - 1) ? setNewX(0) : setNewX(currentX - 100)
   
    }
}


    /*
        OMG DO THIS LIKE A WHOLE FUCKIN WIDTH. ANd then make the images be constantly SLOWLY moving over the tattoo.
        Scanning from all different directions. And at the end of each scan, it skips forward one picture :D 
    */


    return(
        <div id="carousel-container">
            <button className="carousel-button" id="carousel-left" onClick={ () => slide("left") }>
                <img alt="image_chevron" src="/images/chevron_carousel.png"></img>
            </button>
            {
                props.images.map((value, index) => {
                    return(
                        <li key={ index } className="slide" style={{ transform: `translateX(${currentX}%)` }}>
                            <img src={ value } alt="artist_img"></img>
                        </li>
                    )
                })
            }
            <button className="carousel-button" id="carousel-right" onClick={ () => slide("right") }>
                <img alt="image_chevron" src="/images/chevron_carousel.png" style={{transform: `rotate(180deg)`}}></img>
            </button>
        </div>
    )
}