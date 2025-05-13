// src/App.jsx

import './index.css';
import './layout.css';
import './media.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // your main landing
import ContactPage from './ContactPage';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<HomePage />} />  {/* Add the /test route */}
        <Route path="/contact-form" element={<ContactPage />} />
    </Routes>
    </Router>
  );
}

export default App;
