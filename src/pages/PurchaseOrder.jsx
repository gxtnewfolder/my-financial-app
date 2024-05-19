import React, { useState, useEffect } from "react";

function PurchaseOrder() {
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [filteredPOs, setFilteredPOs] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({
    poNumber: "",
    vendor: "",
    startDate: "",
    endDate: "",
    status: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/purchase-orders");
        const data = await response.json();
        setPurchaseOrders(data);
        setFilteredPOs(data); // Initially, show all POs
      } catch (error) {
        console.error("Error fetching purchase orders:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = purchaseOrders.filter((po) => {
      const poNumberMatch = po.poNumber
        .toLowerCase()
        .includes(filterCriteria.poNumber.toLowerCase());
      const vendorMatch = po.vendor
        .toLowerCase()
        .includes(filterCriteria.vendor.toLowerCase());
      const dateMatch =
        (!filterCriteria.startDate ||
          new Date(po.date) >= new Date(filterCriteria.startDate)) &&
        (!filterCriteria.endDate ||
          new Date(po.date) <= new Date(filterCriteria.endDate));
      const statusMatch =
        !filterCriteria.status || po.status === filterCriteria.status;
      return poNumberMatch && vendorMatch && dateMatch && statusMatch;
    });
    setFilteredPOs(filtered);
  }, [filterCriteria, purchaseOrders]);

  const handleFilterChange = (field, value) => {
    setFilterCriteria({ ...filterCriteria, [field]: value });
  };

  // ... (rest of the component code)

  return (
    <div className="container mx-auto p-4">
      {/* ... (heading, Create PO button) */}

      {/* Filter Form */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="PO Number"
          value={filterCriteria.poNumber}
          onChange={(e) => handleFilterChange("poNumber", e.target.value)}
          className="border rounded-md p-2 mr-2"
        />
        {/* ... (other filter inputs for vendor, date range, status) */}
      </div>

      {/* Purchase Order Table */}
      <table className="min-w-full divide-y divide-gray-200">
        {/* ... (table headers) */}
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              PO Number
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vendor
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Amount
            </th>
            {/* Add headers for other PO details */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredPOs.map((po) => (
            <tr key={po.id}>
              <td className="px-6 py-4 whitespace-nowrap">{po.poNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{po.vendor}</td>
              <td className="px-6 py-4 whitespace-nowrap">{po.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{po.totalAmount}</td>
              {/* Display other PO details */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* ... (rest of the component code) */}
    </div>
  );
}

export default PurchaseOrder;
