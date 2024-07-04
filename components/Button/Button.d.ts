import { default as React } from '../../../node_modules/.pnpm/react@18.2.0/node_modules/react';

declare const Button: React.FC<ButtonProps>;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    effect?: "3D" | "ripple" | "bubbly" | "default";
}
export { Button };
