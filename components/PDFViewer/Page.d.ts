import { default as React } from '../../../node_modules/react';
import { PDFDocumentProxy } from 'pdfjs-dist';

declare const Page: React.FC<PageProps>;
interface PageProps extends Omit<React.CanvasHTMLAttributes<HTMLCanvasElement>, any> {
    doc: PDFDocumentProxy;
    page: number;
}
export default Page;
