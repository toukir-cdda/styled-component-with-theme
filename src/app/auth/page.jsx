"use client";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${(props) => props.theme?.themePresets?.bg};
  color: ${(props) => props.theme?.primary?.text};
  padding: 20px;
`;
const Auth = () => {
  return <Container>Auth</Container>;
};

export default Auth;
