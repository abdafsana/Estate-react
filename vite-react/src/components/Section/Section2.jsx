import { Container } from "@mui/material";
import Card from "../Card/Card";
import "../Section/Section2.css";
import homeImg from "../image/home.png"
import kitchenImg from "../image/kitchen.png"
import vector from "../image/Vector.png"
import stairs from "../image/stairs.png"
import keyboard from "../image/keyboard.png"

function Section2() {
  const array = [
    {
      name: "Featured Sales",
      arr: [
        {
          id: "1",
          img:homeImg ,
          price: "290.000 $",
          about: "Apartment for sale",
          location: "London, Oxford St.",
          date: "26 November 2020",
          iconImg1: vector,
          image1data: "3+1",
          iconImg2:stairs,
          image2data: "10",
          iconImg3: keyboard,
          image3data: "150 m²",
        },
        {
          id: "2",
          img: homeImg ,
          price: "290.000 $",
          about: "Apartment for sale",
          location: "London, Oxford St.",
          date: "26 November 2020",
          iconImg1: vector,
          image1data: "3+1",
          iconImg2:stairs,
          image2data: "10",
          iconImg3: keyboard,
          image3data: "150 m²",
        },
        {
          id: "3",
          img:  homeImg ,
          price: "290.000 $",
          about: "Apartment for sale",
          location: "London, Oxford St.",
          date: "26 November 2020",
          iconImg1: vector,
          image1data: "3+1",
          iconImg2:stairs,
          image2data: "10",
          iconImg3: keyboard,
          image3data: "150 m²",
        },
        {
          id: "4",
          img:homeImg,
          price: "290.000 $",
          about: "Apartment for sale",
          location: "London, Oxford St.",
          date: "26 November 2020",
          iconImg1: vector,
          image1data: "3+1",
          iconImg2:stairs,
          image2data: "10",
          iconImg3: keyboard,
          image3data: "150 m²",
        },
      ],
    },
    {
      name: "Featured Rental",
      arr: [
        {
          id: "5",
          img:  kitchenImg ,
          price: "3.000 $",
          about: "Apartment for rent",
          location: "London, John Ruskin St.",
          date: "20 November 2020",
          iconImg1: vector,
          image1data: "2+1",
          iconImg2:stairs,
          image2data: "7",
          iconImg3: keyboard,
          image3data: "110 m²",
        },
        {
          id: "6",
          img:kitchenImg ,
          price: "3.000 $",
          about: "Apartment for rent",
          location: "London, John Ruskin St.",
          date: "20 November 2020",
          iconImg1: vector,
          image1data: "2+1",
          iconImg2:stairs,
          image2data: "7",
          iconImg3: keyboard,
          image3data: "110 m²",
        },
        {
          id: "7",
          img: kitchenImg ,
          price: "3.000 $",
          about: "Apartment for rent",
          location: "London, John Ruskin St.",
          date: "20 November 2020",
          iconImg1: vector,
          image1data: "2+1",
          iconImg2:stairs,
          image2data: "7",
          iconImg3: keyboard,
          image3data: "110 m²",
        },
        {
          id: "8",
          img: kitchenImg ,
          price: "3.000 $",
          about: "Apartment for rent",
          location: "London, John Ruskin St.",
          date: "20 November 2020",
          iconImg1: vector,
          image1data: "2+1",
          iconImg2:stairs,
          image2data: "7",
          iconImg3: keyboard,
          image3data: "110 m²",
        },
      ],
    },
  ];
  return (
    <section className="section2Style">
      <Container maxWidth="lg" className="sectionContainer">
      {array.map(item => (
 
        <>
        <div className="title-div">
        <h3>{item.name}</h3>
        <button>All</button>
        </div>
        <div className="card-item">
        {item.arr.map((card,index) => (
         <Card key={index} data={card} />
        ))}
     </div>
        </>
      ))}
    
      </Container>
    </section>
  );
}

export default Section2;
