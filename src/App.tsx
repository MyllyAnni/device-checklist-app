import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddDevicePage from "./pages/AddDevicePage";
import DevicePage from "./pages/DevicePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/add-device"
          element={<AddDevicePage />}
        />

        <Route
          path="/device"
          element={<DevicePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;