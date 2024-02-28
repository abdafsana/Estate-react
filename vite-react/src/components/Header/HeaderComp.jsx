import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../Header/Header.css";
import "@fontsource/roboto/400.css";
import Logo from "../image/Logo.png";

function Header() {
  return (
    <header>
      <Container maxWidth="lg" className="containerStyle">
        <Box className="headerStyle1">
          <img src={Logo} alt="logo picture" />
        </Box>
        <Box className="paragraf">
          <p>For Sale</p>
          <p>For Rent</p>
          <p>Daily Rental</p>
          <p>Projects</p>
        </Box>
        <Box className="headerStyle2">
          <Button variant="contained" color="error">
            Contained
          </Button>
          <AccountCircleIcon></AccountCircleIcon>
        </Box>
      </Container>
    </header>
  );
}

export default Header;
