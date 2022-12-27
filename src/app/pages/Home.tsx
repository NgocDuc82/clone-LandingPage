
import React from 'react'
import 'app/styles/index.scss'
import Header from 'app/components/modules/header/Header';
import Banner from 'app/components/modules/banner/Banner';
import Reputation from 'app/components/modules/reputation/Reputation';
import About from 'app/components/modules/about/About';
import Services from 'app/components/modules/services/Services';
import Stats from '../components/modules/stats/Stats';
import Footer from '../components/modules/footer/Footer';

export default function home():React.ReactElement {
  return (
    <div>
      <Header />
      <Banner />
      <Reputation />
      <About />
      <Services />
      {/* <Stats /> */}
      <Footer />
    </div>
  )
}
