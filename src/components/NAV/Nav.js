import React from "react";
import { Navbar } from "react-bootstrap";

const Nav = () => {
  const nav = {
    color: "#ecf0f1",
  };

  return (
    <>
      <Navbar
        className="justify-content-left"
        bg="dark"
        variant="light"
        expand="lg"
        sticky="top"
      >
        <Navbar.Brand style={nav}>
          <h1>WorkSpace Direct</h1>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Nav;
