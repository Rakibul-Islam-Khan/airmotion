import React from 'react';
import Footer from '../Home/Components/Footer/Footer';
import Header from '../Home/Components/Header/Header';

const About = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <h1 className='text-center my-4'>About</h1>
                    <div className="col-md-6 my-5">
                        <img className='img-fluid px-4' src="https://images.unsplash.com/photo-1555867358-2745816780e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" />
                    </div>
                    <div className="col-md-6 my-5">
                        <span>Creativity is at the heart of every dream. Every idea, every groundbreaking leap that changes our world starts with the vision of talented creators. At DJI, we give these creators the tools they need to bring their ideas to life.

                            Our platforms empower them to capture images that were once out of reach. Our flying and camera stabilization systems redefine camera placement and motion. Amazing photos and video, treasured personal memories, and high-end professional imagery are captured every day, in every corner of the world using DJI products. Building on the ethos of “form follows function,” our products combine advanced technology with dynamic designs.

                            Headquartered in Shenzhen, widely considered China’s Silicon Valley, DJI benefits from direct access to the suppliers, raw materials, and young, creative talent pool necessary for sustained success. Drawing on these resources, we have grown from a single small office in 2006 to a global workforce. Our offices can now be found in the United States, Germany, the Netherlands, Japan, South Korea, Beijing, Shanghai, and Hong Kong. As a privately owned and operated company, DJI focuses on our own vision, supporting creative, commercial, and nonprofit applications of our technology. Today, DJI products are redefining industries. .</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;