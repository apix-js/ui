import React from 'react';
import usePagination, { DOTS } from '../../hooks/usePagination';
import { Icon } from '../../main';

import styles from './Pagination.module.scss'

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
    const { totalCount, itemsPerPage, currentPage, handlePageChange, handleItemsPerPage } = props;

    const pagination = usePagination({
        totalCount: totalCount,
        itemsPerPage: itemsPerPage,
        siblingCount: 1,
        currentPage: currentPage
    })

    return (
        <div className={styles.paginationContainer}>
            <select value={itemsPerPage} onChange={(e) => handleItemsPerPage(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>

            <div className={styles.paginationItems}>

                <div
                    className={[
                        styles.paginateItem,
                        styles.arrowLeft,
                        currentPage === 1 ? styles.disabled : ''
                    ].join(' ')}
                    onClick={() => handlePageChange(1)}
                >
                    <Icon.CG.CgPushChevronLeft />
                </div>

                <div
                    className={[
                        styles.paginateItem,
                        styles.arrowLeft,
                        currentPage === 1 ? styles.disabled : ''
                    ].join(' ')}
                    onClick={() => handlePageChange(page => page - 1)}
                >
                    <Icon.CG.CgChevronLeft />
                </div>

                <div className={styles.paginateNumbers}>
                    {pagination.paginationRange?.map((page, i) => {
                        if (page === DOTS) return <span className={styles.dots} key={i}>&#8230;</span>

                        return (
                            <span
                                key={i}
                                className={currentPage === page ? styles.currentPage : ''}
                                onClick={() => handlePageChange(page as number)}>
                                {page}
                            </span>
                        )
                    })}
                </div>

                <div
                    className={[
                        styles.paginateItem,
                        styles.arrowLeft,
                        currentPage === pagination.lastPage ? styles.disabled : ''
                    ].join(' ')}
                    onClick={() => handlePageChange(page => page + 1)}
                >
                    <Icon.CG.CgChevronRight />
                </div>

                <div
                    className={[
                        styles.paginateItem,
                        styles.arrowLeft,
                        currentPage === pagination.lastPage ? styles.disabled : ''
                    ].join(' ')}
                    onClick={() => handlePageChange(pagination.lastPage)}
                >
                    <Icon.CG.CgPushChevronRight />
                </div>

            </div>

        </div>
    )
}

interface PaginationProps {
    totalCount: number;
    itemsPerPage: number;
    currentPage: number;
    handlePageChange: React.Dispatch<React.SetStateAction<number>>;
    handleItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

Pagination.displayName = 'Pagination'

export default Pagination;