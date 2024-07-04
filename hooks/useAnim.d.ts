import { Transition, Variants } from 'framer-motion';

declare const useAnim: (type: IType, options?: IOptions) => {
    transition: Transition | undefined;
    variants?: Variants | undefined;
    initial?: string | undefined;
    animate?: string | undefined;
    exit?: string | undefined;
};
type IType = "slideDown";
interface IOptions {
    transition?: Transition;
    variants?: Variants;
}
export default useAnim;
