import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import CollegeImage from '../images/genix.png'; // Import your college image

// Keyframes for animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Styled component for the heading with animation
const AnimatedHeading = styled.span`
  font-weight: bold;
  color: #007BFF;
  animation: ${fadeIn} 1s ease-in-out;
`;

function Home() {
 return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to <AnimatedHeading>Genix academy!</AnimatedHeading>
        </Typography>
        <img src={CollegeImage} alt="Ajeenkya Dy Patil University" style={{ height:'400px', width: '50%', maxWidth: '400px', marginBottom: '40px', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }} /> {/* Add your college image */}
        <Typography variant="body1" gutterBottom align="center">
          Connect with your peers, share your thoughts, and explore the world of Genix academy.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, width: '100%' }}>
          <Button variant="contained" color="primary" component={Link} to="/login" sx={{ mr: 2 }}>
            Login
          </Button>
          <Button variant="outlined" color="primary" component={Link} to="/register" sx={{ ml: 2 }}>
            Register
          </Button>
        </Box>
      </Container>
    </Box>
 );
}

export default Home;
