// src/components/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust the import path as necessary

function Login() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();
 const { setCurrentUser } = useAuth(); // Use the useAuth hook to get setCurrentUser

 const handleEmailChange = (event) => {
    setEmail(event.target.value);
 };

 const handlePasswordChange = (event) => {
    setPassword(event.target.value);
 };

 const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

     // Inside your handleLogin function, after setting the currentUser
if (response.ok) {
  const data = await response.json();
  console.log('Login response data:', data);
  setCurrentUser(data);
  // Save the user data to localStorage
  localStorage.setItem('currentUser', JSON.stringify(data));
  navigate('/dashboard');
 } else {
  console.error('Login failed:', response.statusText);
 }
 
    } catch (error) {
      console.error('Error during login:', error);
      // Optionally, show an error message to the user
    }
 };

 return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth margin="normal">
            Login
          </Button>
        </form>
        <Typography variant="body2" align="center">
          Don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </Container>
    </Box>
 );
}

export default Login;
