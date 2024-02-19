"use client";
import Auth from "@/components/Auth";
import Dform from "@/components/DynamicForm";
import DataInputForm from "@/components/DynamicForm/DataInputForm";
import Dynamic2 from "@/components/DynamicForm/Dynamic2";
import DynamicForm1 from "@/components/DynamicForm/DynamicForm1";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import ColorComponent from "@/components/Sidebar/components/color-shades/ColorComponent";
import Toolbar from "@/components/Toolbar";
import { getColorShades, getThemeColors } from "@/utils/getColors";
import dynamic from "next/dynamic";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function Home() {
  const Container = styled.div`
    // position: relative;
    // width: 100%;
    // height: 100vh;
    // overflow: hidden;
  `;

  const Button = styled.button`
    background-color: ${(props) => props.theme?.themePresets?.primaryBtn?.bg};
    color: ${(props) => props.theme?.themePresets?.primaryBtn?.text};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: ${(props) =>
        props.theme?.themePresets?.primaryBtn?.hover};
      color: ${(props) => props.theme?.themePresets?.primaryBtn?.text};
    }
  `;

  return (
    <Container>
      <Auth />
      {/* <Button>Click me</Button> */}
      {/* <DataInputForm /> */}
    </Container>
  );
}
