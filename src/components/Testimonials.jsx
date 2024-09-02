import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const TestimonialsData = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "description": "This service has exceeded my expectations in every way. The team is professional, responsive, and truly understands the needs of their clients. I highly recommend them!",
    "designation": "Marketing Director at XYZ Corp"
  },
  {
    "id": 2,
    "name": "Michael Williams",
    "description": "Working with this company has been a game-changer for our business. Their innovative approach and attention to detail have significantly improved our workflow and efficiency.",
    "designation": "CEO of ABC Solutions"
  },
  {
    "id": 3,
    "name": "Samantha Lee",
    "description": "The quality of work delivered is outstanding, and their customer service is top-notch. They are always ready to go the extra mile to ensure client satisfaction.",
    "designation": "Product Manager at Tech Innovations"
  }
  
]


export default function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client Testimonials</h2>
          <div className="subtitle">What client says about us</div>
        </div>
        <div>
          <Carousel controls= {false}>
            {
              TestimonialsData.map((testimonial, idx) =>(
                <Carousel.Item key={idx}>
             
                <blockquote>
                  <p>{testimonial.description}</p>
                  <cite>
                    <span className="name">{testimonial.name}</span>
                    <span className="designation">{testimonial.designation}</span>
                  </cite>
                </blockquote>
              </Carousel.Item>
              ))
            }

          </Carousel>
        </div>
      </Container>
    </section>
  );
}
