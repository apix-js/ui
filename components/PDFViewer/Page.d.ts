import { PDFDocumentProxy } from 'pdfjs-dist';
import { default as React } from '../../../node_modules/.pnpm/react@18.2.0/node_modules/react';

declare const Page: React.FC<PageProps>;
interface PageProps extends Omit<React.CanvasHTMLAttributes<HTMLCanvasElement>, any> {
    doc: PDFDocumentProxy;
    page: number;
}
export default Page;
