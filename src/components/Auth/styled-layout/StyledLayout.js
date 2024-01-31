import styled from "styled-components";

export const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.primary.background};
  color: ${(props) => props.theme.primary.text};
  padding: 0 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  gap: 48px;
  background-color: white;
  border-radius: 10px;
  max-width: 630px;
`;

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > button {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: transparent;
    color: #1570ef;
    cursor: pointer;
    border: 1px solid #1570ef;
    &:hover {
      background-color: #1570ef;
      color: white;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const FormSection = styled.section`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FormHeader = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > h3 {
    color: #1a1a1a;
    font-size: 3rem;
    font-weight: 600;
  }
  & > p {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: #4d4d4d;
  }
`;

export const DoubleInputContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  & > label {
    font-size: 1rem;
    font-weight: 400;
    color: #4d4d4d;
  }
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid #e6e6e6;
    overflow: hidden;
    border-radius: 5px;
    & > input {
      padding: 10px;
      border: none;
      width: 100%;
      outline: none;
      color: #4d4d4d;
    }
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border-right-radius: 5px;
      background-color: #f5f5f5;
      cursor: pointer;
      &:hover {
        background-color: #e6e6e6;
      }
      & > svg {
        width: 20px;
        height: 20px;
        stroke: #666666;
      }
    }
  }
  & > p {
    font-size: 0.8rem;
    font-weight: 400;
    color: #ff0000;
  }
`;

export const AggrementContainer = styled.label`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  & > input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  & > p {
    font-size: 0.9rem;
    font-weight: 400;
    color: #4d4d4d;
  }
  & > a {
    color: #1570ef;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
