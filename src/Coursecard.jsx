import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const courses = [
  {
    title: 'React for Beginners',
    description: 'An introductory course to React',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Advanced React Patterns',
    description: 'Learn advanced patterns and techniques in React',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'JavaScript Essentials',
    description: 'Master the fundamentals of JavaScript',
    image: 'https://via.placeholder.com/150',
  },
];

export default function CourseCard() {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={course.image}
              title={course.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {course.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
