import React, { forwardRef } from "react";

import StyledAnchor from "./Anchor.styles";
import UnderlineAnchorProps from "./Anchor.types";

const Anchor = forwardRef(function Anchor(
  props: UnderlineAnchorProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  const { children, modifiers } = props;

  return (
    <StyledAnchor ref={ref} modifiers={modifiers}>
      {children}
    </StyledAnchor>
  );
});

export default Anchor;
