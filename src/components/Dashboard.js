import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';

function Dashboard() {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/posts/all`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', postTitle);
    formData.append('content', postContent);
    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/posts/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${currentUser?.token}`,
        },
        body: formData,
      });
      if (response.ok) {
        const post = await response.json();
        setPostTitle('');
        setPostContent('');
        setSelectedImage(null);
        fetchPosts();
      } else {
        console.error('Error posting:', response.statusText);
      }
    } catch (error) {
      console.error('Error posting:', error);
    }
  };

  const handleLike = async (postId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/posts/like/${postId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${currentUser?.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: currentUser?.id }),
      });
      if (response.ok) {
        fetchPosts();
      } else {
        console.error('Error liking post:', response.statusText);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleComment = async (postId) => {
    const comment = prompt('Enter your comment:');
    if (comment) {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/posts/comment/${postId}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${currentUser?.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: comment }),
        });
        if (response.ok) {
          fetchPosts();
        } else {
          console.error('Error commenting on post:', response.statusText);
        }
      } catch (error) {
        console.error('Error commenting on post:', error);
      }
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ADPU Feed
        </Typography>
        <form onSubmit={handlePostSubmit} encType="multipart/form-data">
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            type="text"
            value={postTitle}
            onChange={(event) => setPostTitle(event.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Create a post"
            type="text"
            value={postContent}
            onChange={handlePostChange}
            required
          />
          <input type="file" onChange={handleImageChange} />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Post
          </Button>
        </form>
        <Box sx={{ mt: 4 }}>
          {posts.map((post, index) => (
            <Card key={index} sx={{ my: 3 }}>
              <CardContent>
                <Box display="flex" alignItems="center" marginBottom={1}>
                  <Avatar alt={post.user.name} src="/static/images/avatar/1.jpg" />
                  <Typography variant="subtitle1" marginLeft={1}>
                    {post.user.name}
                  </Typography>
                </Box>
                <Typography variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image={`http://localhost:5000/api/posts/images/${post.image}`}
                alt={post.title}
                sx={{ objectFit: 'contain', maxHeight: 500 }}
              />
              <CardActions disableSpacing>
                <IconButton aria-label="like" onClick={() => handleLike(post._id)}>
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="comment" onClick={() => handleComment(post._id)}>
                  <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <SendIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Dashboard;