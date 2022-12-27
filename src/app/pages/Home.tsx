
import React from 'react'
import 'app/styles/index.scss'
import Header from 'app/components/elements/header/Header';
import Banner from 'app/components/elements/banner/Banner';
import Reputation from 'app/components/elements/reputation/Reputation';
import About from 'app/components/elements/about/About';
import Services from 'app/components/elements/services/Services';

export default function home():React.ReactElement {
  return (
    <div>
      <Header />
      <Banner />
      <Reputation />
      <About />
      <Services />
    </div>
  )
}
