import React from "react";
import { Container } from "components/common";
import { Wrapper, Flex, Links, Details } from "./styles";
import { siteTitle, socialLinks } from "../../../data/SiteConfig";

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{siteTitle}</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()}
          by{" "}
          <a
            href="https://raghavkattel.com.np"
            rel="noopener noreferrer"
            target="_blank"
          >
            Raghav
          </a>
        </span>
      </Details>
      <Links>
        {socialLinks.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
          >
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
