import React, { useEffect, useState } from 'react';
import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';

const outputScale = window.devicePixelRatio || 1;

const Page: React.FC<PageProps> = (props) => {

    const { doc, page, ...rest } = props;

    const [content, setContent] = useState<PDFPageProxy>()

    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        (async () => {
            const _page = await doc.getPage(page)

            setContent(_page)

        })().catch((error) => console.error(error));
    }, [doc, page])

    useEffect(() => {
        if (!canvasRef.current || !content) return

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return

        const viewport = content.getViewport({ scale: 1.0 });

        canvasRef.current.height = Math.floor(viewport.height * outputScale);
        canvasRef.current.width = Math.floor(viewport.width * outputScale);

        const transform: any[] | undefined = outputScale !== 1
            ? [outputScale, 0, 0, outputScale, 0, 0]
            : undefined;

        content.render({
            transform: transform,
            canvasContext: ctx,
            viewport: viewport,
        });

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    }, [content])

    return (
        <>
            <canvas ref={canvasRef} {...rest} />
        </>
    )
}

interface PageProps extends Omit<React.CanvasHTMLAttributes<HTMLCanvasElement>, any> {
    doc: PDFDocumentProxy,
    page: number
}

export default Page;