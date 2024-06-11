import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ maxWidth: 400, textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Welcome to Your Dashboard
          </Typography>
          <Typography color="textSecondary">
            This is your personal dashboard.
          </Typography>
          <Typography variant="body2" component="p">
            You can manage your account settings, view your activity, and much more here.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" component="p">
            Go to Settings
          </Typography>
          <Typography variant="body2" component="p">
            View Activity
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
