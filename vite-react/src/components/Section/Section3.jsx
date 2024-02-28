import { Box, Container } from "@mui/material";
import "../Section/Section3.css";
import location from "../image/addres.png";
import Button from "@mui/material/Button";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

function Section3() {
  return (
    <section>
      <Container maxWidth="lg" className="container">
        <Box className="box-container--left">
          <div>
            <p className="box-container--title">
              Search Your Dream House On The Map
            </p>
            <p className="box-container--subtitle">
              Find the house you are looking for easily according to location
              information.
            </p>
          </div>
          <div>
            <Button variant="contained" color="error">
              Search On Map
            </Button>
          </div>
        </Box>
        <Box className="box-container--right">
          <img src={location} alt="location" />
        </Box>
      </Container>
    </section>
  );
}

export default Section3;
