import buildPng from "../image/build.png";
import "../Section/Section1.css";
function Section1() {
  return (
    <section>
      <img src={buildPng} alt="build image" className="imagedetail" />
    </section>
  );
}

export default Section1;
