import React from 'react';
import { Link } from "react-router-dom";
import '../../Styles/Pages/_About.scss';
import { Breadcrumb, Switch, Collapse } from "antd";


function AboutUS() {
    return (
        <div className='about-us-container'>
            <div className='hero'>

                <div className='about-us-div '>
                <Breadcrumb className="">
                    <Breadcrumb.Item className="link-distory-div "><Link className="links-history" to="/">Home</Link></Breadcrumb.Item>
                    
                    <Breadcrumb.Item>
                        <Link className="links-history-current" to="/Contact Information">About us</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                    <div className='text-center'>
                    <h1>About Us</h1>
                    <p>This is the best digital tool for all your businesses which you operate online
                        t covers Industries like construction, <br /> retail stores and gives
                        you ease to get all the records in one place without worrying about.</p>
                    </div>
                    <div className='under-shade m-auto pt-5'></div>
                </div>
            </div>

        </div>
    )
}

export default AboutUS
