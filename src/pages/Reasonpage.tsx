import React from "react";
import styled from "styled-components";

const Reasonpage: React.FC = () => {
  return (
    <StyledSection>
      <h1>My Reasoning For Not Showing 2020 batch's CG</h1>
      <p></p>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;

  padding: 2rem;

  h1 {
  }

  p {
  }
`;

export default Reasonpage;
