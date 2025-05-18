// src/App.jsx

import './index.css';
import './layout.css';
import './media.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // your main landing

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<HomePage />} />  {/* Add the /test route */}
    </Routes>
    </Router>
  );
}
export default App;
