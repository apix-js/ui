import { MutableRefObject } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react';

declare const useClickOutside: <T>(cb: (event: Event) => void) => MutableRefObject<T | null>;
export default useClickOutside;
