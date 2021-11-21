import React, {useState} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Components/Footer/Footer';
import Header from '../Home/Components/Header/Header';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const { signInWithGoogle, createNewUser, setUsers, setIsLoading } = useAuth();
    const history = useHistory()
    const location = useLocation()

    const onSubmit = data => {
        createNewUser(data.email, data.password, data.fullName, history);
    };


    const handleGoogleLogin = () => {
        signInWithGoogle(location, history);
    };
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <form onSubmit={handleSubmit(onSubmit)} className="col-md-4 my-5 border p-4">
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input {...register("fullName")} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input {...register("email")} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input {...register("password")} type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3">
                        <label {...register("retypePassword")} htmlFor="exampleInputPassword1" className="form-label">Retype Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>

                        <input  type="submit" className="btn btn-primary w-100" value="Sign Up"/>
                        <button onClick={handleGoogleLogin} type="submit" className="btn btn-light border w-100 my-2"><img src="https://i.ibb.co/ZMg1vmK/icons8-google-48.png" height='25' alt="" /> Signup with google</button>
                        <p className='text-center m-0'>Already have an account?
                            <Link to="/login" className='nav-link d-inline-block p-0 my-3'> Login
                            </Link>
                        </p>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
            <Footer />
        </div >
    );
};

export default Signup;