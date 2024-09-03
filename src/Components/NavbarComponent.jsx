import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import carticon from "./Assets/cart.jpg";
import "./NavbarComponent.css";
import handicon from "./Assets/handicon.jpg";
import { useCart } from "react-use-cart";



function NavbarComponent() {
  const { totalItems } = useCart();
  

  return (
    <div>
      <div className="container">
        <Navbar className="navbar" expand="lg" >
          <Container fluid>
            <Navbar.Brand href="#" className="navbrand">
              <img src={handicon} alt="" className="img-fluid navbrand-img" />
              Kaida
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="nav-toggler" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto nav my-2 my-lg-0"
                style={{ maxHeight: "150px" }}
                navbarScroll
              >
                <Link className="nav-link" to="/" href="#action1">
                  Home
                </Link>
                <Link className="nav-link" to="/about" href="#action2">
                  About
                </Link>
                <Link className="nav-link" to="/contact" href="#action2">
                  Contact
                </Link>
              </Nav>

              <div className="image-count-container">
                <Link to="/cart">
                  <img
                    src={carticon}
                    alt=""
                    className="nav-img-icon img-fluid"
                  />
                </Link>
                <div className="count">{totalItems}</div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarComponent;
