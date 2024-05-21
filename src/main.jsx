// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import GeneralJournal from "./pages/GeneralJournal";
import GeneralLedger from "./pages/GeneralLedger";
import MonthlyIncomeStatement from "./pages/IncomeStatement";
import InventoryStockCard from "./pages/Inventory";
import PurchasingOrder from "./pages/PurchaseOrder";
import Invoice from "./pages/Invoice";
import Finance from "./pages/finance";
import Performance from "./pages/performance_real";
import "./index.css";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/operation",
    element: <App />,
  },
  {
    path: "/management",
    element: <App />,
  },
  {
    path: "/finance",
    element: <Finance />,
  },
  {
    path: "/dashboard",
    element: <Performance />,
  },
  {
    path: "/finance/general-journal",
    element: <GeneralJournal />,
  },
  {
    path: "/finance/general-ledger",
    element: <GeneralLedger />,
  },
  {
    path: "/finance/monthly-income-statement",
    element: <MonthlyIncomeStatement />,
  },
  {
    path: "/finance/inventory-stock-card",
    element: <InventoryStockCard />,
  },
  {
    path: "/finance/purchasing-order",
    element: <PurchasingOrder />,
  },
  {
    path: "/finance/invoice",
    element: <Invoice />,
  },
  // Add other routes here
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
