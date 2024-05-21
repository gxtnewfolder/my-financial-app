import React, { useState } from "react";
import Sidebar from "../component/Sidebar";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState("financial");

  const handleDashboardChange = (event) => {
    setDashboard(event.target.value);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">INC372 - Financial Report</h1>
        <select
          value={dashboard}
          onChange={handleDashboardChange}
          className="border rounded-md p-2 mr-2 flex-grow"
        >
          <option value="financial">Financial Dashboard</option>
          <option value="performance">Performance Dashboard</option>
        </select>
        {dashboard === "financial" ? (
          <div className="w-full h-4/5 mt-8 border-4 border-gray-400 rounded-lg overflow-hidden">
            <iframe
              title="Financial-dashboard"
              className="w-full h-full"
              src="https://app.powerbi.com/view?r=eyJrIjoiZGVjZjBiNjctZDZjNS00OGYzLTgyNDctYWIxMmI2MTYzMDNjIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
              frameBorder="0"
              allowFullScreen="true"
            ></iframe>
          </div>
        ) : (
          <div className="w-full h-4/5 mt-8 border-4 border-gray-400 rounded-lg overflow-hidden">
            {/* Add your performance dashboard component here */}
            <iframe
              title="Performance-dashboard"
              className="w-full h-full"
              src="https://app.powerbi.com/view?r=eyJrIjoiYzY3NGQ4NzgtZWI0My00ODY4LThiYzQtZDM0MDAxZTBlNmRkIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D&pageName=ReportSectione5de5acad7ec2e395b86"
              frameBorder="0"
              allowFullScreen="true"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
