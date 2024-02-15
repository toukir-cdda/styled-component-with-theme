import styled, { css } from "styled-components";

export const ThemeToolBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 10px;
  background: #f5f5f5;
  color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  h1 {
    color: #000;
    padding: 10px;
    border-bottom: 1px solid #000;
    width: 100%;
    text-align: center;
  }
`;

export const DefaultThemeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px;
  button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background: #000;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #383838;
    }
  }
`;

export const DefaultThemeHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    padding: 5px;
    background: #000;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
  }
`;

export const ThemeVarients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background: #000;
    color: #fff;
    cursor: pointer;
  }
`;

export const ContextMenu = styled.div`
  position: absolute;
  width: 200px;
  background-color: #383838;
  color: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}

  ul {
    box-sizing: border-box;
    padding: 5px;
    margin: 0;
    list-style: none;
  }
  ul li {
    padding: 10px 12px;
  }
  /* hover */
  ul li:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;
