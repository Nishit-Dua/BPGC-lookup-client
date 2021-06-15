import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>
        Made By some BITSGian using <FaReact /> and <SiTypescript />
        <Link to="/source"> Contribs are welcome! </Link>
      </p>
      {/* <div className="socials">
        check me out at{" "}
        <a
          href="https://www.instagram.com/nishit_dua/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/Nishit-Dua/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="https://twitter.com/_lemark_" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="mailto:f20180620@goa.bits-pilani.ac.in">
          <GoMail />
        </a>
      </div> */}
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--main-bg);
  padding: 4rem;
  padding-bottom: 0.5rem;
  color: var(--secondry-text);
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
    color: var(--link-text);
  }
  .socials {
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondry-text);

    svg {
      margin-left: 0.4rem;
      color: var(--secondry-text);
      transform: translateY(12%);
      transition: all 0.1s ease-in-out;

      &:hover {
        transform: translateY(12%) scale(1.3);
        color: #001483;
      }
    }
  }
`;

export default Footer;
