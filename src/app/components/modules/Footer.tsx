import React from "react";
import "app/styles/modules/footer.scss";
import Logo from "app/components/elements/Logo";

import Input from "app/components/elements/Input";

import twitter from "public/images/twitter.svg";
import facebook from "public/images/facebook.svg";
import insta from "public/images/In.svg";
import Button from 'app/components/elements/Button';

const socialNetwork = [twitter, insta, facebook];

const Footer: React.FC = (): React.ReactElement => {
  return (
    <div className="footer">
      <div className="footer-top">
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
        <div className="footer-contact">
          <div className="title">
            <p>NEWSLETTER:</p>
          </div>
          <div className="mail">
            <Input item={{placeholder: 'Your email here'}}  />
            <Button item={{ title : 'Subscribe'}} />
          </div>
          <div className="socail">
            <p className="socail-title">SOCAIL:</p>
            <ul className="socail-list">
              {socialNetwork?.map((social) => {
                return (
                  <li className="socail-item">
                    <img alt="" src={social} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="CopyRight">
          <p className="content">TheBox Company © 2022. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
