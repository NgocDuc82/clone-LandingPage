
import React from 'react'
import '../styles/index.scss'
import Header from '../components/elements/header/Header';
import Banner from '../components/elements/banner/Banner';
import Reputation from '../components/elements/reputation/Reputation';
import About from '../components/elements/about/About';
import Services from '../components/elements/services/Services';

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
