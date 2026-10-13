import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Medicines from "./Components/Medicines/Medicines";
import MedicalDevices from "./Components/MedicalDevices/MedicalDevices";
import DailyNeeds from "./Components/DailyNeeds/DailyNeeds";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/medicine" element={<Medicines />} />
        <Route path="/devices" element={<MedicalDevices />} />
        <Route path="/daily" element={<DailyNeeds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;