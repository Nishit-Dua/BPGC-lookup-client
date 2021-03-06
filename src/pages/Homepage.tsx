import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { MdClearAll } from "react-icons/md";
import { useGlobalContext } from "../context/AppProvider";
import * as api from "../Api";
import SinglePerson from "../components/SinglePerson";
import { Loading } from "../components";

const Homepage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const { dispatch, searchData, isLoading, error } = useGlobalContext();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
    dispatch({ type: "SET_LOADING", payload: true });
    api.searchData(searchValue).then((data) => {
      if (data.responseCode === 0)
        dispatch({ type: "FETCH", payload: data.data });
      else if (data.responseCode === 1)
        dispatch({ type: "NOT_FOUND", payload: searchValue });
      else dispatch({ type: "SET_LOADING", payload: false });
    });
    setSearchValue("");
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledHome>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Using Name or Bits ID"
          required
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          ref={inputRef}
        />
        <div className="btn-control">
          <button
            type="submit"
            className={`search ${isLoading ? "disabled" : ""}`}
            disabled={isLoading}
          >
            <FiSearch />
          </button>
          {searchData.length ? (
            <button
              className={`clear ${isLoading ? "disabled" : ""}`}
              onClick={() => {
                dispatch({ type: "DELETE" });
              }}
            >
              <MdClearAll />
            </button>
          ) : null}
        </div>
      </form>
      {isLoading ? <Loading /> : null}
      {error.isError ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "1.3rem",
            color: "var(--link-text)",
          }}
        >
          {error.message}
        </p>
      ) : null}
      {searchData.length ? (
        <div className="searched-container">
          {searchData.map((person) => (
            <SinglePerson person={person} key={person._id} />
          ))}
        </div>
      ) : null}
    </StyledHome>
  );
};

const StyledHome = styled.section`
  flex: 1;

  align-self: center;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  form {
    padding: 0 0.5rem;
    width: clamp(280px, 60%, 800px);
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;

    margin: 3rem 2rem;

    input {
      padding: 0.5rem 1rem;
      width: 100%;
      font-size: 1.2rem;
      border-radius: 3px;
      border-width: 0 0 3px;
      background-color: transparent;
      transition: all 0.2s ease-in-out;

      outline: none;

      &:focus {
        outline: none;
        color: var(--link-text);
        border-color: #ff8604;
        outline: none;
        box-shadow: 3px 3px 11px 1px #acacac77;
      }
    }

    button {
      background-color: transparent;
      color: var(--secondry-bg);
      border: none;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.5rem;

      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.1s ease-in-out;

      &.disabled {
        color: var(--light-text);
      }

      &:not(:last-child) {
        margin-right: 0.2rem;
      }
    }
  }
  .searched-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`;

export default Homepage;
