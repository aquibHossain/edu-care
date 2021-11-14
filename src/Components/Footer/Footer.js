import React from 'react';
import "./Footer.css"
import { Button, Container, Form,Row,Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className="color">
            <Row md={4} className="row">
            <Col>
                <p>PSD TO HTML <br/>
TEMPLATES<br/>
DOCUMENTATION<br/>
GET A SUPPORT<br/>
AFFILIATE</p>
            </Col>
            <Col>
                <p>
                BLOG<br/>
TERMS OF USAGE<br/>
PRIVACY POLICY<br/>
PRICING & PLAN<br/>
BECOME A TRAINER<br/>
                </p>
            </Col>
            <Col>
                <p>
                <i class="fab fa-twitter"></i> TWITTER<br/>
                <i class="fab fa-facebook-square"></i> FACEBOOK<br/>
                <i class="fab fa-google-plus-g"></i> GOOGLE PLUS<br/>
                <i class="fab fa-pinterest-p"></i> PINTEREST<br/>
                <i class="fab fa-dribbble"></i> DRIBBBLE <br/>
                </p>
            </Col>
            <Col>
                <p>
                Your email is safe with us and we hate spam as much as you do.
                </p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
            </Col>
            </Row>
            </div>
    );
};

export default Footer;