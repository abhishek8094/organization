import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Aboutus from "../assets/images/Aboutus.webp";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function AppAbout() {
  const html = 80;
  const responsive = 95;
  const node = 70;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2 >About us</h2>
          <p className="subtitle">learn more  about to me </p>
        </div>
        <Row>
          <Col sm={6}>
            <img src={Aboutus} alt="aboutus-img" />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, reprehenderit? Temporibus possimus optio accusamus
              laborum, necessitatibus voluptatem amet ad natus commodi, aperiam
              magnam perspiciatis voluptatum corporis fuga, veritatis libero
              molestiae? Aliquid, consectetur quas in commodi labore tenetur
              voluptatibus laudantium alias enim molestias aliquam quaerat,
              corrupti libero eligendi illum, nam perspiciatis accusamus! Nemo
              rerum reiciendis alias veritatis modi cupiditate consequuntur
              deserunt! Nostrum veniam officiis nesciunt odit, soluta ducimus
              eveniet hic rem praesentium sapiente necessitatibus quia adipisci
              ad quo nam, ea autem excepturi debitis voluptatum. Repellendus
              fugit consectetur ad ducimus, dolore eaque?
            </p>

            <p>
              Dicta sequi labore temporibus repellendus fugit pariatur!
              Aspernatur ex quae cum illo quia fugit nemo, iste exercitationem
              natus ab nisi quibusdam? Fuga facere reiciendis necessitatibus
              incidunt delectus voluptate repellendus omnis. Quisquam at magnam
              enim pariatur iste corrupti dolorum odit dolorem nam accusamus
              dolore excepturi illo laudantium perferendis esse nisi rem
              deleniti ut voluptatibus, facere, beatae hic exercitationem
              reprehenderit! Eaque, voluptatum.
            </p>
            <div className="progress-block">
              <h4>HTML5/CSS3/JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>

            <div className="progress-block">
              <h4>Responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>

            <div className="progress-block">
              <h4>NodeJs</h4>
              <ProgressBar now={node} label={`${node}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
