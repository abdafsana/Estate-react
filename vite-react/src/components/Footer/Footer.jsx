import { Container } from "@mui/material";
import "../Footer/Footer.css";
import "@fontsource/roboto/400.css";

function Footer() {
  return (
    <div className="footer-div">
      <Container maxWidth="lg" className="footer-container">
        <ul>
          Homefast
          <li>About Us</li>
          <li>Our Awards</li>
          <li>Corporate Materials</li>
          <li>Advertisement</li>
          <li>Human Resources</li>
          <li>Sitemap</li>
        </ul>
        <ul>
          Our Services
          <li>Our Special Services</li>
          <li>Membership</li>
          <li>Corporate Membership</li>
          <li>Projects</li>
          <li>Advertise For Free</li>
          <li>Search On Map</li>
        </ul>
        <ul>
          Other
          <li>Posting Rules</li>
          <li>Terms of Use</li>
          <li>Membership Agreement and Privacy Policy</li>
          <li>Operation Guide</li>
          <li>Cookie Policy</li>
          <li>About Protection of Personal Data</li>
          <li>Explicit Consent Text</li>
          <li>Contact</li>
        </ul>
      </Container>
    </div>
  );
}

export default Footer;
