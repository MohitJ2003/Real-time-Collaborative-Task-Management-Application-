import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            <div style={{ padding: '30px' }}>
                <Typography variant="h4">Welcome to your Dashboard!</Typography>
            </div>
        </div>
    );
};

export default Dashboard;
