import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/Logo1.png";
import navIcon1 from "../Assets/nav-icon1.svg";
import navIcon2 from "../Assets/nav-icon2.svg";
import navIcon3 from "../Assets/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" /><span className="logobrand">Alam's World</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://linkedin.com/in/arafat-alam-20b37a204"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100077273702071&sfnsn=wiwspwa&mibextid=2JQ9oc"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/iamarafatalam_7?utm_source=qr&igsh=MTEyYnR4MTRlYm8yMQ=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}