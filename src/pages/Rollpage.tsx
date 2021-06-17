import React, { useEffect, useState } from "react";
import styled from "styled-components";
import alwaysBeenRickRoll from "../assets/alwaysHaveBeen.jpg";

const Rollpage: React.FC = () => {
  const [timeBeforeRickRoll, setTimeBeforeRickRoll] = useState(600);

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
      window.location.assign("https://m.youtube.com/watch?v=dQw4w9WgXcQ");
    }
  }, [timeBeforeRickRoll]);

  return (
    <StyledSection>
      <img src={alwaysBeenRickRoll} alt="Rick R0ll" />
      <h1>Wait it's a rickroll . . . Always Have been</h1>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  align-self: stretch;
  width: 100%;

  img {
    /* width: 80%; */
    width: 60%;
    object-fit: cover;
    position: relative;
  }

  a {
    background-color: var(--btn-bg);
    color: var(--main-bg);
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

  h1 {
    font-weight: 500;
    span {
      color: var(--link-text);
    }
  }
`;

export default Rollpage;
