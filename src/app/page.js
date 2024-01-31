"use client";
import Auth from "@/components/Auth";
import Navigation from "@/components/Navigation";
import Toolbar from "@/components/Toolbar";
import styled from "styled-components";

export default function Home() {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.primary.background};
  `;
  const Text = styled.p`
    color: ${(props) => props.theme.primary.text};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  `;

  return (
    <Container>
      <Text>Theme</Text>
      <Toolbar />
      <Navigation />
      <Auth />
    </Container>
  );
}
