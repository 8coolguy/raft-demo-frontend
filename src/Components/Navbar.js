import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/NavBar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { HashRouter, Routes, Route, Link, Outlet,useLocation } from "react-router-dom";

function StatusOrHome(location){
  if(location.pathname=="/status")
    return (<Nav.Link href="#/">
      Home 
    </Nav.Link>)
  return (<Nav.Link href="#/status">
    Status
  </Nav.Link>)
}
function NavBar(){
    let location = useLocation();
    return (<>
      <Navbar className="bg-info" expand="lg">
            <Navbar.Brand href="#/" className="mx-auto justify-content-center">Raft Demo </Navbar.Brand> 
            {/* <Nav className="bg-grey">
              <NavDropdown title="Servers">
                <NavDropdown.Item>Item 1</NavDropdown.Item>
                <NavDropdown.Item>Item 2</NavDropdown.Item>
                <NavDropdown.Item>Item 3</NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
      </Navbar>
      <Outlet/>
    </>)
}
export default NavBar;
