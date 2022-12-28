import React from "react";

import { Form, Input, Row, Col, Button } from "antd";

const { TextArea } = Input;

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
        <Col span={13} push={6} >
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
export default ContactForm;
