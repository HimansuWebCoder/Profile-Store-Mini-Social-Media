import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AppLayout from "./routes/app-layout-route/AppLayout";
import AdminLayout from "./routes/admin-route/AdminLayout";

function App() {
  const [mode, setMode] = useState("white");

  return (
    <div
      style={{
        backgroundColor: mode,
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route
          path="/*"
          element={<AppLayout mode={mode} setMode={setMode} />}
        />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </div>
  );
}

export default App;
