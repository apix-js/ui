import React, { useEffect, useMemo, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { AnimatePresence, motion } from 'framer-motion'
import Page from './Page';
import { Button } from '../Button/Button';

pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.2.67/pdf.worker.mjs"

import styles from './PDFViewer.module.scss'
import { Icon } from '../../main';

interface CustomVariants {
    direction: number,
    position: () => "center" | "left" | "right"
}

const PDFViewer: React.FC<PDFViewerProps> = (props) => {

    const { pdf } = props

    const [doc, setDoc] = useState<pdfjsLib.PDFDocumentProxy>()
    const [pages, setPages] = useState<pdfjsLib.PDFPageProxy[]>([]);
    const [[activeIndex, direction], setActiveIndex] = useState<[number, number]>([0, 0])

    const indexInArrayScope = ((activeIndex % pages.length) + pages.length) % pages.length;

    const visibleItems = [...[{ _pageIndex: -1 }, ...pages], ...[{ _pageIndex: -1 }, ...pages]].slice(indexInArrayScope, indexInArrayScope + 3)

    useEffect(() => {
        if (!pdf) return

        const fetchPDFPages = async () => {
            const loadingTask = pdfjsLib.getDocument(pdf);
            const pdfDoc = await loadingTask.promise;

            setDoc(pdfDoc)

            for (let i = 0; i <= pdfDoc.numPages - 1; i++) {

                const page = await pdfDoc.getPage(i + 1);

                setPages(prev => {
                    if (prev.some(p => p._pageIndex === page._pageIndex)) {
                        return prev
                    } else {
                        return [
                            ...prev,
                            page,
                        ]
                    }
                })
            }

        };

        fetchPDFPages().catch((e) => console.log(e));

    }, [pdf]);

    const getClassNames = (_item: pdfjsLib.PDFPageProxy | { _pageIndex: number; }) => {

        const classes = [styles.paginationItem]
        _item._pageIndex > -1 && classes.push(styles.noItem);
        return classes.join(' ')
        // return _item._pageIndex > -1 ? styles.paginationItem : styles.noItem
    }

    const handleClick = (newDirection: number) => {

        if (activeIndex === 0 && newDirection === -1) return
        if (activeIndex > pages.length - 2 && newDirection > 0) return

        setActiveIndex(prev => [prev[0] + newDirection, newDirection])
    }

    const renderPages = useMemo(() => {
        return doc ? <Page key={activeIndex} doc={doc} page={activeIndex + 1} /> : <div>Loading...</div>;
    }, [activeIndex, doc])

    function getZIndex({ position, direction }: CustomVariants) {
        const indexes: { left: number, center: number, right: number } = {
            left: direction > 0 ? 2 : 1,
            center: 3,
            right: direction > 0 ? 1 : 2
        };
        return indexes[position()];
    }

    const variants = {
        enter: ({ direction }: CustomVariants) => {
            return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
        },
        center: ({ position, direction }: CustomVariants) => {
            return {
                scale: position() === "center" ? 1 : 0.7,
                x: 0,
                zIndex: getZIndex({ position, direction }),
                opacity: 1
            };
        },
        exit: ({ direction }: CustomVariants) => {
            return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="initial"
            whileHover={"hover"}
            className={styles.pdfWrapper}
        >
            <div className={styles.pdfContent}>
                {renderPages}
            </div>

            <motion.div
                className={styles.pagination}
                variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: .2 }}
            >

                <Button onClick={handleClick.bind(null, -1)}>
                    <Icon.IO5.IoChevronBack />
                </Button>

                <div className={styles.paginateWrapper}>
                    <AnimatePresence mode='popLayout' initial={false}>
                        {visibleItems.map((_item) => {
                            return (
                                <motion.div
                                    key={_item._pageIndex as string}
                                    className={getClassNames(_item)}
                                    layout
                                    custom={{
                                        direction,
                                        position: () => {
                                            if (_item._pageIndex === visibleItems[0]._pageIndex) {
                                                return 'left'
                                            } else if (_item._pageIndex === visibleItems[1]._pageIndex) {
                                                return "center"
                                            } else {
                                                return "right"
                                            }
                                        }
                                    }}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: .5 }}
                                >
                                    {_item._pageIndex + 1 as string || null}
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                    <div className={styles.centerBox} />
                </div>

                <Button onClick={handleClick.bind(null, 1)}>
                    <Icon.IO5.IoChevronForward />
                </Button>

            </motion.div>

        </motion.div>
    )
}

interface PDFViewerProps extends Record<string, any> {
    pdf: string
}

export default PDFViewer;