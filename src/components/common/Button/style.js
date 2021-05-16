import styled from "styled-components";
import colors from "theme/colors.json";

export const ButtonStyle = styled.button`
  padding: 10px;
  margin: 1px;
  border-radius: 2px;
  border: none;
  /* ${({ type, theme }) =>
    type === "primary"
      ? css`
          background-color: ${colors[theme].primaryColor};
        `
      : css`
          background-color: none;
        `} */
`;
