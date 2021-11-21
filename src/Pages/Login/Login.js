import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Components/Footer/Footer';
import Header from '../Home/Components/Header/Header';

const Login = () => {
    const { signInWithGoogle, setUsers, loginUser, setIsLoading } = useAuth();
    const { register, handleSubmit } = useForm();
    const history = useHistory()
    const location = useLocation()  
    const onSubmit = data => {
        loginUser(data.email, data.password, location, history);
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
                    <div className="col-md-4 my-5">
                        <form onSubmit={handleSubmit(onSubmit)} className='mb-3'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input {...register("email")} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input {...register("password")} type="password" className="form-control" id="exampleInputPassword1" required />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                            <button onClick={handleGoogleLogin} type="submit" className="btn btn-light border w-100 my-2"><img src="https://i.ibb.co/ZMg1vmK/icons8-google-48.png" height='25' alt="" /> Login with google</button>
                            <p className='text-center m-0'>Don't have an account? <Link to="/signup" className='nav-link d-inline-block p-0 my-3'>Sign Up</Link></p>
                            <a className='text-center nav-link p-0'>Forget password?</a>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;