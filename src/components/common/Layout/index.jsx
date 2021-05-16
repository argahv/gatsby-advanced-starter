import React, { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { Footer, Header } from "../../../theme";
import { Container } from "../Container";
import { Global } from "./styles";
import "./fonts.css";

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
