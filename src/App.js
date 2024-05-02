import { Route, Routes } from "react-router-dom";
import "./App.css";

import Services from "./Components/Services/Services";
import Apropos from "./Components/Apropos/Apropos";
import Acceuil from "./Components/Acceuil/Acceuil";
import NavBar from "./Components/NavBar/NavBar";
import ServiceId from "./Components/ServiceId/ServiceId";
import Footer from "./Components/Footer/Footer";

import image1 from "./image/bureaux.jpg";
import image2 from "./image/commerce.jpg";
import image3 from "./image/Décapagesol.jpg";
import image4 from "./image/industriel.jpg";
import image5 from "./image/moquette.jpg";
import image6 from "./image/parking.jpg";
import image7 from "./image/résidentiel.jpg";
import image8 from "./image/des vitres.jpg";
import image9 from "./image/service11.jpg";
import CardBeforeAfter from "./Components/CardBeforeAfter/CardBeforeAfter";
import before from "./image/service2.jpg";

import after from "./image/service1.jpg";
import Contact from "./Components/Contact/Contact";

function App() {
  const services = [
    {
      id: 0,
      img: image1,
      title: "Nettoyage de bureaux",
      Desc: "Electronic typesetting rema essentially unchanged was popularised.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
    },
    {
      id: 1,
      img: image4,
      title: "Nettoyage industriel",
      Desc: "Electronic typesetting rema essentially unchanged was popularised.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
    },
    {
      id: 2,
      img: image8,
      title: "Nettoyage des vitres",
      Desc: "Electronic typesetting rema essentially unchanged was popularised.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
    },
    {
      id: 3,
      img: image6,
      title: "Nettoyage des parking",
      Desc: "Electronic typesetting rema essentially unchanged was popularised.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
    },
    {
      id: 4,
      img: image9,
      title: "Les remises en état",
      Desc: "Electronic typesetting rema essentially unchanged was popularised.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
    },
    {
      id: 5,
      img: image3,
      title: "Décapage sol",
      Desc: "Electronic typesetting rema essentially unchanged was popularised.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
    },
    {
      id: 6,
      img: image7,
      title: "Nettoyage résidentiel",
      Desc: "Electronic typesetting rema essentially unchanged was popularised.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
    },
    {
      id: 7,
      img: image5,
      title: "Shampoing moquette",
      Desc: "Electronic typesetting rema essentially unchanged was popularised.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
    },
    {
      id: 8,
      img: image2,
      title: "Nettoyage de commerce",
      Desc: "Electronic typesetting rema essentially unchanged was popularised.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
    },
  ];
 


  return (
    <div className="App">
      <NavBar services={services} />

      <Routes>
        <Route path="/" exact element={<Acceuil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:id" element={<ServiceId />} />
        <Route path="/apropos" element={<Apropos />} />
       


       
      </Routes>

      
      <Footer />
    </div>
  );
}

export default App;
