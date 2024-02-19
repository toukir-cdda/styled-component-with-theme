"use client";
import React from "react";
import GeneratePreset from "./GeneratePreset";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme?.themePresets?.bg};
`;

const GeneratePresets = () => {
  return <Container>{/* <GeneratePreset /> */}</Container>;
};

export default GeneratePresets;
