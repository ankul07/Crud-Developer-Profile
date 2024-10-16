import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Card = styled.div`
  width: 365px;
  height: 310px;

  border-radius: 10px;
  background-color: #ffffff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  gap: 1rem;
`;
const OneRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FirstLetterOfName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-bold: 700;
  font-size: 28px;
  background-color: #fbcfe8;
  border: 1px solid transparent;
  border-radius: 50%;
  padding: 0.5rem 1rem;
`;

const Alter = styled.div`
  display: flex;
  gap: 1rem;
`;
const UserName = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;
const Typography = styled.p`
  font-size: 15px;
  height: 100px;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const LastOne = styled.div`
  display: flex;
  gap: 0.8rem;
`;
export const ProfileCard = ({ userData, deletefunc }) => {
  const handleLink = (link) => {
    window.open(link, "_blank");
    console.log(link);
  };
  return (
    <>
      {userData.length > 0
        ? userData.map((ele, index) => {
            return (
              <>
                <Card key={index}>
                  <OneRow>
                    <FirstLetterOfName>
                      {ele.fname[0].toUpperCase()}
                    </FirstLetterOfName>
                    <Alter>
                      <NavLink
                        to={`/edit/${ele._id}`}
                        style={{ fontSize: "1.2rem" }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </NavLink>
                      <button
                        style={{ fontSize: "1.2rem" }}
                        onClick={() => deletefunc(ele._id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </Alter>
                  </OneRow>

                  <UserName>{ele.fname}</UserName>
                  <Typography>{ele.about}</Typography>
                  <Links>
                    <LastOne>
                      <i className="fa-regular fa-envelope"></i>
                      <NavLink
                        to="#"
                        style={{
                          textDecoration: "none",
                          fontWeight: 700,
                          fontSize: "12px",
                        }}
                      >
                        {ele.email}
                      </NavLink>
                    </LastOne>

                    <LastOne>
                      <i className="fa-solid fa-globe"></i>
                      <NavLink
                        to={ele.website}
                        style={{
                          textDecoration: "none",
                          fontWeight: 700,
                          fontSize: "12px",
                        }}
                        onClick={() => handleLink(ele.website)}
                      >
                        {ele.website}
                      </NavLink>
                    </LastOne>
                  </Links>
                </Card>
              </>
            );
          })
        : "no user found"}
    </>
  );
};
