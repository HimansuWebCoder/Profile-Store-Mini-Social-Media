import { Routes, Route } from "react-router-dom";
import AppLayout from "./routes/AppLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <Routes>
        {/* Route for the layout */}
        <Route path="/" element={<AppLayout />} />

        {/* Other routes inside AppRoutes */}
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
