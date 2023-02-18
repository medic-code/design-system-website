/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import styled from "styled-components";
import { fontWeights } from "../../lib";
import { applyStyleModifiers } from "styled-components-modifiers";

const ANCHOR_MODIFIERS = {
  underline: () => `
        &:hover {
            color: yellow;
            border-bottom: 2px solid;
            border-color: black;
        }
    `,
};

const StyledAnchor = styled.a<{ modifiers?: "underline" | string[] }>`
  lineheight: inherit;
  font-weight: ${fontWeights[300]};
  font-size: 16px;
  color: red;
  transition: border-color 0.3s ease, color 0.3s ease;
  word-break: break-word;
  outline: "none";
  textdecoration: "none";
  ${applyStyleModifiers(ANCHOR_MODIFIERS)}
`;

export default StyledAnchor;
