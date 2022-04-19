import React from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/Pages/_Feature.scss';
import { Breadcrumb } from "antd";


function Feature() {
    return (
        <div className='feature-us-container'>
            <div className='hero'>
                <div className='pagination-div text-white'>
                <Breadcrumb className="">
                    <Breadcrumb.Item className="link-distory-div "><Link className="links-history" to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link className="links-history-current" to="/Contact Information">Contact Us</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                </div>
                <div className='feature-us-div text-center'>
                    <h1>Features</h1>
                    <p>This is the best digital tool for all your businesses which you operate online
                        t covers Industries like construction, <br /> retail stores and gives
                        you ease to get all the records in one place without worrying about.</p>
                    <div className='under-shade m-auto pt-5'></div>
                </div>
            </div>
        </div>
    )
}

export default Feature
