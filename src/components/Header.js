import React from "react";
import logo from "../sidelogo.png";
import { Button } from "bootstrap";
import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-around"
    }}>
      <img
        style={{
          position: "relative",
          width:"10%",
          height:"10%",
          marginLeft:"0px"
        }}
        src={logo}
        alt="logo"
      ></img>
      <input type="search" placeholder="Search Mentor / Employee"></input>
      <button>Logout</button>
      
    </div>
  );
}

export default Header;
