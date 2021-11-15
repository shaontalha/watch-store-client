import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGooglesignIn = () => {
        signInWithGoogle(location, history)

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic" type="email" label="Your Email" name="email" onBlur={handleOnChange} variant="standard" />
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic" type='password' name="password" onBlur={handleOnChange} label="Your Password" variant="standard" />

                        <Button sx={{ width: "75%", m: 1 }} type='submit' variant='contained'>Login</Button>

                        <NavLink style={{ textDecoration: "none" }} to='/register'><Button variant="text">New User? Please Register</Button></NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Logged In</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>----------------------------------</p>
                    <Button onClick={handleGooglesignIn} variant="contained">Google Sign In</Button>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;