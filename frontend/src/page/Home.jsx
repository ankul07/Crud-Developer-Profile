import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProfileCard } from "../components/ProfileCard";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUserFunction, deleteFunction } from "../service/api";

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

const Container = styled.div`
  display: grid;
  margin-top: 2.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 64px;
  grid-row-gap: 50px;
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");

  const userfun = async () => {
    const response = await getUserFunction(search);
    if (response?.status === 200) {
      setUserData(response.data.alluser);
    }
  };

  const deletefunc = async (id) => {
    const response = await deleteFunction(id);
    if (response?.status === 200) {
      userfun();
    } else {
      alert("error while deleteing");
    }
  };
  useEffect(() => {
    userfun();
  }, [search]);
  return (
    <>
      <Header setSearch={setSearch} />
      <Wrapper>
        <Container>
          <ProfileCard userData={userData} deletefunc={deletefunc} />
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;
