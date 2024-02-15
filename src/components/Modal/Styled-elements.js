import styled from "styled-components";
export const ModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.div`
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 30rem;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  // padding: 10px;
  background: gray;
  color: #fff;
  button {
    position: absolute;
    top: -20px;
    right: -20px;
    height: 20px;
    width: 20px;
    background: red;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 0.7em;
    border-radius: 50%;
    border: 1px solid white;
    &:hover {
      background: white;
      color: red;
    }
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
  background: white;
  color: black;
`;
