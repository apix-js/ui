import { default as React } from '../../../node_modules/react';

declare const PDFViewer: React.FC<PDFViewerProps>;
export interface PDFViewerProps extends Record<string, any> {
    pdf: string;
}
export { PDFViewer };
