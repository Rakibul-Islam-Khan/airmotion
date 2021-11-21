import axios from 'axios';
import React, {useState} from 'react';
import { useForm } from "react-hook-form";
const Admin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [email, setEmail] = useState('');
    const handleOnBluer = (e) =>{
        setEmail(e.target.value);
    }
    const handleMakeAdmin = (data) =>{
        axios.put('https://safe-harbor-94419.herokuapp.com/users/admin', data)
        .then(res => console.log(res.data));
        reset();
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <form onSubmit={handleSubmit(handleMakeAdmin)} className="col-md-4 my-5 border p-3">
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" {...register("fullName")} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={handleOnBluer} type="email" {...register("email")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Make Admin</button>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </>
    );
};

export default Admin;