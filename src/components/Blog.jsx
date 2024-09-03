import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import blog1 from "../assets/images/blog1.webp";
import blog2 from "../assets/images/blog2.webp";
import blog3 from "../assets/images/blog3.webp";


const BlogData = [
  {
    id: 1,
    image: blog1,
    time: "2024-09-01T10:00:00Z",
    title: "Understanding React Hooks",
    description:
      "Learn the basics of React Hooks and how they can simplify state management and side effects in your components.",
    link: "https://example.com/blog/react-hooks",
  },
  {
    id: 2,
    image: blog2,
    time: "2024-08-28T14:30:00Z",
    title: "Mastering Tailwind CSS",
    description:
      "Discover the power of utility-first CSS with Tailwind, and how it can help you build responsive designs quickly.",
    link: "https://example.com/blog/tailwind-css",
  },
  {
    id: 3,
    image: blog3,
    time: "2024-08-25T09:15:00Z",
    title: "Introduction to Redux Toolkit",
    description:
      "An in-depth guide to Redux Toolkit, the official, recommended way to write Redux logic in modern apps.",
    link: "https://example.com/blog/redux-toolkit",
  },
];

export default function AppBlog() {
  return (
    <section id="blog" className="blog blog-block">
      <Container fluid style={{position:"relative", top:"40px", bottom:"20px"}}>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <Row>
          {BlogData.map((blog) => (
                <Col sm={4} key={blog.id}>
            <div>
                <Card>
                  <Card.Img  src={blog.image} />
                  <Card.Body>
                    <time>{blog.time}</time>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.description}</Card.Text>
                    <a href={blog.link} className="btn btn-primary">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
