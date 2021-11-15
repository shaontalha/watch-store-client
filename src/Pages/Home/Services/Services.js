import React from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';

const services = [
    {
        name: "Sales",
        description: "Here in our Shop you can find latest models of watches in a reasonale price",
        img: "https://fossil.scene7.com/is/image/FossilPartners/ES2362_main?$sfcc_fos_medium$"
    },
    {
        name: "Repair",
        description: "Here in our Shop you can rapair watches in a reasonale price.we have the best tecnicians",
        img: "https://images.squarespace-cdn.com/content/v1/5ae9fccd9772ae896a430d3d/1526420743570-IYSIXIT1CA9OTBRUUUTP/servicee.jpg"
    },
    {
        name: "Exchange",
        description: "Here in our Shop you can exchange your second hand watches in a reasonale price",
        img: "https://cdn5.vectorstock.com/i/1000x1000/17/54/currency-exchange-concept-vector-2791754.jpg"
    }

]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ mt: 5, color: 'success.main' }} variant="h6" component='div'>
                    Our Services

                </Typography>
                <Typography sx={{ mt: 3, mb: 2 }} variant="h4" component='div'>
                    Services We Provide

                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;