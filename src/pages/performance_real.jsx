import React from "react";
import Sidebar from "../component/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">INC372 - Financial Report</h1>
        <div className="w-full h-4/5 mt-8 border-4 border-gray-400 rounded-lg overflow-hidden">
          <iframe
            title="Financial-dashboard"
            class="w-full h-full"
            src="https://app.powerbi.com/view?r=eyJrIjoiYzQ5YTg2OTEtMzNlOS00YzUwLWEyODctNzM2MTViYTE2YWQ2IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D&pageName=ReportSectione4b8a9925ce96f1cefb3"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
