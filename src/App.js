import './styles/App.scss'
import './styles/Merch.scss'
import './styles/Drawer.scss'
import './styles/Carousel.scss'

import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeSection } from './containers/homeSection'
import { AboutSection } from './containers/aboutSection'
import { ContactSection } from './containers/contactSection'
import MerchSection from './containers/merchSection'
import { MerchSectionCheckout } from './containers/merchSectionCheckout'
import { ArtistSection } from './containers/artistSection'
import * as ArtistText from './data/artistText'
import * as ArtistImages from './data/artistImages'
import { SideDrawer } from './components/sideDrawer'
import { SideBackDrop } from './components/sideBackdrop'
import { NavBar } from './containers/navBar'
import { Footer } from './components/footer'


export const App = () => {

  const [mobileDrawerState, setMobileDrawerState] = useState(false)

  function toggleMobileDrawer() {
    setMobileDrawerState(!mobileDrawerState)
  }

  let sideBackdrop

  if(mobileDrawerState){
    sideBackdrop = <SideBackDrop hamburger={ toggleMobileDrawer }/>
  }

  const defaultContainer = () => (
    <React.Fragment>
      <NavBar hamburger={ toggleMobileDrawer }/>
      <SideDrawer showDrawer={ mobileDrawerState } toggleDrawer={ toggleMobileDrawer }/>
      { sideBackdrop }
        <Route exact path="/" render={ HomeSection } />
        <Route path="/about" render={ AboutSection } />
        <Route path="/maxine" render={ () => <ArtistSection name="Maxine" text={ ArtistText.maxineText } images={ ArtistImages.maxineImages } 
                        linkLocation="https://www.instagram.com/maxinemahood/" blurb={ ArtistText.maxineBlurb } /> } />
        <Route path="/jessy" render={ () => <ArtistSection name="Jessy" text={ ArtistText.jessyText } images={ ArtistImages.jessyImages } 
                        linkLocation="https://www.instagram.com/jessy.tatts.cats/" blurb={ ArtistText.jessyBlurb }/> } />
        <Route path="/jesse" render={ () => <ArtistSection name="Jesse" text={ ArtistText.jesseText } images={ ArtistImages.jesseImages } 
                        linkLocation="https://www.instagram.com/pizzasharktattoo/" blurb={ ArtistText.jesseBlurb } /> } />
        <Route path="/contact" render={ () => <ContactSection /> } />
        <Route exact path="/merch" render={ () => <MerchSection /> } />
      <Footer />
    </React.Fragment>
  )

  const checkoutContainer = () => (
    <Route path="/merch/checkout" render={ () => <MerchSectionCheckout /> } />  
  )
  

    return (
          <Switch>
            <Route exact path="/merch/checkout" render={ checkoutContainer }/>
            <Route render={ defaultContainer }/>
          </Switch>
    )
  }