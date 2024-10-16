import React, { useState } from "react";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
import { registerFunction } from "../service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  @media (max-width: 720px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (max-width: 720px) {
    margin-top: 2rem;
    gap: 1rem;
  }
`;
const UpperPart = styled.div`
  width: 60%;
  margin: auto;
`;
const Heading = styled.h1`
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #1e3a8a;
  text-align: center;
`;
const Para = styled.p`
  font-size: 16px;

  text-align: center;
  margin-top: 0.75rem;
`;

const Formtag = styled.form`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InboxField = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: inherit;
`;
const InboxBox = styled.input`
  border: 1px solid #e5e7eb;
  outline: none;
  outline-offset: 2px;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  margin-top: 0.75rem;
`;
const TextPart = styled.textarea`
  padding: 0.5rem 0.75rem;
  border: 1px solid #e5e7eb;
  outline: none;
  outline-offset: 2px;
  border-radius: 0.75rem;
  margin-top: 0.75rem;
`;
const SubmitButton = styled.button`
  font-weight: 700;
  text-align: center;
  padding: 0.75rem 1.5rem;
  background-color: #1e3a8a;
  color: #ffffff;
  font-size: 16px;
`;

const Register = () => {
  const navigate = useNavigate();
  const [profile, setProfiles] = useState({
    fname: "",
    email: "",
    website: "",
    about: "",
  });
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfiles({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, website, about } = profile;
    if (fname === "") {
      toast.error("Name is required");
    } else if (fname.length < 2) {
      toast.error("Name contain more than 2 character");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Enter valid email");
    } else if (website === "") {
      toast.error("Website is required");
    } else if (about === "") {
      toast.error("About is required");
    } else {
      const config = {
        header: "application/json",
      };
      const response = await registerFunction(profile, config);
      if (response?.status === 200) {
        navigate("/");
        toast.success("user registered successfully");
      } else {
        toast.error("use didnt registered");
      }
    }
  };
  return (
    <Wrapper>
      <ToastContainer />
      <Container>
        <UpperPart>
          <Heading>Add Developer Profile</Heading>
          <Para>
            Please use a different/unique email for every profile you're
            creating.
          </Para>
        </UpperPart>
        <Formtag>
          <InboxField>
            <Label htmlFor="fname">Full name</Label>
            <InboxBox
              type="text"
              placeholder="full name"
              name="fname"
              onChange={handleChange}
              value={profile.fname}
            />
          </InboxField>
          <InboxField>
            <Label htmlFor="email">Email</Label>
            <InboxBox
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
              value={profile.email}
            />
          </InboxField>
          <InboxField>
            <Label htmlFor="Website">Website</Label>
            <InboxBox
              type="text"
              placeholder="Website"
              name="website"
              onChange={handleChange}
              value={profile.website}
            />
          </InboxField>
          <InboxField>
            <Label htmlFor="about">About</Label>
            <TextPart
              name="about"
              id="about"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={profile.about}
            ></TextPart>
          </InboxField>
          <SubmitButton type="submit" onClick={handleSubmit}>
            Add Profile
          </SubmitButton>
        </Formtag>
      </Container>
    </Wrapper>
  );
};

export default Register;
