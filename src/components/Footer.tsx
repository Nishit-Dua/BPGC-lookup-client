import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaGithub, FaInstagram, FaReact, FaTwitter } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { GoMail } from "react-icons/go";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>
        Made By <a href="https://github.com/Nishit-Dua"> Nishit Dua </a>
        using <FaReact /> and <SiTypescript />
        <Link to="/source"> Contribs are welcome! </Link>
      </p>
      <div className="socials">
        check me out at{" "}
        <a href="https://www.instagram.com/nishit_dua/">
          <FaInstagram />
        </a>
        <a href="https://github.com/Nishit-Dua/">
          <FaGithub />
        </a>
        <a href="https://twitter.com/_lemark_">
          <FaTwitter />
        </a>
        <a href="mailto:f20180620@goa.bits-pilani.ac.in">
          <GoMail />
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #ffffff;
  padding: 4rem;
  padding-bottom: 0.5rem;
  color: #525252;
  font-weight: 500;
  width: 100vw;

  word-spacing: 0.1rem;
  p {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    text-align: center;

    svg {
      transform: translateY(12%);
    }
  }
  a {
    color: #ff3c3c;
  }
  .socials {
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #525252;

    svg {
      margin-left: 0.4rem;
      color: #ff3c3c;
      color: #525252;
      transform: translateY(12%);
    }
  }
`;

export default Footer;
