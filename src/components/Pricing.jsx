import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const PricingData = [
    {
        id: 1,
        plan: "Startup",
        price: "$9/month",
        features: [
          "Access to all startup features",
          "Up to 5 projects",
          "2 GB storage",
          "Community support",
        ],
        link: "https://example.com/startup-plan",
      },
  {
    id: 2,
    plan: "Enterprise",
    price: "Custom pricing",
    features: [
      "All Premium plan features",
      "Unlimited storage",
      "Dedicated account manager",
      "Custom onboarding and training",
    ],
    link: "https://example.com/enterprise-plan",
  },

  
  {
    id: 3,
    plan: "Professional",
    price: "$79/month",
    features: [
      "Access to all professional features",
      "Unlimited projects",
      "100 GB storage",
      "Priority support",
    ],
    link: "https://example.com/professional-plan",
  },
];

export default function AppPricing() {
  return (
    <section id="pricing" className="pricing block-pricing">
      <Container fluid>
        <div className="title-holder">
          <h2>Pricing &amp; plans</h2>
          <p className="subtitle">check our pricing and plans</p>
        </div>
        <Row>
          {PricingData.map((pricing) => (
            <Col sm={4} key={pricing.id}>
              <div className="heading">
                <h3>{pricing.plan}</h3>
                <span className="price">{pricing.price}</span>
              </div>
              <div className="content">
                <ListGroup>
                  {pricing.features.map((feature, idx) => (
                    <ListGroup.Item key={idx}>{feature}</ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div className="btn-holder">
                <a href={pricing.link} className="btn btn-primary">
                  Order Now
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
