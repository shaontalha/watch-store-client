import React from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import {
    NavLink, useHistory
} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()

    const { user, registerUser, authError, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };

        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("password didn't match");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);


    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic" label="Your Name" name="name" onBlur={handleOnBlur} variant="standard" />

                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic" type="email" label="Your Email" name="email" onBlur={handleOnBlur} variant="standard" />

                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic" type='password' name="password" onBlur={handleOnBlur} label="Your Password" variant="standard" />

                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic" type='password' name="password2" onBlur={handleOnBlur} label="Re-Type Your Password" variant="standard" />

                        <Button sx={{ width: "75%", m: 1 }} type='submit' variant='contained'>Register</Button>

                        <NavLink style={{ textDecoration: "none" }} to='/login'><Button variant="text">Already Registered? Please Login</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>


            </Grid>
        </Container>
    );
};

export default Register;