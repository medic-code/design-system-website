interface UnderlineAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  arrow?: never;
  modifiers?: string[] | "underline";
}

export default UnderlineAnchorProps;
