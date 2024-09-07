import { default as React } from '../../../node_modules/react';

declare const Modal: React.FC<ModalProps>;
interface ModalProps {
    isOpen?: boolean;
    title?: string;
    onClose?: () => void;
    children?: React.ReactNode;
    position?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'leftCenter' | 'rightCenter';
}
export default Modal;
