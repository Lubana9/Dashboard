import Dashboard from "@pages/Dashboard/Dashboard";
import Finalize from "@pages/Finalize/Finalize";
import Result from "@pages/Results/Result";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Results/:testId" element={<Result />} />
          <Route path="Finalize/:testId" element={<Finalize />} />
          <Route path="" element={<Navigate to="/Dashboard" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
