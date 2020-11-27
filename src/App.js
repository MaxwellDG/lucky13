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

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const stripePromise = loadStripe("pk_test_51Hlg9aEvWRCo4xK0s9rOhLqxKSI0MxNEHSeGMVBoNVBo53Ls7kEUDHpjC5xmt8Gq79ciiMpGwuyVLagviBkAQCDj00FGPiY7dX")

export const App = () => {

  const [mobileDrawerState, setMobileDrawerState] = useState(false)

  function toggleMobileDrawer() {
    setMobileDrawerState(!mobileDrawerState)
  }

  let sideBackdrop

  if(mobileDrawerState){
    sideBackdrop = <SideBackDrop hamburger={ toggleMobileDrawer }/>
  }

    return (
      <Elements stripe={ stripePromise }>
        <NavBar hamburger={ toggleMobileDrawer }/>
          <SideDrawer showDrawer={ mobileDrawerState } toggleDrawer={ toggleMobileDrawer }/>
          { sideBackdrop }
            <Switch>
              <Route exact path="/" component={ () => <HomeSection /> } />
              <Route path="/about" component={ () => <AboutSection /> } />
              <Route path="/maxine" component={ () => <ArtistSection name="Maxine" text={ ArtistText.maxineText } images={ ArtistImages.maxineImages } 
                              linkLocation="https://www.instagram.com/maxinemahood/" blurb={ ArtistText.maxineBlurb } /> } />
              <Route path="/jessy" component={ () => <ArtistSection name="Jessy" text={ ArtistText.jessyText } images={ ArtistImages.jessyImages } 
                              linkLocation="https://www.instagram.com/jessy.tatts.cats/" blurb={ ArtistText.jessyBlurb }/> } />
              <Route path="/jesse" component={ () => <ArtistSection name="Jesse" text={ ArtistText.jesseText } images={ ArtistImages.jesseImages } 
                              linkLocation="https://www.instagram.com/pizzasharktattoo/" blurb={ ArtistText.jesseBlurb } /> } />
              <Route path="/contact" component={ () => <ContactSection /> } />
              <Route exact path="/merch" component={ () => <MerchSection /> } />
              <Route path="/merch/checkout" component={ () => <MerchSectionCheckout /> } />  
            </Switch>
        <Footer />
      </Elements>
    )
  }