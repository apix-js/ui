import { type Transition, type Variants } from "framer-motion";

const variantsCollection = new Map<IType, IVariantsCollectionItem>()

variantsCollection.set("slideDown", {
    variants: {
        initial: { opacity: 0, rotateX: -15, transformOrigin: "top", y: -10 },
        enter: {
            opacity: 1,
            rotateX: 0,
            transformOrigin: "top",
            y: 0
        },
        exit: { opacity: 0, rotateX: -15, transformOrigin: "top", y: -10 }
    },
    initial: "initial",
    animate: "enter",
    exit: "exit",
})

const useAnim = (type: IType, options?: IOptions) => {

    const variants = variantsCollection.get(type)

    if (!type) throw new Error(`Unknown type ${type as string}`)

    return {
        ...variants,
        transition: options?.transition
    }
}

type IType = "slideDown"

interface IVariantsCollectionItem {
    variants: Variants,
    initial: string,
    animate: string,
    exit: string,
}

interface IOptions {
    transition?: Transition,
    variants?: Variants
}

export default useAnim;