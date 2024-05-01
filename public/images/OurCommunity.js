import React, { useState } from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import DandianightImage from '../images/dandianight.jpeg';
import facultiesImage from '../images/faculties.jpeg';
import independceImage from '../images/independence daycelebration.jpeg';
import studImages from '../images/studentsandteachersgrouppics.jpeg';
import testImages from '../images/test.jpeg';

// Import keyframes and styled from styled-components
import { keyframes, styled } from 'styled-components';

// Define the fadeIn animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Define a styled component for the animated heading
const AnimatedHeading = styled.span`
  font-weight: bold;
  color: #007bff;
  animation: ${fadeIn} 1s ease-in-out;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const SliderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

const SliderContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 4px;
`;

const SliderNavigation = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

function OurCommunity() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { image: DandianightImage, title: 'Dandi Night Celebration', description: 'A night filled with joy, learning, and community spirit.' },
    { image: facultiesImage, title: 'Our Faculty', description: 'Meet our dedicated faculty, including IIT graduates and PhD holders, committed to your success.' },
    { image: independceImage, title: 'Independence Day Celebration', description: "Celebrating our nation's spirit of independence and unity." },
    { image: studImages, title: 'Students and Teachers Group', description: 'A snapshot of our vibrant community, where learning and friendship go hand in hand.' },
    { image: testImages, title: 'Testimonials', description: 'Hear from our students and parents about their experiences with Genix Academy.' },
  ];

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our <AnimatedHeading>Community</AnimatedHeading>
        </Typography>
        <Typography variant="body1" gutterBottom align="center" sx={{ maxWidth: '80%', textAlign: 'center' }}>
          At Genix Academy, we believe in the power of education and the potential of every student. Our community is a vibrant blend of talented teachers and dedicated students, all working together to achieve excellence. We are proud to have a team that includes IIT graduates and PhD holders, providing personalized teaching that is both safe and convenient.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, mt: 4, maxWidth: '800px' }}>
          <SliderContainer>
            {images.map((image, index) => (
              <SliderImage key={index} src={image.image} alt={image.title} active={index === activeIndex} />
            ))}
            <SliderContent>
              <Typography variant="h6" component="h2" gutterBottom>
                {images[activeIndex].title}
              </Typography>
              <Typography variant="body2">{images[activeIndex].description}</Typography>
            </SliderContent>
            <SliderNavigation>
              <IconButton onClick={handlePrev}>
                <ArrowBackIos />
              </IconButton>
              <IconButton onClick={handleNext}>
                <ArrowForwardIos />
              </IconButton>
            </SliderNavigation>
          </SliderContainer>
        </Box>
      </Container>
    </Box>
   
  );
 
}

export default OurCommunity;