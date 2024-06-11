import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Title = () => {
  return (
    <Card variant="outlined" style={{ backgroundColor: '#f0f0f0' }}>
      <CardContent style={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom style={{ fontFamily: 'Verdana, sans-serif', fontWeight: 'bold', fontSize: '2.5rem', color: '#333' }}>
          Course Library
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Title;
