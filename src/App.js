// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Adjust the path as necessary
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import OurCommunity from './components/OurCommunity'; // Import the OurCommunity component
import { AuthProvider } from './AuthContext'; // Adjust the import path as necessary

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider> {/* Wrap the AuthProvider around your routes */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/our-community" element={<OurCommunity />} /> {/* Add the OurCommunity route */}
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
