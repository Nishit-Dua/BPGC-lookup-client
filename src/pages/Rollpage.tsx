import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
const Rollpage: React.FC = () => {
  const [timeBeforeRickRoll, setTimeBeforeRickRoll] = useState(2500);

  useEffect(() => {
    const TICK = 100;
    if (timeBeforeRickRoll > 0) {
      const redirectIn = setInterval(() => {
        setTimeBeforeRickRoll((t) => t - TICK);
      }, TICK);
      return () => {
        clearInterval(redirectIn);
      };
    } else {
      // window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
  }, [timeBeforeRickRoll]);

  return (
    <StyledSection>
      <a href="/">
        <p>Source Code</p>
        <AiOutlineGithub />
      </a>
      <h1>Click here in {timeBeforeRickRoll / 1000}s or else</h1>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  align-self: stretch;

  a {
    background-color: #000000;
    color: white;
    padding: 0.8rem 1rem;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1rem;

    p {
      margin-right: 0.8rem;
    }

    svg {
      font-size: 1.8rem;
    }
  }
`;

export default Rollpage;