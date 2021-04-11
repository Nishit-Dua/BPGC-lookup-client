import React from "react";
import styled from "styled-components";

const Reasonpage: React.FC = () => {
  return (
    <StyledSection>
      <h1>My Reasoning For Not Showing 2020 batch's CG</h1>
      <p>
        Hi so a cringe warning, but in my first year i spent way too much time
        obsessinng over cg that truely hindered my progress in my other life
        goals, Now don't get me wrong, cg is definately important especially in
        your first year, but believe me you really don't need to stress about
        others grades like ever, I am speaking from experience that just will
        give you unwanted stress. Insted of that just focus on working hard and
        you'll get a decent CG 💪🏼
      </p>
      <button>Go Back</button>
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

  button {
    background-color: #000000;
    border: none;
    color: white;
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
