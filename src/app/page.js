"use client";
import Toolbar from "@/components/Toolbar";
import styled from "styled-components";

export default function Home() {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
  `;
  const Text = styled.p`
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  `;

  const Nav = styled.nav`
    background-color: ${(props) => props.theme.colors.header};
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  `;

  return (
    <Container>
      <Text>Home</Text>
      <Toolbar />
      <Nav>
        <div>logo</div>
        <div>menu</div>
      </Nav>
    </Container>
  );
}
