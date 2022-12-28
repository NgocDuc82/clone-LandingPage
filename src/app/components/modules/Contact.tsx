import React from "react";
import ContactForm from 'app/components/elements/ContactForm';

import 'app/styles/modules/Contact.scss'

const Contact: React.FC = (): React.ReactElement => {
  return (
    <div className="contact">
      <div className="contact-title">What can us do for you?</div>
      <div className="contact-decs">
        We are ready to work on a project of any complexity, whether it’s
        commercial or residential.
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
