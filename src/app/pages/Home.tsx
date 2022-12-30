import React from "react";
import "app/styles/index.scss";
import Header from "app/components/modules/Header";
import Reputation from "app/components/modules/Reputation";
import Services from "app/components/modules/Services";
import Footer from "app/components/modules/Footer";
import Stats from "app/components/modules/Stats";
import Projects from "app/components/modules/Projects";
import Contact from "app/components/modules/Contact";

import banner from "public/images/Hero.svg";

import aboutImg from "public/images/aboutImg.svg";

import "app/styles/modules/home.scss";
import "app/styles/responsive.scss";


import bgAds from "public/images/bg-ads.svg";
import { reputations } from "app/const/mock";
import { services, projects } from "app/const/mock";
import Button from "app/components/elements/Button";

const Home: React.FC = (): React.ReactElement => {

  const HandleHistory = () => {
    console.log('aaa');
    
  }

  return (
    <>
      <Header />
      <div className="banner">
        <img className="banner-img" alt="" src={banner} />
      </div>
      <Reputation reputations={reputations} />
      <div className="about">
        <img src={aboutImg} alt="" className="about-img" />
        <div className="about-desc">
          <div className="about-desc-title">About us</div>
          <div className="about-desc-content">
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way.
            <br />
            <br />
            We’ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </div>
          <Button onClick={HandleHistory}>
            Out Your History
          </Button>
        </div>
      </div>
      <Services services={services} />
      <Stats />
      <div className="ads">
        <img className="ads-img" alt="" src={bgAds} />
        <div className="ads-content">
          <div className="title">
            <h1>Free consultation with exceptional quality</h1>
            <span>Just one call away: +84 1102 2703</span>
          </div>
          <button className="btn">Get your consultation</button>
        </div>
      </div>
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
