import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CgDarkMode } from "react-icons/cg";
import { useGlobalContext } from "../context/AppProvider";

const Navbar: React.FC = () => {
  const { dispatch, theme } = useGlobalContext();

  useEffect(() => {
    document.body.classList.value = theme || "light";
  }, [theme, dispatch]);

  return (
    <StyledNavbar>
      <Link to="/">BPGC Lookup</Link>
      <CgDarkMode
        onClick={() => {
          dispatch({ type: "CHANGE_THEME" });
        }}
      />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background-color: var(--main-bg);
  color: var(--main-text);
  text-align: center;
  width: 100vw;
  box-shadow: 3px 3px 11px 1px #52525277;
  padding: 0.5rem;

  position: relative;

  a {
    font-size: 2.5rem;
    font-family: "Poppins", sans-serif;
    user-select: none;
  }

  svg {
    position: absolute;
    right: 5vw;
    font-size: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export default Navbar;
