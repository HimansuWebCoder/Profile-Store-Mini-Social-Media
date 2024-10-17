import { Routes, Route } from "react-router-dom";
import AppLayout from "./routes/AppLayout";
import AdminLayout from "./routes/AdminLayout";

function App() {
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/*" element={<AdminLayout />} />
      </Routes>
    </div>
  );
}

export default App;
