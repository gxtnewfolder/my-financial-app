import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function InvoiceDetail() {
  const { invoiceId } = useParams();
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/invoices/${invoiceId}`);
        const data = await response.json();
        setInvoiceData(data);
      } catch (error) {
        console.error('Error fetching invoice details:', error);
      }
    };

    fetchData();
  }, [invoiceId]); 

  if (!invoiceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Invoice Details</h2>

      {/* Display invoice details */}
      <p>Invoice Number: {invoiceData.invoiceNumber}</p>
      <p>Customer: {invoiceData.customerName}</p>
      {/* ... (display other invoice details like items, amounts, etc.) */}
    </div>
  );
}

export default InvoiceDetail;
