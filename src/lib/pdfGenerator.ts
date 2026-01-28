'use client'

export const generateOffortePDF = async (offerteContent: string, filename: string = 'offerte.pdf'): Promise<Blob> => {
  // Only run in browser environment
  if (typeof window === 'undefined') {
    throw new Error('PDF generation only works in browser')
  }

  // Dynamically import html2pdf only in browser
  const html2pdf = (await import('html2pdf.js')).default

  return new Promise((resolve, reject) => {
    const element = document.createElement('div')
    element.innerHTML = offerteContent

    const options = {
      margin: [5, 5, 5, 5] as [number, number, number, number],
      filename: filename,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: {
        scale: 1.2,
        useCORS: true,
        backgroundColor: '#ffffff',
        allowTaint: true
      },
      jsPDF: {
        orientation: 'portrait' as const,
        unit: 'mm' as const,
        format: 'a4',
        compress: true
      },
      pagebreak: {
        mode: ['css', 'avoid-all'] as any,
        before: '.page-break'
      }
    }

    html2pdf()
      .set(options)
      .from(element)
      .outputPdf('blob')
      .then((pdf: Blob) => {
        resolve(pdf)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}

export const removeLastPageFromPDF = async (pdfBlob: Blob): Promise<Blob> => {
  try {
    // Only run in browser environment
    if (typeof window === 'undefined') {
      return pdfBlob
    }

    const { PDFDocument } = await import('pdf-lib')

    const arrayBuffer = await pdfBlob.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)

    // Remove last page if there are multiple pages
    if (pdfDoc.getPageCount() > 1) {
      pdfDoc.removePage(pdfDoc.getPageCount() - 1)
    }

    const modifiedPdfBytes = await pdfDoc.save()
    return new Blob([new Uint8Array(modifiedPdfBytes)], { type: 'application/pdf' })
  } catch (error) {
    console.warn('Could not remove last page from PDF, returning original:', error)
    return pdfBlob
  }
}

export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64 = reader.result as string
      // Remove data:application/pdf;base64, prefix
      resolve(base64.split(',')[1])
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}
