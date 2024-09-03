import Carousel from "react-bootstrap/Carousel";
import Img1 from "../assets/images/web-design.webp";
import Img2 from "../assets/images/financial-planning.webp";
import Img3 from "../assets/images/lifestyle-difference.webp"

var heroData = [
  {
    id: 1,
    image: Img1,
    title: "Craft Your Digital Presence",
    description:
      "Transform your online presence with stunning web designs that captivate your audience and drive results. Our creative solutions are tailored to meet your unique needs.",
    link: "https://www.example.com/design-services",
  },
  {
    id: 2,
    image: Img2,
    title: "Plan Your Financial Future Today",
    description:
      "Take control of your finances with our expert guidance. From investments to retirement planning, we provide the tools and advice you need to secure your future.",
    link: "https://www.example.com/financial-planning",
  },
  {
    id: 3,
    image: Img3,
    title: 'Experience a New Lifestyle',
    description: 'Discover a world of luxury and comfort with our curated collection of premium products and experiences designed to elevate your daily life.',
    link: 'https://www.example.com/lifestyle'
  }
];

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
    <Carousel >
        {heroData.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.id}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      
    </section>
  );
}
