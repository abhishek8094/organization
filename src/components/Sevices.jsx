import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceData = [
  {
    id: 1,
    icon: "fa fa-code",
    title: "Web Development",
    description:
      "Creating responsive and high-performing websites with the latest technologies.",
  },
  {
    id: 2,
    icon: "fa fa-mobile-alt",
    title: "Mobile App Development",
    description:
      "Building user-friendly and efficient mobile applications for both Android and iOS.",
  },
  {
    id: 3,
    icon: "fa fa-cloud",
    title: "Cloud Services",
    description:
      "Offering scalable and secure cloud solutions tailored to your business needs.",
  },
  {
    id: 4,
    icon: "fa fa-lock",
    title: "Cybersecurity",
    description:
      "Providing advanced cybersecurity solutions to protect your digital assets.",
  },
  {
    id: 5,
    icon: "fa fa-chart-line",
    title: "Digital Marketing",
    description:
      "Boosting your online presence with targeted marketing strategies and SEO optimization.",
  },
  {
    id: 6,
    icon: "fa fa-lightbulb",
    title: "Consulting Services",
    description:
      "Providing expert advice and strategies to help your business thrive in a competitive market.",
  },
];

export default function AppService() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {ServiceData.map((item, idx) => (
            <Col sm={4} key = {idx} className="holder">
              <div>
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
