import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // For linking to invoice details

function Invoice() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/invoices");
        const data = await response.json();
        setInvoices(data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
        // Handle the error (e.g., show error message)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Invoices</h2>

      {/* Invoice Table */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Invoice Number
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Amount
            </th>
            {/* Add more headers as needed (e.g., Status) */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/invoices/${invoice.id}`}>
                  {invoice.invoiceNumber}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {invoice.customerName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{invoice.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {invoice.totalAmount}
              </td>
              {/* Display other invoice details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;
