import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PersonType } from "../context/AppProvider";

interface SinglePersonProps {
  person: PersonType;
}

const SinglePerson: React.FC<SinglePersonProps> = ({ person }) => {
  const year = person.bitsId.slice(0, 4);
  const sgList = year === "2019" ? person.sgList.slice(2) : person.sgList;
  let email;
  if (person.bitsId[4] === "A" || person.bitsId[4] === "B")
    email = `f${person._id}@goa.bits-pilani.ac.in`.toLowerCase();
  else
    email = `${person.bitsId[4]}${person.bitsId.slice(0, 4)}\
    ${person.bitsId.slice(8, 12)}\
    @goa.bits-pilani.ac.in`.toLowerCase();

  return (
    <StyledPerson key={person._id}>
      <h2>{person.name.toLowerCase()}</h2>
      <p className="id">{person.bitsId}</p>
      {year !== "2020" ? (
        <>
          <div className="cg-container">
            {sgList.map((sg, index) => {
              let offset = year === "2017" ? 3 : year === "2016" ? 5 : 1;
              return (
                <p key={index}>
                  Sem {index + offset} CG: {sg || "????"}
                </p>
              );
            })}
          </div>
          <div className="hostel">
            <p className="address">
              Lives in{" "}
              {person.hostelRoom
                ? `Room ${person.hostelRoom} at`.toLowerCase()
                : ""}{" "}
              {person.hostel}
            </p>
          </div>
        </>
      ) : (
        <p className="cg-container">
          Not showing 2020 batch's CG <Link to="/reason">My Reason</Link> you
          may still stalk your seniors tho 😏
        </p>
      )}
      <a className="email" href={`mailto:${email}`}>
        Email: {email}
      </a>
    </StyledPerson>
  );
};

const StyledPerson = styled.article`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem -0.125rem rgb(10 10 10 / 15%),
    0 0 0 1px rgb(10 10 10 / 2%);

  h2 {
    text-transform: capitalize;
    color: #312d2d;
    font-weight: 500;
  }

  p {
    &.id {
      color: #666666;
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: #e64100;
    &.email {
      color: #003479;
    }
  }

  .cg-container,
  .hostel {
    margin-bottom: 0.5rem;
    .address {
      text-transform: capitalize;
    }
  }
`;

export default SinglePerson;
