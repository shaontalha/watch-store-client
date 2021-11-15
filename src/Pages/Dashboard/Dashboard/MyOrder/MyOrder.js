import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const MyOrder = ({ myOrder }) => {
    const handleDelete = id => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data));
        console.log(id);
        /* if (data.deletedCount) {
            alert('deleted')



        } */


    }
    const { name, price, adress } = myOrder;
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={4} >

                </Grid>
                <Card sx={{ minWidth: 75, mt: 5 }}>
                    <CardContent>

                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Price: BDT {price}
                        </Typography>
                        <Typography variant="body2">
                            {adress}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => handleDelete(myOrder._id)} style={{ marginLeft: "45px" }} variant="contained">Delete</Button>
                    </CardActions>
                </Card>
            </Grid>

        </div>
    );
};

export default MyOrder;