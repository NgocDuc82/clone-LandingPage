
import React from 'react'
import 'app/styles/index.scss'
import Header from 'app/components/modules/Header';
import Banner from 'app/components/modules/Banner';
import Reputation from 'app/components/modules/Reputation';
import About from 'app/components/modules/About';
import Services from 'app/components/modules/Services';
import Footer from 'app/components/modules/Footer';
import Ads from 'app/components/modules/Ads';
import Stats from 'app/components/modules/Stats';
import Projects from 'app/components/modules/Projects';
import Contact from 'app/components/modules/Contact';

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
