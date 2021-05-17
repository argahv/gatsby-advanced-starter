import { Link } from "gatsby";
import moment from "moment";
import { ThemeContext } from "providers/ThemeProvider";
import React, { useContext } from "react";
import { CardStyle } from "./style";

export const Card = ({ post }) => {
  const { theme } = useContext(ThemeContext);
  const { path, tags, cover, title, date, excerpt, timeToRead } = post;
  return (
    <CardStyle
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.25 },
      }}
      theme={theme}
    >
      {cover && <img src={cover} alt={title} />}
      <div className="detail-container">
        <h3 className="title">
          <Link to={path}>{title}</Link>
        </h3>
        <h3 className="date">{moment(date).format("MMM Do, YY")}</h3>
      </div>
    </CardStyle>
  );
};
