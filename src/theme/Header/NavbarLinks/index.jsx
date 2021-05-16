import { Link } from "gatsby";
import React, { useContext } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "../../../providers/ThemeProvider";
import ToggleTheme from "../../Header/ToggleTheme";
import { Wrapper } from "./styles";

const links = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      {/* <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink> */}
      {links.map(({ title, link }) => (
        <Link to={link}>{title}</Link>
      ))}
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
