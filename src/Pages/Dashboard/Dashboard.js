import React from 'react';
import { Link } from 'react-router-dom';
import AddReview from '../AddReview/AddReview';
import AddProduct from '../AddProduct/AddProduct';
import Admin from '../Admin/Admin';
import './Dashboard.css'
import useAuth from '../../Hooks/useAuth';
import Pay from '../Pay/Pay';
import Order from '../Order/Order';
import Manage from '../Manage/Manage';
const Dashboard = () => {
    const { admin, logOut, users } = useAuth();
    return (
        <>
            <nav class="navbar navbar-light bg-dark sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><span className='d-flex fs-2 text-light' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <i class="bi bi-list"></i>
                        <Link className="navbar-brand ms-5" to="/"><img src='https://i.ibb.co/C9HNdpm/airmotion.png' height="25" /></Link>
                    </span></a>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div class="tab-content" id="v-pills-tabContent">

                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><h1 className='text-center mt-5'>Welcome {users.email}</h1></div>

                            <div class="tab-pane fade" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab"><Order /></div>

                            <div class="tab-pane fade" id="v-pills-admin" role="tabpanel" aria-labelledby="v-pills-admin-tab"><Admin /></div>

                            <div class="tab-pane fade " id="v-pills-review" role="tabpanel" aria-labelledby="v-pills-review-tab"><AddReview /></div>

                            <div class="tab-pane fade" id="v-pills-pay" role="tabpanel" aria-labelledby="v-pills-pay-tab"><Pay /></div>

                            <div class="tab-pane fade" id="v-pills-newproduct" role="tabpanel" aria-labelledby="v-pills-newproduct-tab"><AddProduct /></div>

                            <div class="tab-pane fade" id="v-pills-Mange" role="tabpanel" aria-labelledby="v-pills-Mange-tab"><Manage/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Dashboard</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                        <Link to="/" className='admin'>
                            <span id="v-pills-admin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-admin" type="button" role="tab" aria-controls="v-pills-admin" aria-selected="false"><p className='fs-5'><i class="bi bi-house-door-fill me-3"></i> Home</p></span>
                        </Link>

                        {admin && <>
                            <span id="v-pills-admin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-admin" type="button" role="tab" aria-controls="v-pills-admin" aria-selected="false"><p className='fs-5'><i class="bi bi-person-plus-fill me-3"></i> Make Admin</p></span>

                            <span id="v-pills-newproduct-tab" data-bs-toggle="pill" data-bs-target="#v-pills-newproduct" type="button" role="tab" aria-controls="v-pills-newproduct" aria-selected="false"><p className='fs-5'><i class="bi bi-cart-plus-fill me-3"></i> Add New Product</p></span>

                            <span id="v-pills-Mange-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Mange" type="button" role="tab" aria-controls="v-pills-Mange" aria-selected="false"><p className='fs-5'><i class="bi bi-shop-window me-3"></i> Mange Product</p></span>
                        </>}

                        {!admin && <>
                            <span id="v-pills-review-tab" data-bs-toggle="pill" data-bs-target="#v-pills-review" type="button" role="tab" aria-controls="v-pills-review" aria-selected="true"><p className='fs-5'><i class="bi bi-bookmark-star-fill me-3"></i> Add Review</p></span>

                            <span id="v-pills-order-tab" data-bs-toggle="pill" data-bs-target="#v-pills-order" type="button" role="tab" aria-controls="v-pills-order" aria-selected="false"><p className='fs-5'><i class="bi bi-bag-fill me-3"></i> My Order</p></span>

                            <span id="v-pills-pay-tab" data-bs-toggle="pill" data-bs-target="#v-pills-pay" type="button" role="tab" aria-controls="v-pills-pay" aria-selected="false"> <p className='fs-5'><i class="bi bi-credit-card-2-back-fill me-3"></i> Pay Now</p></span>

                        </>}
                            <Link to="/login" className='admin'>
                                <span onClick={logOut} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><p className='fs-5'><i class="bi bi-box-arrow-right me-3"></i> Logout</p></span>
                            </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;