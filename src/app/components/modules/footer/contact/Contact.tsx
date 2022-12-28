import React from "react";

import "app/components/modules/footer/contact/Contact.scss";
import Input from 'app/components/elements/footer/InputSub';
import Facebook from 'app/components/elements/common/socail/Facebook';
import Insta from 'app/components/elements/common/socail/Insta';
import Twitter from 'app/components/elements/common/socail/Twitter';

const Contact:React.FC = (): React.ReactElement => {
  return (
    <div className="contact">
      <div className="title">
        <p>NEWSLETTER:</p>
      </div>
      <div className="mail">
      <Input />
      </div>
      <div className="socail">
        <p className="socail-title">
          SOCAIL:
        </p>
        <ul className="socail-list">
          <li className="socail-item">
            <Facebook />
          </li>
          <li className="socail-item">
            <Insta />
          </li>
          <li className="socail-item">
            <Twitter />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact