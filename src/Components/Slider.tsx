import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/football-italien-web-tete-021648790152.jpg";
import img2 from "../img/equipment-bn.jpg";
import img3 from "../img/RISE-with-SAP-.jpg";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme='light' className='position-absolute start-0 end-0'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img1}
          alt='First slide'
          style={{
            filter: "brightness(50%)",
          }}
        />
        <Carousel.Caption className='text-start mb-4'>
          <h2>Pasión por el Deporte</h2>
          <h5>Descubre la emoción del fútbol y vive cada jugada con intensidad.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img2}
          alt='Second slide'
          style={{
            filter: "brightness(50%)",
          }}
        />
        <Carousel.Caption className='text-start mb-4'>
          <h2>Equipamiento de Calidad</h2>
          <h5>Encuentra todo lo que necesitas para llevar tu rendimiento al siguiente nivel.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img3}
          alt='Third slide'
          style={{
            filter: "brightness(50%)",
          }}
        />
        <Carousel.Caption className='text-start mb-4'>
          <h2>Aventura en las Alturas</h2>
          <h5>Explora nuevas cimas y vive la experiencia de la naturaleza en su máximo esplendor.</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
