import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>
        Made By
        <a href="https://github.com/Nishit-Dua"> Nishit Dua </a>
        using
        <a href="https://github.com/Nishit-Dua/BPGC-lookup-client">
          {" "}
          Node/Express/React/Typescript stack!{" "}
        </a>
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #ffffff;
  border: 1px solid green;
  padding: 0.5rem;
  color: #525252;
  font-weight: 500;
  width: 100vw;
  p {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    text-align: center;
  }
  a {
    color: red;
  }
`;

export default Footer;
