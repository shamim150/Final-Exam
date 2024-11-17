import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./Layer/RootLayOut";
import Dashboard from "./Components/Dashboard";
import { Expense } from "./Components/Expense";
import Wallets from "./Components/Wallets";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Dashboard />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/wallets" element={<Wallets />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
