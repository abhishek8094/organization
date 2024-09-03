import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

export default function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  });

  const goTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container fluid>
      &copy; 2024 Organization. All right Reserved.
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkdin.com">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
    </Container>
  );
}
