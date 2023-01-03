import React from "react";

import "app/styles/modules/contact.scss";

import { Form, Input, Row, Col, Button } from "antd";

const { TextArea } = Input;

const Contact: React.FC = (): React.ReactElement => {
  const ContactForm: React.FC = (): React.ReactElement => {
    return (
      <Form labelCol={{ span: 3 }}>
        <Row>
          <Col span={6} push={6}>
            <Form.Item>
              <Input placeholder="Your Name*" />
            </Form.Item>
          </Col>
          <Col span={6} push={7}>
            <Form.Item>
              <Input placeholder="Email*" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6} push={6}>
            <Form.Item>
              <Input placeholder="Reason for Contacting*" />
            </Form.Item>
          </Col>
          <Col span={6} push={7}>
            <Form.Item>
              <Input placeholder="Phone" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={13} push={6}>
            <Form.Item>
              <TextArea placeholder="Message" rows={4} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={13} push={6}>
            <Form.Item>
              <Button className="btn-submit" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  };
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
