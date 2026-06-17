import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AddDevicePage from "./pages/AddDevicePage";
import DevicePage from "./pages/DevicePage";
import EditChecklistPage from "./pages/EditChecklistPage";

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

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/edit-checklist"
          element={<EditChecklistPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;