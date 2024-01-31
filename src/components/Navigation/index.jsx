import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${(props) => props.theme.primary.header};
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.div`
  color: ${(props) => props.theme.primary.text};
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
    background-color: ${(props) => props.theme.primary.text};
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background-color: ${(props) => props.theme.primary.text};
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary.text};
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <Menu>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </Menu>
    </Nav>
  );
};

export default Navigation;
