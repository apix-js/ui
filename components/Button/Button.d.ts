import { default as React } from '../../../node_modules/react';

declare const Button: React.FC<ButtonProps>;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    effect?: "3D" | "ripple" | "default";
}
export { Button };
