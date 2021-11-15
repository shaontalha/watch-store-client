
import { useForm } from "react-hook-form";
import React from 'react';


const AddAproduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addAproduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(data)
    };
    return (
        <div>
            <h2>Add A Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    {...register("name")}
                    type="text"
                    placeholder="Product Name"
                    className="p-2 m-2 w-100"

                />
                <br />
                <input
                    {...register("price")}
                    type="text"
                    placeholder="Price"
                    className="p-2 m-2 w-100"

                />
                <br />
                <input
                    {...register("description")}
                    type="text"
                    placeholder="Description"
                    className="p-2 m-2 w-100"

                />
                <br />
                <input
                    {...register("img")}
                    type="text"
                    placeholder="Image Link"
                    className="p-2 m-2 w-100"

                />
                <br />




                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddAproduct;