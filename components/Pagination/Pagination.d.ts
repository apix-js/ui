import { default as React } from '../../../node_modules/.pnpm/react@18.2.0/node_modules/react';

declare const Pagination: React.FC<PaginationProps>;
interface PaginationProps {
    totalCount: number;
    itemsPerPage: number;
    currentPage: number;
    handlePageChange: React.Dispatch<React.SetStateAction<number>>;
    handleItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}
export default Pagination;
