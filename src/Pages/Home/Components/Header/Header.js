import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Header = () => {
    const { users, logOut } = useAuth()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src='https://i.ibb.co/C9HNdpm/airmotion.png' height="25" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {
                                !users.email ? <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="/explore">
                                            Explore
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                </> :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">About</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link" to="/explore">
                                                Explore
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                        </li>
                                    </>
                            }
                        </ul>
                        <div className="d-flex">
                            {
                                !users.email ? <>
                                    <Link to="/login">
                                        <button className="btn btn-outline-success" type="submit">Login</button>
                                    </Link>
                                </> :
                                    <>
                                        <button onClick={logOut} className="btn btn-outline-success" type="submit">Logout</button>
                                        <>
                                            <li className="nav-item dropdown">
                                                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img style={{ borderRadius: "50%", marginLeft: "20px", border: "3px solid white" }} src={users?.photoURL ? users.photoURL : 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255534-stock-illustration-headshot-male-default-profile-gray.jpg'} height="40" />
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <h5 className='text-center'>Profile</h5>
                                                    <li><a className="dropdown-item" href="#"><i className="bi bi-person-circle"></i> {users?.displayName ? users.displayName : users?.email?.slice(0, 8)}</a></li>
                                                    <li><Link to="/dashboard" className="dropdown-item" href="#"><i className="bi bi-gear-wide-connected"></i> Dashboard</Link></li>
                                                    <li><a className="dropdown-item" href="#"><i className="bi bi-cart-fill"></i> Cart</a></li>
                                                </ul>
                                            </li>
                                        </>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;