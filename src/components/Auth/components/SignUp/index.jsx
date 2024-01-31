import React from "react";
import {
  Container,
  FormSection,
  HeaderSection,
  SignUpWrapper,
} from "../../styled-layout/StyledLayout";
import styled from "styled-components";
import InputFromHeader from "../InputFromHeader";
import Image from "next/image";
import SignUpForm from "./components/SignUpForm";

const StyledImage = styled(Image)`
  height: 48px;
  width: 128px;
`;
const SignUp = () => {
  return (
    <SignUpWrapper>
      {/* signUp  container  start here */}
      <Container>
        {/* header section */}
        <HeaderSection>
          <StyledImage
            src="/assets/logo.png"
            alt="logo"
            width={200}
            height={200}
          />
          <button>Sign In</button>
        </HeaderSection>

        {/* content section  */}

        <FormSection>
          {/* form header  */}
          <InputFromHeader
            title="Get Started Free today"
            subtitle="Test out all the features of Cdaa Free for 14 days. No Credit card required"
          />
          {/* form  */}
          <SignUpForm />
        </FormSection>
      </Container>
    </SignUpWrapper>
  );
};

export default SignUp;
