import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <Link to="/">BPGC Lookup</Link>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background-color: #ffffff;
  color: #1f1f1f;
  text-align: center;
  width: 100vw;
  box-shadow: 3px 3px 11px 1px #52525277;
  padding: 0.5rem;

  a {
    font-size: 2.5rem;
    font-family: "Poppins", sans-serif;
    user-select: none;
  }
`;

export default Navbar;
