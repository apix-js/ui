import React, { useEffect, useRef } from 'react';
import SimpleBar, { Props } from 'simplebar-react';
import type SimpleBarCore from 'simplebar-core';

import styles from './ScrollBar.module.scss'
import "simplebar-react/dist/simplebar.min.css"

const ScrollBar: React.FC<Props & React.RefAttributes<SimpleBarCore | null>> = (props) => {

    const { children, ...rest } = props;

    const scrollRef = useRef<SimpleBarCore>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;

            const scrollElement = scrollRef.current.getScrollElement();
            if (!scrollElement) return;

            const targetPosition = scrollElement.scrollTop;

            const smoothScroll = () => {
                if (!scrollElement) return;

                const currentPosition = scrollElement.scrollTop;
                const distance = targetPosition - currentPosition;
                const fraction = 0.1; // Adjust for desired scroll speed

                const newPosition = currentPosition + (distance * fraction);

                scrollElement.scrollTop = newPosition;

                // Check if we've reached the target or need another frame
                if (Math.abs(distance) > 1) {
                    requestAnimationFrame(smoothScroll);
                }
            };

            requestAnimationFrame(smoothScroll);
        };

        const scrollElement = scrollRef.current?.getScrollElement();
        scrollElement?.addEventListener('scroll', handleScroll);

        return () => {
            scrollElement?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <SimpleBar ref={scrollRef}  {...rest} className={styles.scrollbar}>
            {children}
        </SimpleBar>
    );
}

export default ScrollBar;