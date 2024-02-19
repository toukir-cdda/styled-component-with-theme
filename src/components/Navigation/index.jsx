import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${(props) => props.theme?.themePresets?.nav?.bg};
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${(props) => props.theme?.primary?.border};
`;

const Logo = styled.div`
  color: ${(props) => props.theme?.primary?.text};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.div`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: 0 10px;
    background-color: ${(props) => props.theme?.primary?.text};
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background-color: ${(props) => props.theme?.primary?.text};
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme?.primary?.text};
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo>
        <Link href="/">Logo</Link>
      </Logo>
      <Menu>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
          <li>
            <Link href="auth">Login</Link>
          </li>
        </ul>
      </Menu>
    </Nav>
  );
};

export default Navigation;
