'use client';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

const PdfViewer = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const pdfUrl = process.env.NEXT_PUBLIC_PDF_URL || "";
  return (
    <>
      <div>
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </>
  );
};

export default PdfViewer;
