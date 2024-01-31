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
import SignInForm from "./components/SingInForm";

const StyledImage = styled(Image)`
  height: 48px;
  width: 128px;
`;
const SignIn = () => {
  return (
    <SignUpWrapper>
      {/* signIn container start here */}
      <Container>
        {/* header section */}
        <HeaderSection>
          <StyledImage
            src="/assets/logo.png"
            alt="logo"
            width={200}
            height={200}
          />
          <button>Sign Up</button>
        </HeaderSection>

        {/* content section  */}

        <FormSection>
          {/* form header  */}
          <InputFromHeader
            title="Welcome Back"
            subtitle="Lorem ipsum dolor sit amet consectetur. Posuere sed proin ipsum tempus massa tortor consectetur."
          />
          {/* form  */}
          <SignInForm />
        </FormSection>
      </Container>
    </SignUpWrapper>
  );
};

export default SignIn;
