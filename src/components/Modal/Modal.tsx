import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import useClickOutside from '../../hooks/useClickOutside';
import { AnimatePresence, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { Icon } from '../../main';

import styles from './Modal.module.scss';

const variants: Record<string, Variants> = {
    default: {
        initial: { scale: 1.2, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 1.2, opacity: 0 }
    },
    topLeft: {
        initial: { opacity: 0, x: -50, y: -50 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -50, y: -50 }
    },
    topCenter: {
        initial: { opacity: 0, x: 0, y: -50 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -50 }
    },
    topRight: {
        initial: { opacity: 0, x: 50, y: -50 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 50, y: -50 }
    },
    bottomLeft: {
        initial: { opacity: 0, x: -50, y: 50 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -50, y: 50 }
    },
    bottomCenter: {
        initial: { opacity: 0, x: 0, y: 50 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 50 }
    },
    bottomRight: {
        initial: { opacity: 0, x: 50, y: 50 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 50, y: 50 }
    },
    leftCenter: {
        initial: { opacity: 0, x: -50, y: 0 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -50, y: 0 }
    },
    rightCenter: {
        initial: { opacity: 0, x: 50, y: 0 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 50, y: 0 }
    }
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, position = 'default' }) => {
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        let elm = document.getElementById('apix-modal-root');
        if (!elm) {
            elm = document.createElement('div');
            elm.id = 'apix-modal-root';
            document.body.appendChild(elm);
        }

        setModalRoot(elm);
    }, []);

    const handleClose = () => {
        onClose && onClose();
    };

    const overlayClasses = useMemo(() => {
        return [styles.modalOverlay, styles[position]].join(' ');
    }, [position]);

    // const modalRef = useClickOutside<HTMLDivElement>(handleClose);

    const modalContent = (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    className={overlayClasses}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <motion.div
                        // ref={modalRef}
                        className={styles.modalContent}
                        variants={variants[position]}
                        initial="initial"
                        animate="animate"
                        exit="exit">
                        <button onClick={handleClose} className={styles.closeButton}>
                            <Icon.IO4.IoIosClose />
                        </button>

                        <h2 className={styles.modalTitle}>{title}</h2>

                        <div className={styles.modalBody}>{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return modalRoot ? ReactDOM.createPortal(modalContent, modalRoot) : null;
};

interface ModalProps {
    isOpen?: boolean;
    title?: string;
    onClose?: () => void;
    children?: React.ReactNode;
    position?:
        | 'topLeft'
        | 'topCenter'
        | 'topRight'
        | 'bottomLeft'
        | 'bottomCenter'
        | 'bottomRight'
        | 'leftCenter'
        | 'rightCenter';
}

export default Modal;
