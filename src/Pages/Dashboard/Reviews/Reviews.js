import { Button, TextField } from '@mui/material';
import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h3>Add A Review</h3>
            <TextField id="standard-basic" label="" variant="standard" /><br /><br /><br />
            <Button variant="contained">Add Review</Button>
        </div>
    );
};

export default Reviews;