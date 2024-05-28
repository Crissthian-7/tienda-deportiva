import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className='bg-dark text-white mt-5'>
      <Container>
        <Row className='pt-4'>
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>
              Somos una tienda de ropa deportiva comprometida con ofrecer productos de la más alta calidad para mejorar
              tu rendimiento en cualquier deporte.
            </p>
          </Col>
          <Col md={4}>
            <h5>Enlaces de Interes</h5>
            <Nav className='flex-row'>
              <div className='column'>
                <Nav.Link href='#inicio' className='text-white'>
                  Inicio
                </Nav.Link>
                <Nav.Link href='#productos' className='text-white'>
                  Productos
                </Nav.Link>
              </div>
              <div className='column'>
                <Nav.Link href='#contacto' className='text-white'>
                  Contacto
                </Nav.Link>
                <Nav.Link href='#faq' className='text-white'>
                  Preguntas Frecuentes
                </Nav.Link>
              </div>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contáctanos</h5>
            <p>
              <i className='fas fa-map-marker-alt'></i> av. Siempre Viva 123, Springfield
            </p>
            <p>
              <i className='fas fa-phone'></i> +51 987456123
            </p>
            <p>
              <i className='fas fa-envelope'></i> info@tiendadeportiva.com
            </p>
          </Col>
        </Row>
        <Row className='text-center py-3'>
          <Col>
            <p>&copy; 2024 Tienda de Ropa Deportiva. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
