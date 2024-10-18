import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AppLayout from "./routes/AppLayout";
import AdminLayout from "./routes/AdminLayout";

function App() {
  const [mode, setMode] = useState("white");

  return (
    <div
      style={{
        backgroundColor: mode,
        width: "100%",
        height: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<AppLayout mode={mode} setMode={setMode} />} />
        <Route path="/*" element={<AdminLayout />} />
      </Routes>
    </div>
  );
}

export default App;
