import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { Button, Layout } from "../components/common";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./listing.css";

function Listing({ pageContext, data }) {
  function renderPaging() {
    const { currentPageNum, pageCount } = pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <div className="paging-container">
        {!isFirstPage && (
          <Link to={prevPage}>
            {" "}
            <Button type="primary">Previous</Button>
          </Link>
        )}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/" : `/${pageNum}/`}
            >
              <Button
                type={pageNum === currentPageNum ? "primary" : "secondary"}
              >
                {pageNum}
              </Button>
            </Link>
          );
        })}
        {!isLastPage && (
          <Link to={nextPage}>
            <Button type="primary">Next</Button>
          </Link>
        )}
      </div>
    );
  }

  const postEdges = data.allMarkdownRemark.edges;

  return (
    <>
      <PostListing postEdges={postEdges} />
      {renderPaging()}
    </>
  );
}

export default Listing;

/* eslint no-undef: "off" */
// export const listingQuery = graphql`
//   query ListingQuery($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//             date
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             cover
//             date
//           }
//         }
//       }
//     }
//   }
// `;
