import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import swal from 'sweetalert';


const Order = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://safe-harbor-94419.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?');
        if (proceed) {
            axios.delete(`https://safe-harbor-94419.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        setOrders(orders.filter(order => order._id !== id))
                        swal({
                            title: "Order Delete!",
                            text: "You clicked the button!",
                            icon: "success",
                            button: "Ok",
                          });
                    }
                })
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                <h1 className='text-center mt-5 mb-4'>My Order</h1>
                <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <table class="table table-striped table-bordered text-center">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   orders.map((order, index) =>  <tr key={order._id}>
                                    <th scope="row">{index}</th>
                                    <td><img src={order.img} height='50' width="50"/></td>
                                    <td>{order.name}</td>
                                    <td>${order.price}</td>
                                    <td><p><Rating key={order._id} name="half-rating-read" value={order?.rating} precision={0.5} readOnly /></p></td>
                                    <td>{order.status}</td>
                                    <td><a title='Delete' onClick={()=> handleDelete(order._id)} className='admin fs-5'><i class="bi bi-trash-fill"></i></a></td>
                                </tr>)
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;