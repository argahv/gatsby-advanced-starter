import styled from "styled-components";

export const SiteDetail = styled.div`
  min-height: 200px;
  h1 {
    font-weight: bold;
    font-size: 50px;
    margin-top: 7vh;
    font-family: "Anton", sans-serif;
  }
  p {
    font-size: 18px;
    line-height: 1.7;
  }
`;

export const LatestBlogsContainer = styled.div`
  .title-container {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
  .all-link {
  }
`;

export const CallToAction = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px 0;
  .description {
    width: 50%;
    h1 {
      font-size: 48px;
      line-height: 48px;
      margin: 0 0 5px;
      font-family: "Anton", sans-serif;
      font-weight: 900;
    }
    p {
      font-size: 20px;
      line-height: 1.4;
      margin-bottom: 30px;
    }
  }

  .featured-image {
    border-radius: 12px;
    width: 50%;
  }
  @media (max-width: 576px) {
    padding: 30px 0;
    .description {
      font-size: 38px;
    }
    .tagline {
      margin-top: 3px;
    }
  }
`;
