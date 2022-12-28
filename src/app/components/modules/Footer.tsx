import React from "react";
import "app/styles/modules/Footer.scss";
import Logo from "../elements/Logo";

import Input from "app/components/elements/InputSub";

import twitter from "public/images/twitter.svg";
import facebook from "public/images/facebook.svg";
import insta from "public/images/In.svg";
import Socail from "app/components/elements/Socail";

export type SnsStype = {
  name: string;
};

const Footer: React.FC = (): React.ReactElement => {
  const Contact: React.FC = (): React.ReactElement => {
    const mockSns: SnsStype[] = [
      { name: twitter },
      { name: insta },
      { name: facebook },
    ];
    return (
      <div className="footer-contact">
        <div className="title">
          <p>NEWSLETTER:</p>
        </div>
        <div className="mail">
          <Input />
        </div>
        <div className="socail">
          <p className="socail-title">SOCAIL:</p>
          <ul className="socail-list">
            {mockSns?.map((sns) => {
              return (
                <li className="socail-item">
                  <Socail {...sns} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
  const CopyRight: React.FC = (): React.ReactElement => {
    return (
      <div className="CopyRight">
        <p className="content">TheBox Company © 2022. All Rights Reserved</p>
      </div>
    );
  };
  const Info: React.FC = (): React.ReactElement => {
    return (
      <div className="info">
        <div className=" info-item address">
          <p>ADDRESS:</p>
          <span>6391 Elgin St. Celina, Delaware 10299</span>
        </div>
        <div className=" info-item phone">
          <p>PHONE:</p> <span>+84 1102 2703</span>
        </div>
        <div className=" info-item mail">
          <p>EMAIL:</p> <span>hello@thebox.com</span>
        </div>
        <Logo />
      </div>
    );
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <Info />
        <Contact />
      </div>
      <div className="footer-bottom">
        <CopyRight />
      </div>
    </div>
  );
};
export default Footer;
