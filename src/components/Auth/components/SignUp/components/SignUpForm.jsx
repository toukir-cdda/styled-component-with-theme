import {
  AggrementContainer,
  DoubleInputContainer,
} from "@/components/Auth/styled-layout/StyledLayout";
import React from "react";
import styled from "styled-components";
import FromInput from "../../FromInput";
const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #1570ef;
  color: white;
  cursor: pointer;
  border: none;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  &:hover {
    background-color: #0f6ecd;
  }
`;
const SignUpForm = () => {
  return (
    <Form>
      <DoubleInputContainer>
        <FromInput label="First name" placeholder="First name" type="text" />
        <FromInput label="Last name" placeholder="Last name" type="text" />
      </DoubleInputContainer>
      <FromInput label="Email" placeholder="hi@example.com" type="email" />
      <FromInput
        label="Password"
        placeholder="Enter password"
        type="password"
        icon={
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.41998 12 8.41998C13.98 8.41998 15.58 10.02 15.58 12Z"
                stroke="#666666"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                stroke="#666666"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        }
      />
      <FromInput
        label="Confirm Password"
        placeholder="Enter password"
        type="password"
        error={"Password does not match"}
        icon={
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.41998 12 8.41998C13.98 8.41998 15.58 10.02 15.58 12Z"
                stroke="#666666"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                stroke="#666666"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        }
      />
      <AggrementContainer>
        <input type="checkbox" />
        <p>
          By signing up, I agree to CDDA&rsquo; s <a href="#">Terms</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>
      </AggrementContainer>
      <Button>Get Started</Button>
    </Form>
  );
};

export default SignUpForm;
