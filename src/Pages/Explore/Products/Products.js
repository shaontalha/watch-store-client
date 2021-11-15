import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <Container>
            <h2>Our Products</h2>
            <Grid container spacing={2}>


                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }

            </Grid>








        </Container>
    );
};

export default Products;