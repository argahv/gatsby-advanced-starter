import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import { Layout } from "./styles";

export default function MainLayout({ children }) {
  return (
    <Layout>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {children}
    </Layout>
  );
}
