import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { getUserFunction } from "../service/api";

//styled here
const Wrapper = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  @media (max-width: 720px) {
    margin-top: 2rem;
  }
`;
const Container = styled.div`
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;
const Typography = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
  user-select: auto;
`;
const SpanEle = styled.span`
  font-size: 1.2rem;
  padding: 0.3rem 1rem;
  background-color: #1e3a8a;
  color: #fff;
  outline: none;
`;

const InputBox = styled.input`
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  width: 250px;
`;
const AddBtns = styled(NavLink)`
  background-color: #000000;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.3rem 1rem;
  border-radius: 0.2rem;
`;

const Header = ({ setSearch }) => {
  const [search, setSearchh] = useState("");
  useEffect(() => {
    setSearch(search);
  }, [search]);

  return (
    <>
      <Wrapper>
        <Container>
          <Typography>
            Developer Profile <SpanEle>9</SpanEle>
          </Typography>
          <form>
            <InputBox
              type="search"
              placeholder="Search by Name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <AddBtns to="/register">Add Profile</AddBtns>
        </Container>
      </Wrapper>
    </>
  );
};

export default Header;
