import { Container, Layout } from "components/common";
import { ThemeContext } from "providers/ThemeProvider";
import React, { useContext } from "react";
import { SiteDetail } from "./styles";
import site from "../../../data/site.json";
import LatestBlogs from "./components/latest-blogs";
import { graphql } from "gatsby";

const Home = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;
  const { theme } = useContext(ThemeContext);
  return (
    <Layout title="Home">
      <SiteDetail theme={theme}>
        <h1>{site.siteTitle}</h1>
        <p>{site.siteDescription}</p>
      </SiteDetail>
      <LatestBlogs postEdges={postEdges} />
    </Layout>
  );
};

export default Home;

export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
