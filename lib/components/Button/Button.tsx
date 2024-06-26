import React, { useMemo } from 'react';

import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = (props) => {

    const { children, effect, onClick, ...rest } = props

    const classes = useMemo(() => {
        const _classes = [styles.button]
        if (effect) _classes.push(styles[`effect_${effect}`])
        if (effect === 'bubbly') _classes.push('bubbly-button')

        return _classes;
    }, [effect])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (effect === 'bubbly') bubblyAnimation(e)
        if (effect === 'ripple') createRipple(e)

        onClick && onClick(e)
    }

    const bubblyAnimation = (e: React.MouseEvent<HTMLButtonElement> | Event) => {
        e.preventDefault

        const target = e.currentTarget as HTMLButtonElement
        // reset animation
        target.classList.remove("animate");

        target.classList.add("animate");

        setTimeout(() => {
            target.classList.remove("animate");
        }, 700);

        const bubblyButtons = document.getElementsByClassName("bubbly-button");

        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < bubblyButtons.length; i++) {
            bubblyButtons[i].addEventListener("click", bubblyAnimation, false);
        }
    }
    
    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget as HTMLButtonElement;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add(styles.ripple);
        const ripple = button.getElementsByClassName(styles.ripple)[0];
        if (ripple) {
            ripple.remove();
        }
        button.appendChild(circle);
    };

    return (
        <button
            {...rest}
            className={classes.join(" ")}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}


Button.displayName = 'Button';
Button.defaultProps = {
    effect: "ripple",
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    effect?: "3D" | "ripple" | "bubbly"
}

export { Button };