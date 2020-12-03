import React from 'react'
import { HomeBlock } from '../components/homeBlock'
import * as HomeBlockText from '../data/homeBlockText'


export const HomeSection = () =>{

        return(
            <div className="whole-container">
                    <div id="home-block">
                        <div id="home-top-block">
                            <HomeBlock type="block1" title="LUCKY 13 TATTOOS TORONTO" text={ HomeBlockText.textBlock1 } linkLocation="" linkBlock=""></HomeBlock>
                            <div id="top-bottom">
                                <img alt="img_doodle" src="/images/doodle-heart.png"></img>
                                <HomeBlock type="block2" title="ABOUT US" text={ HomeBlockText.textBlock2 } linkBlock="READ MORE" linkLocation="about"></HomeBlock>
                            </div>
                        </div>
                        <div id="home-mid-block">
                            <div id="mid-2">
                                <HomeBlock title="" text="" type="block4" linkBlock="Maxine" linkLocation="maxine"></HomeBlock>
                                <HomeBlock title="" text="" type="block5" linkBlock="Jessy" linkLocation="jessy"></HomeBlock>
                                <HomeBlock title="" text="" type="block6" linkBlock="Jesse" linkLocation="jesse"></HomeBlock>
                            </div>
                            <div id="mid-1">                       
                                <HomeBlock type="block3" title="SHOP HOURS" text={ HomeBlockText.textBlock3 } linkLocation="" linkBlock=""></HomeBlock>
                                <div>
                                    <div>
                                        <img alt="img_doodle" src="/images/sugar-skull-girl.png" ></img>
                                        <div className="spacing"></div>
                                    </div>
                                    <div>
                                        <div className="spacing"></div>
                                        <img alt="img_doodle" src="/images/sugar-skull.png" ></img>
                                    </div>
                                </div>
                            </div> 

                        </div>
                        <div id="home-bot-block">
                            <a className="block" id="block7" href="https://www.instagram.com/lucky13toronto" target="_blank" rel="noopener noreferrer">
                                <h2 className="whiteText" id="home-block-title">FOLLOW US ON INSTAGRAM</h2>
                            </a>
                            <a className="block" id="block8" href="https://www.facebook.com/lucky13toronto/" target="_blank" rel="noopener noreferrer">
                                <h2 className="whiteText" id="home-block-title">LIKE US ON FACEBOOK</h2>
                            </a>
                        </div>
                    </div>
            </div>
        )
    }    