import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="contact contact-block">
      <Container fluid style={{ marginTop:"220px"}}>
        <div className="title-holder">
          <h2>CONTACT US</h2>
          <p className="subtitle">get connected with us</p>
        </div>

        <Form className="contact-form">
          <Row >
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter Full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>

            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your Contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your message"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map" style={{marginTop:"15px"}}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57131.355000238334!2d83.73907942135632!3d26.497290735406843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993c53facb8f3b3%3A0x581e63d88cf3ed7f!2sDeoria%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1725278766179!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Container fluid> 
        <div className="contact-info">
            <ul>
                <li>
                    <i className="fas fa-envelope"></i>
                    hello@Deoria.com
                </li>
                <li>
                    <i className="fas fa-phone"></i>
                    000-000-000
                </li>
                <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Deoria, Uttar Pradesh ,274182
                </li>
            </ul>
        </div>
         </Container>
    </section>
  );
}
