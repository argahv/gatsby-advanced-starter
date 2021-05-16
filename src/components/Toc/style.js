import styled from "styled-components";
import colors from "theme/colors.json";

export const TocStyle = styled.div`
  nav {
    position: fixed;
    top: 50vh;
    right: 5vw;
    margin-left: 36px;
    max-width: 250px;
    background-color: ${({ theme }) =>
      theme === "light" ? "#e7e6fb" : "#222225"};
    padding: 10px;
  }
  ul {
    border-left: 1px solid ${({ theme }) => colors[theme].primaryColor};
  }

  ul > li {
    list-style-type: none;
    margin-left: 24px;
    font-size: 13px;
  }
  ul > li > a,
  p {
    /* color: ${({ theme }) => colors[theme].primaryColor}; */
    /* text-decoration: none; */
    border-bottom: 0;
    transition: 1s all ease-in-out;
  }

  @media only screen and (max-width: 720px) {
    nav {
      display: none;
    }
  }
`;
