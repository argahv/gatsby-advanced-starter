import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import { Wrapper } from "./styles";
import { Header } from "../theme";

export default function MainLayout({ children }) {
  return (
    <Wrapper id="layout">
      <Header />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {children}
    </Wrapper>
  );
}
