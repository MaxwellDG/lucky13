import React from 'react'
import * as AboutText from '../data/artistText'
import { HomeBlock } from '../components/homeBlock'

export const AboutSection = () => {

        return(
            <div className="whole-container">
                <div id="about-block">
                    <div id="about-top-block">
                        <h2>About Lucky13 Tattoo</h2>
                        <div>
                            <p>{ AboutText.aboutText }</p>
                        </div>
                    </div>
                    <div id="about-bot-block">
                        <HomeBlock type="block9" linkBlock="Maxine" linkLocation="maxine"></HomeBlock>
                        <HomeBlock type="block10" linkBlock="Jessy" linkLocation="jessy"></HomeBlock>
                        <HomeBlock type="block11" linkBlock="Jesse" linkLocation="jesse"></HomeBlock>
                    </div>
                </div>
            </div>
        )
    }