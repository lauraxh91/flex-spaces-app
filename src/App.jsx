// src/App.jsx

import "./index.css";
import "./layout.css";
import "./media.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // your main landing
import WorkspacesPage from "./components/Workspaces"; // new workspaces page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Add the /test route */}
        <Route path="/workspaces" element={<WorkspacesPage />} />
      </Routes>
    </Router>
  );
}
export default App;
