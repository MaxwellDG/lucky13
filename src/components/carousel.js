import React, { useState } from 'react'

export const Carousel = props => {

    const[currentX, setNewX] = useState(0)
    const[slides, addMoreSlides] = useState(props.images)
    const[counterRight, changeCounterRight] = useState(0)


    function slide(direction){
        console.log(currentX)
        if(direction === "left"){
            if(!currentX <= 0){
                setNewX(currentX + 100)
            }
        } else {
            let slideToBeAdded = slides[counterRight === 7 ? 0 : counterRight]
            let newSlides = Object.assign([], slides)
            newSlides.push(slideToBeAdded)
            addMoreSlides(newSlides)
            changeCounterRight(counterRight + 1)
            setNewX(currentX - 100)
    }
}


    return(
        <div id="carousel-container">
            <button className="carousel-button" id="carousel-left" onClick={ () => slide("left") } style={{ display: currentX < 0 ? "inline" : "none" }}>
                <img alt="image_chevron" src="/images/chevron_carousel.png"></img>
            </button>
            {
                slides.map((value, index) => {
                    return(
                        <li key={ index } className="slide" style={{ transform: `translateX(${currentX}%)` }}>
                            <img src={ value } alt="artist_img"></img>
                        </li>
                    )
                })
            }
            <button className="carousel-button" id="carousel-right" onClick={ () => slide("right") } >
                <img alt="image_chevron" src="/images/chevron_carousel.png" style={{transform: `rotate(180deg)`}}></img>
            </button>
        </div>
    )
}