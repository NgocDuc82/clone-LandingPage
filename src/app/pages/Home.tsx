
import React from 'react'
import 'app/styles/index.scss'
import Header from 'app/components/modules/header/Header';
import Banner from 'app/components/modules/banner/Banner';
import Reputation from 'app/components/modules/reputation/Reputation';
import About from 'app/components/modules/about/About';
import Services from 'app/components/modules/services/Services';
import Footer from 'app/components/modules/footer/Footer';
import Ads from 'app/components/modules/ads/Ads';
import Stats from 'app/components/modules/stats/Stats';
import Projects from 'app/components/modules/projects/Projects';
import Contact from 'app/components/modules/contact/Contact';

import 'app/styles/responsive.scss'
const Home:React.FC = ():React.ReactElement =>  {
  return (
    <>
      <Header />
      <Banner />
      <Reputation />
      <About />
      <Services />
      <Stats />
      <Ads />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
export default Home
