import { default as React } from '../../../node_modules/.pnpm/react@18.2.0/node_modules/react';

declare const PDFViewer: React.FC<PDFViewerProps>;
interface PDFViewerProps extends Record<string, any> {
    pdf: string;
}
export default PDFViewer;
