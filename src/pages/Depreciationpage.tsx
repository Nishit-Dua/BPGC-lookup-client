import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Depriciationpage: React.FC = () => {
  return (
    <StyledSection>
      <h1>Depreciation Notice</h1>
      <div>
        <p>
          Hi so a few people bought up the issue of privacy, to which i really
          didn't give much thought into while building the project. While it was
          fun building, i have decided to take down the site :( you can still
          check out the <Link to="/source">souce code</Link> purely for{" "}
          <span>educational purposes. </span>
          Peace! And thanks for checking out the site! I hope I will see you
          soon with a more useful project :P
        </p>
      </div>
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
    span {
      font-weight: bold;
    }
  }

  a {
    color: var(--link-text);
  }
`;

export default Depriciationpage;
