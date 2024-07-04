declare const DataTable: <T extends object>(props: DataTableProps<T>) => import("react/jsx-runtime").JSX.Element;
export interface DataTableProps<T extends object> {
    data: T[];
    columns: DataTableColumn<T>[];
    settings?: DataTableSettings;
}
export interface DataTableColumn<T> {
    label: string;
    accessor: keyof T;
    selector?: (row: T) => JSX.Element;
    sort?: boolean;
}
export interface DataTableSettings {
    pageSize?: number;
    currentPage?: number;
    search?: boolean;
    defaultSearchQuery?: string;
    pagination?: boolean;
    itemsPerPage?: number;
}
export default DataTable;
