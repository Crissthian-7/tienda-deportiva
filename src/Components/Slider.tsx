import Carousel from 'react-bootstrap/Carousel'
import img1 from '../img/football-italien-web-tete-021648790152.jpg'
import img2 from '../img/equipment-bn.jpg'
import img3 from '../img/RISE-with-SAP-.jpg'

function DarkVariantExample () {
  return (
    <Carousel data-bs-theme='light' className='position-absolute start-0 end-0 fw-bold'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img1}
          alt='First slide'
        />
        <Carousel.Caption>
          <h5>
            Pasión por el Deporte
          </h5>
          <p>
            Descubre la emoción del fútbol y vive cada jugada con intensidad.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img2}
          alt='Second slide'
        />
        <Carousel.Caption>
          <h5>Equipamiento de Calidad</h5>
          <p>
            Encuentra todo lo que necesitas para llevar tu rendimiento al siguiente nivel.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img3}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h5>Aventura en las Alturas</h5>
          <p>
            Explora nuevas cimas y vive la experiencia de la naturaleza en su máximo esplendor.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default DarkVariantExample