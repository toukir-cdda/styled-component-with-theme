const { default: styled } = require("styled-components");

export const ShadeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  // width: 100%;
  height: 800px;
  // padding: 0.3rem 0.4rem;
  // gap: 1rem;
  flex-grow: 1;
  overflow-y: auto;

  button {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 2rem;
    width: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ShadeContainer = styled.div`
  position: relative;
  width: 100%;
  //   height: 340px;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  //   padding: 0.1rem 1rem;
  border: 1px solid #000;
  box-shadow: 0 0 10px 0 #000;
  border-radius: 10px;
  overflow: auto;
  //scrollbar hidden
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Shades = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  //   padding: 0.1rem 1rem;
  border: 1px solid #000;
  box-shadow: 0 0 10px 0 #000;
  border-radius: 10px;
  overflow: auto;
  //scrollbar hidden
  &::-webkit-scrollbar {
    display: none;
  }
`;
