import { ThemeContext } from "providers/ThemeProvider";
import React, { useContext } from "react";
import { TocStyle } from "./style";

const Toc = ({ post }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TocStyle theme={theme}>
      {/* <h3>Table of Contents</h3> */}
      <nav>
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </nav>
    </TocStyle>
  );
};

export default Toc;
