"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import styled from "styled-components";
// import ThemeProvider from "@/theme/ThemeProvider";
const ThemeProvider = dynamic(() => import("@/theme/ThemeProvider"), {
  ssr: false,
  loading: () => <Loading />,
});

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme?.primary?.background};
`;
const PagesLayout = styled.div`
  height: calc(100vh - 50px);
  overflow-y: auto;
`;

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Container>
          <Navigation />
          <Sidebar />
          <PagesLayout>{children}</PagesLayout>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}
