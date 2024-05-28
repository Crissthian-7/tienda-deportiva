import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ImageBrand from "../img/logo1.png";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
      <Container className='me-auto'>
        <Nav className='align-items-center'>
          <NavbarBs.Brand className='fs-1'>
            <img
              src={ImageBrand}
              alt='Logo'
              style={{
                width: "auto",
                height: "3rem",
                objectFit: "cover",
              }}
            />
          </NavbarBs.Brand>
          <Nav.Link to='/' as={NavLink} className='fs-4 uppercase'>
            Inicio
          </Nav.Link>
          <Nav.Link to='/Store' as={NavLink} className='fs-4 uppercase'>
            Tienda
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink} className='fs-4 uppercase'>
            Nosotros
          </Nav.Link>
        </Nav>
        <div>
          <Button style={{ width: "3rem", height: "3rem" }} variant='dark' className='rounded relative m-1'>
            <FaMagnifyingGlass />
          </Button>
          <Button style={{ width: "3rem", height: "3rem" }} variant='dark' className='rounded relative m-1'>
            <FaUserAlt />
          </Button>
          <Button style={{ width: "3rem", height: "3rem" }} variant='dark' className='rounded relative m-1'>
            <FaRegHeart />
          </Button>
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem" }}
            variant='dark'
            className='rounded relative m-1'
          >
            <FaShoppingCart />
            <div
              className='rounded bg-success d-flex justify-content-center align-item-center'
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                transform: "translate(70% , 0%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        </div>
      </Container>
    </NavbarBs>
  );
}
