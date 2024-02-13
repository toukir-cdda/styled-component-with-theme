import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
//on off sidebar using toggle button with animation
//when toggle is true then sidebar will be 0% and when toggle is false then sidebar will be -100%
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const closeFromLeft = keyframes`
//on off sidebar using toggle button with animation
//when toggle is true then sidebar will be 0% and when toggle is false then sidebar will be -100%
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export const SidebarWrapper = styled.div`
  position: absolute;
  transform: translateX(
    ${(props) => (props.toggle === "true" ? "0%" : "-100%")}
  );
  animation: ${(props) =>
      props.toggle === "true" ? appearFromLeft : closeFromLeft}
    0.5s;
  width: 300px;
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.primary?.card?.background};
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-right: 1px solid ${(props) => props.theme.primary?.card?.border};

  & > h1 {
    color: ${(props) => props.theme.primary?.card?.title};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
  & > button {
    position: absolute;
    top: 50%;
    right: -50px;
    transform: translateY(-50%);
    background-color: ${(props) => props.theme.primary?.button?.background};
    color: ${(props) => props.theme.primary?.button?.color};
    border: 1px solid ${(props) => props.theme.primary?.button?.border};
    writing-mode: vertical-rl;
    padding: 10px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: ${(props) =>
        props.theme.primary?.button?.hover?.background};
      color: ${(props) => props.theme.primary?.button?.hover?.color};
      border: 1px solid ${(props) => props.theme.primary?.button?.hover?.border};
    }
  }
`;
