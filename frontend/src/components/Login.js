import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Box, Typography, Link, Alert } from '@mui/material';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Login Failed';
            if (errorMessage.toLowerCase().includes('wrong password')) {
                setError('Hey User, you entered the wrong password.');
            } else if (errorMessage.toLowerCase().includes('user not found')) {
                setError('User does not exist.');
            } else {
                setError('Login Failed');
            }
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
            >
                <Typography variant="h4" gutterBottom>Login</Typography>
                <Box component="form" onSubmit={handleSubmit} width="100%">
                    <TextField
                        label="Email"
                        name="email"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>

                    {/* Error Message */}
                    {error && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            {error}
                        </Alert>
                    )}
                </Box>

                <Box mt={2}>
                    <Typography>
                        Don't have an account?{' '}
                        <Link href="/register" underline="hover">
                            Register here
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
