import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('https://safe-harbor-94419.herokuapp.com/reviews', data)
        .then(res => {
            if (res.data.insertedId) {
                reset()
                alert('Review add successfully')
            }
       });
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 my-5">
                        <h1 className='text-center'>Add New Review</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='border mt-5 p-4'>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input {...register("name")} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input {...register("title")} className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea {...register("description")} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image link</label>
                                <input {...register("img")} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Rating</label>
                                <input {...register("rating")} type="text" className="form-control" />
                            </div>
                            <input className='btn btn-primary w-100' type="submit" />
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
};
export default AddReview;