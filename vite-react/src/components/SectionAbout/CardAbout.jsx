import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import propTypes from "prop-types";
import "../SectionAbout/CardAbout.css";

function CardAbout({ data }) {
  return (
    <div className="cardBox">
      <Box className="box-container--l">
        <div>
          <p className="box-container--title">{data.title}</p>
          <p className="box-container--subtitle">{data.subtitle}</p>
          <p className="box-container--subtitle">{data.about}</p>
        </div>
        <div>
          <Button variant="outlined" color="error">
            View Project
          </Button>
        </div>
      </Box>
      <Box className="box-container--r">
        <img src={data.img} alt="location" />
      </Box>
    </div>
  );
}

CardAbout.propTypes = {
  data: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    about: propTypes.string,
    img: propTypes.string,
  }).isRequired,
};

export default CardAbout;
