import { ChangeEvent, useMemo, useState } from "react";
import Pagination from "../Pagination/Pagination";

const DataTable = <T extends object>(props: DataTableProps<T>) => {

    const { data, columns, settings } = props

    const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(settings?.itemsPerPage ?? 10)

    const filteredData = useMemo(() => {
        return data.filter((row) =>
            columns.some((column) =>
                row[column.accessor]
                    ?.toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
        );
    }, [data, columns, searchTerm]);

    const sortedData = useMemo(() => {
        if (!sortColumn) return filteredData;
        return [...filteredData].sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });

    }, [filteredData, sortColumn, sortDirection])

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedData.slice(startIndex, endIndex);
    }, [sortedData, currentPage, itemsPerPage]);

    const handleSort = (column: keyof T, isSortable: boolean) => {
        if (!isSortable) return;

        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    return (
        <div>

            {settings?.search &&
                <input onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} />
            }

            <table>
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th
                                key={column.accessor as string}
                                onClick={() => handleSort(column.accessor, !!column?.sort)}
                                style={{ cursor: 'pointer' }}
                            >
                                {column.label}
                                {sortColumn === column.accessor && (
                                    <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {paginatedData.map((row, index) => (
                        <tr key={index}>
                            {columns.map((column) => (
                                <td key={`${index}-${column.accessor as string}`}>
                                    {column?.selector ? column.selector(row) : String(row[column.accessor])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination
                totalCount={sortedData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                handlePageChange={setCurrentPage}
                handleItemsPerPage={setItemsPerPage}
            />
        </div>
    )
}

export interface DataTableProps<T extends object> {
    data: T[],
    columns: DataTableColumn<T>[],
    settings?: DataTableSettings
}

export interface DataTableColumn<T> {
    label: string,
    accessor: keyof T,
    selector?: (row: T) => JSX.Element,
    sort?: boolean
}

export interface DataTableSettings {
    pageSize?: number,
    currentPage?: number
    search?: boolean,
    defaultSearchQuery?: string,
    pagination?: boolean,
    itemsPerPage?: number
}

export default DataTable;