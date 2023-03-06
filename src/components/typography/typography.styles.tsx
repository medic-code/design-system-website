import styled from "styled-components";
import {
  fontSizes,
  gray,
  fontWeights,
  letterSpacing,
  lineHeight,
  primaryFont
} from "../../lib";
import { applyStyleModifiers } from "styled-components-modifiers";
import { IProps } from "./Typography.types";

const HEADING = `letter-spacing: 0px;
                 line-height: 1.6818;
                margin-bottom: 1.45rem;`

const TEXT_MODIFIERS = {
  heading1: () => `
        font-weight: ${fontWeights["bold"]};
        ${HEADING}
    `,
  heading2: () => `
    font-weight: ${fontWeights["semibold"]};
    ${HEADING}
    `,
  heading3: () => `
    font-weight: ${fontWeights["400"]};
    ${HEADING}`,
  heading4: () => `
    font-weight: ${fontWeights["normal"]};
    ${HEADING}`
}

const StyledText = styled.p<IProps>`
  margin: 0 0 2.25rem 0;
  padding: 0;
  line-height: 1.5;
  font-size: ${(props) => (props.size ? props.size : fontSizes["paragraph"])};
  font-family: ${primaryFont};
  font-weight: ${(props) =>props.fontWeight ? props.fontWeight : fontWeights["normal"]};
  color: ${(props) => (props.color ? props.color : gray[800])};
  ${applyStyleModifiers(TEXT_MODIFIERS)}
`;

export default StyledText;
