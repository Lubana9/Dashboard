import Dashboard from "@pages/Dashboard/Dashboard";
import Finalize from "@pages/Finalize/Finalize";
import Result from "@pages/Results/Result";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Results" element={<Result />} />
        <Route path="Finalize" element={<Finalize />} />
        <Route path="" element={<Navigate to="/Dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
