import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Reasonpage: React.FC = () => {
  return (
    <StyledSection>
      <h1>My Reasoning For Not Showing 2020 batch's CG</h1>
      <p>
        Hi so a cringe warning, but in my first year i spent way too much time
        obsessing over cg which truely hindered my progress in my other life
        goals, Now don't get me wrong, cg is definitely important especially in
        your first year, but believe me you really don't need to stress about
        other's grades like ever, I am speaking from experience that this will
        just give you unwanted stress. Insted of that just focus on working hard
        and having fun and you'll get a decent CG 💪🏼 and if you don't that's
        still not the end of the world!
      </p>
      <Link to="/">Go Back</Link>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  padding: 2.5rem;
  align-self: center;
  max-width: 800px;

  h1 {
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
  }

  a {
    background-color: var(--btn-bg);
    border: none;
    color: var(--main-bg);
    padding: 0.8rem 1rem;
    border-radius: 5px;

    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 1rem;
  }
`;

export default Reasonpage;
