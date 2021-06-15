import React from "react";
import styled from "styled-components";
import { PersonType } from "../context/AppProvider";

interface SinglePersonProps {
  person: PersonType;
}

const SinglePerson: React.FC<SinglePersonProps> = ({ person }) => {
  // FUCK IT i ain't gonna support higher degree lads, big pain in the ass
  if (person.bitsId[4] !== "A" && person.bitsId[4] !== "B") return <></>;
  console.count("rendered");
  const year = person.bitsId.slice(0, 4);
  let lastSem = 0;
  let sgList =
    year === "2020"
      ? person.cgList.slice(5)
      : year === "2019"
      ? person.cgList.slice(2)
      : person.cgList;

  console.log(sgList);
  if (sgList.length === 1 && sgList[0] === null) return <></>;

  const email =
    person.hostel === "Graduate"
      ? `f${person._id}@alumni.bits-pilani.ac.in`.toLowerCase()
      : `f${person._id}@goa.bits-pilani.ac.in`.toLowerCase();
  return (
    <StyledPerson>
      <h2>{person.name.toLowerCase()}</h2>
      <p className="id">{person.bitsId}</p>
      {/* {year !== "2020" ? ( */}
      <>
        <div className="cg-container">
          {sgList.map((sg, index) => {
            let offset = year === "2017" ? 3 : year === "2016" ? 5 : 1;
            if (index) lastSem = index + offset;
            lastSem = year === "2020" ? 1 : lastSem;
            return (
              <p key={index}>
                Sem {index + offset} CG: {sg || "????"}
              </p>
            );
          })}
          {sgList[sgList.length - 1] ? (
            <p>
              Sem {lastSem + 1} CG: {year === "2020" ? "Current" : "Upcoming"}{" "}
              Semester
            </p>
          ) : null}
        </div>
        <div className="hostel">
          <p className="address">
            {year === "2020"
              ? "lives at home kek"
              : year === "2016" && person.hostel === "Graduate"
              ? person.hostel + "d 🥳"
              : `Lives in
            ${
              person.hostelRoom
                ? `Room ${person.hostelRoom} at`.toLowerCase()
                : ""
            }
            ${person.hostel}`}
          </p>
        </div>
      </>
      {/* //* They can handle the truth now kek */}
      {/* ) : (
        <p className="cg-container">
          Not showing 2020 batch's CG <Link to="/reason">My Reason</Link> you
          may still stalk your seniors tho 😏
        </p>
      )} */}
      Email:
      <a className="email" href={`mailto:${email}`}>
        {email}
      </a>
    </StyledPerson>
  );
};

const StyledPerson = styled.article`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: var(--card-shadow);

  h2 {
    text-transform: capitalize;
    color: var(--main-text);
    font-weight: 500;
  }

  p {
    &.id {
      color: var(--light-text);
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: var(--link-text);
    &.email {
      color: var(--email-text);
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

export default React.memo(SinglePerson);
