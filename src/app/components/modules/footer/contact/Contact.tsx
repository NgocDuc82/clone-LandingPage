import React from "react";

import Input from "app/components/elements/InputSub";

import twitter from "public/images/twitter.svg";
import facebook from "public/images/facebook.svg";
import insta from "public/images/In.svg";
import Socail from '../../../elements/Socail';
export type SnsStype = {
  name: string;
};

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
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
