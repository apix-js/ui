export declare const DOTS = "...";
declare const usePagination: (options: PaginationOption) => PaginationProps;
export interface PaginationProps {
    totalCount: number;
    itemsPerPage: number;
    currentPage: number;
    paginationRange: (string | number)[] | undefined;
    lastPage: number;
}
export interface PaginationOption {
    totalCount: number;
    itemsPerPage: number;
    currentPage: number;
    siblingCount: number;
}
export default usePagination;
