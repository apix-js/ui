import { MutableRefObject } from '../../node_modules/react';

declare const useClickOutside: <T>(cb: (event: Event) => void) => MutableRefObject<T | null>;
export default useClickOutside;
