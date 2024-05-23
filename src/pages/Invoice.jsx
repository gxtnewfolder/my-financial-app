import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { fetchPurchaseOrder } from '../component/mockAPI';

function Invoice() {
  const navigate = useNavigate(); // Get the navigation function

  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [filteredPOs, setFilteredPOs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPurchaseOrder();
        setPurchaseOrders(data);
        setFilteredPOs(data); // Initially show all POs
      } catch (error) {
        console.error('Error fetching purchase orders:', error);
        setError(error); // Set the error state
      } finally {
        setIsLoading(false); // Set loading to false
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(purchaseOrders)) { // Check if purchaseOrders is an array
      const filtered = purchaseOrders.filter((po) =>
        po.poNumber.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPOs(filtered);
    }
  }, [searchQuery, purchaseOrders]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleGoBack = () => {
    navigate('/finance'); // Navigate to the home page
  };

  return (
    <div className="container mx-auto p-4">

      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Back
      </button>
      <h2 className="text-2xl font-semibold mb-4">Invoice</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Invoice Number"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border rounded-md p-2 w-full"
        />
      </div>

      {/* Conditional rendering based on loading state and error */}
      {isLoading ? (
        <p>Loading invoices...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : filteredPOs.length > 0 ? (
        // Purchase Orders 
        filteredPOs.map((po) => (
          <div key={po.id} className="bg-white rounded-lg shadow-md p-6 mb-4 ">
            {/* Header Section */}
            <h3 className="text-xl text-center font-semibold mb-4">Invoice</h3>
            <div className="flex justify-between mb-4">
              {/* <div className="mx-6"><img type="image/svg+xml" src="/src/assets/logo.png" alt="Logo" className="mx-auto my-4 w-20" /></div> */}
              {/* Company name and address */} 
              <div>
                <p>TATA COMPATY</p>
                <p>KMUTT Bangmod</p>
              </div>
              <div className="text-right">
                <p>PO No: {po.poNumber}</p>
                <p>Invoice No: {po.invoiceNumber}</p>
                <p>Date: {po.date}</p>
              </div>
            </div>
            {/* Customer Information Section */}
            <div className="mb-4">
              <p>Customer ID: {po.customerId}</p>
              <p>Customer: {po.customerName}</p>
              <p>Tax Payer ID: {po.taxPayerId}</p>
            </div>
            {/* Item Table Section */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-yellow-100 rounded-md text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 bg-yellow-100 rounded-md text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price/Liter</th>
                  <th className="px-6 py-3 bg-yellow-100 rounded-md text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Q'ty (Liter)</th>
                  <th className="px-6 py-3 bg-yellow-100 rounded-md text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {po.items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.pricePerLiter}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No purchase orders found or still loading...</p>
      )}
    </div>
  );
}

export default Invoice;
