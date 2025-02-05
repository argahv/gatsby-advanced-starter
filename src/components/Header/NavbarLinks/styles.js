import styled from "styled-components";
import colors from "theme/colors.json";

export const Wrapper = styled.div`
  a {
    color: ${({ theme }) => colors[theme].textColor};
    text-decoration: none;

    @media (max-width: 960px) {
      color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
