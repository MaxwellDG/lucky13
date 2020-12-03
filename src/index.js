import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import ScrollToTop from './utility/scrollToTop';

const stripePromise = loadStripe("pk_test_51Hlg9aEvWRCo4xK0s9rOhLqxKSI0MxNEHSeGMVBoNVBo53Ls7kEUDHpjC5xmt8Gq79ciiMpGwuyVLagviBkAQCDj00FGPiY7dX")

ReactDOM.render(
  <BrowserRouter>
    <Elements stripe={ stripePromise }>
    <ScrollToTop/>
      <App />
    </Elements>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
