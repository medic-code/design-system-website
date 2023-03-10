export interface StyleProp {
  size: string;
  fontWeight: string;
}

export default interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  modifiers?: string;
  children: React.ReactNode;
  size: string;
  fontWeight: string;
}
