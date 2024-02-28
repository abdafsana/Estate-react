import Box from "@mui/material/Box";
import "../Card/Card.css";
import propTypes from "prop-types";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

function Card({ data }) {
  return (
    <>
      <Box className="cardDetail">
        <div className="card-header">
          <img src={data.img} alt="home image" className="cardImg" />
        </div>
        <div className="card-body">
          <p className="card-body--price">{data.price}</p>
          <p className="card-body--context">{data.about}</p>
          <span className="card-body--subtitle">{data.location}</span>
          <span className="card-body--subtitle">{data.date}</span>
        </div>
        <div className="card-footer">
          <div className="card-ft1">
            <img src={data.iconImg1} alt="icon" />
            <p className="card-paragraf">{data.image1data}</p>
          </div>
          <div className="card-ft1">
            <img src={data.iconImg2} alt="icon" />
            <p className="card-paragraf">{data.image2data}</p>
          </div>
          <div className="card-ft1">
            <img src={data.iconImg3} alt="icon" />
            <p className="card-paragraf">{data.image3data}</p>
          </div>
        </div>
      </Box>
    </>
  );
}

Card.propTypes = {
  data: propTypes.shape({
    name: propTypes.string,
    img: propTypes.string,
    price: propTypes.string,
    location: propTypes.string,
    date: propTypes.string,
    about: propTypes.string,
    iconImg1: propTypes.string,
    iconImg2: propTypes.string,
    iconImg3: propTypes.string,
    image1data: propTypes.string,
    image2data: propTypes.string,
    image3data: propTypes.string,
  }).isRequired,
};
export default Card;
