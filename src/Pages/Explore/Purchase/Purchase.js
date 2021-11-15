import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        delete data.description;
        delete data.img;

        fetch("https://desolate-everglades-53493.herokuapp.com/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(data)
        reset()
    };
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://desolate-everglades-53493.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                reset(data)
            })
    }, [productId, reset]);

    return (
        <Grid sx={{ mt: 8 }} container spacing={2}>
            <Grid item xs={8}>
                <img style={{ height: "250px", width: "350px" }} src={product?.img} alt="" />
                <h2>Product Name : {product?.name}</h2>
                <h5>Price : BDT {product?.price}</h5>
                <p>{product?.description}</p>

            </Grid>
            <Grid item xs={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name")}
                        type="text"
                        defaultValue={user.displayName}
                        placeholder="User Name"
                        className="p-2 m-2 w-100"

                    />
                    <br />
                    <input
                        {...register("email")}
                        type="email"
                        defaultValue={user.email}
                        placeholder="Email"
                        className="p-2 m-2 w-100"

                    />
                    <br />
                    <input
                        {...register("name")}
                        type="text"
                        defaultValue={product?.name}
                        placeholder="Product Name"
                        className="p-2 m-2 w-100"

                    />
                    <br />
                    <input
                        {...register("price")}
                        type="text"
                        defaultValue={product?.price}
                        placeholder="Price"
                        className="p-2 m-2 w-100"

                    />
                    <br />
                    <input
                        {...register("adress")}
                        type="text"
                        placeholder="Adress"
                        className="p-2 m-2 w-100"

                    />
                    <br />
                    <input
                        {...register("phone")}
                        type="text"
                        placeholder="Phone Number"
                        className="p-2 m-2 w-100"

                    />
                    <br />




                    <input type="submit" value="Order" />
                </form>
            </Grid>
        </Grid>





    );
};

export default Purchase;