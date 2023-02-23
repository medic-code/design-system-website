export interface StyleProp {
    size: string;
    fontWeight: string;
}

export default interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    modifiers?: string;
}