import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
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
  color: #007BFF;
  animation: ${fadeIn} 1s ease-in-out;
`;

// Define a styled component for the card hover effect
const CardHover = styled(Card)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

function OurCommunity() {
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Community
        </Typography>
        <Typography variant="body1" gutterBottom align="center" sx={{ maxWidth: '80%', textAlign: 'center' }}>
          At Genix Academy, we believe in the power of education and the potential of every student. Our community is a vibrant blend of talented teachers and dedicated students, all working together to achieve excellence. We are proud to have a team that includes IIT graduates and PhD holders, providing personalized teaching that is both safe and convenient.
        </Typography>
        <CardHover sx={{ maxWidth: 500, mt: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={DandianightImage}
              alt="Dandi Night Celebration"
              sx={{ borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Dandi Night Celebration
              </Typography>
              <Typography variant="body2" align="center">
                A night filled with joy, learning, and community spirit. Join us for an unforgettable evening of celebration and camaraderie.
              </Typography>
            </CardContent>
          </CardActionArea>
        </CardHover>
        <CardHover sx={{ maxWidth: 500, mt: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={facultiesImage}
              alt="Faculty Team"
              sx={{ borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Our Faculty
              </Typography>
              <Typography variant="body2" align="center">
                Meet our dedicated faculty, including IIT graduates and PhD holders, committed to your success. Learn from the best and excel in your studies.
              </Typography>
            </CardContent>
          </CardActionArea>
        </CardHover>
        <CardHover sx={{ maxWidth: 500, mt: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={independceImage}
              alt="Independence Day Celebration"
              sx={{ borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Independence Day Celebration
              </Typography>
              <Typography variant="body2" align="center">
                Celebrate the spirit of independence and unity with us. A day to honor our nation's heritage and foster a sense of community.
              </Typography>
            </CardContent>
          </CardActionArea>
        </CardHover>
        <CardHover sx={{ maxWidth: 500, mt: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={studImages}
              alt="Students and Teachers Group"
              sx={{ borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Students and Teachers Group
              </Typography>
              <Typography variant="body2" align="center">
                A snapshot of our vibrant community, where learning and friendship go hand in hand. Witness the synergy between our students and teachers.
              </Typography>
            </CardContent>
          </CardActionArea>
        </CardHover>
        <CardHover sx={{ maxWidth: 500, mt: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={testImages}
              alt="Testimonials"
              sx={{ borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Testimonials
              </Typography>
              <Typography variant="body2" align="center">
                Hear from our students and parents about their experiences with Genix Academy. Their stories will inspire you to join our community.
              </Typography>
            </CardContent>
          </CardActionArea>
        </CardHover>
      </Container>
    </Box>
  );
}

export default OurCommunity;
