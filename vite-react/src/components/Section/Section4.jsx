import { Container } from "@mui/material";
import buildngs from "../image/more-builds.png";
import CardAbout from "../SectionAbout/CardAbout";
import "../Section/Section4.css";
import "@fontsource/roboto/500.css";

function Section4() {
  const arr = [
    {
      id: 1,
      title: "Life Valley Project",
      subtitle:
        "The privileged location in Lambeth region in the west of London city. ",
      about:
        "The project is close to many hotels, hospitals and commercial centers...",
      img: buildngs,
    },
  ];
  return (
    <section className="section-box">
      <Container maxWidth="lg" className="container">
        <div className="container-header">
          <p>Featured Projects</p>
          <button>All</button>
        </div>
        {arr.map((item, index) => (
          <>
            <CardAbout key={index} data={item} />
            <div className="cardAbout">
              <CardAbout key={index} data={item} />
              <CardAbout key={index} data={item} />
            </div>
          </>
        ))}
      </Container>
    </section>
  );
}

export default Section4;
