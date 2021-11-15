import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {

        fetch(`https://desolate-everglades-53493.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())

            .then(data => setMyOrders(data));
    }, [])
    return (
        <div>
            <h2>My Orders</h2>
            {
                myOrders.map(myOrder => <MyOrder
                    key={myOrder._id}
                    myOrder={myOrder}

                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;