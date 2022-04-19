import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import { Breadcrumb, Switch, Collapse } from "antd";
import Circle from '../../../Assets/icons/circle-check.png';
import { Steps, Button, message } from 'antd';
import StepThree from "./StepThree";
import StepTwo from "./SetpTwo";
import StepOne from './StepOne';
import StepFour from './StepFour';
import ArrowLeft from '../../../Assets/icons/arrow-left-white.png'
import Layout from '../../../Layout/Index';



const { Step } = Steps;

const steps = [
    {
        title: 'Contact Information',
        content: <StepOne />
    },
    {
        title: 'Business Details',
        content: <StepTwo />
    },
    {
        title: 'Billing Address',
        content: <StepThree />,
    },
    {
        title: 'Payment Informaation',
        content: <StepFour />,
    },
];


function Index() {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    const [switchState, setswitchState] = useState(true);

    const handleSwitch = (check) => {
        setswitchState(check);
    };

    return (
        <>
            <Layout title="Features" page={5}>
                <div className='container-fluid contact-container-div hero hero-div'>
                    <div className='contact-div'>

                        <Breadcrumb className="">
                            <Breadcrumb.Item className="link-distory-div "><Link className="links-history" to="/">Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link className="links-history" to="/pricingPlane">Pricing Plan</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link className="" to="/Contact Information">Contact Information</Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>

                        <div className="back-btn">
                            <img src={ArrowLeft} alt="arrow" />
                            <Link className="back-link-btn" to="#">Back</Link>
                        </div>
                        <div className='row'>
                            <div className='col-8 shadow-sm bg-white stepper'>
                                <Steps current={current}>
                                    {steps.map(item => (
                                        <Step key={item.title} title={item.title} />
                                    ))}
                                </Steps>
                                <div className="steps-content">{steps[current].content}
                                </div>
                                <div className="steps-action text-end">
                                    {current > 0 && (
                                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                            Back
                                        </Button>
                                    )}
                                    {current < steps.length - 1 && (
                                        <>
                                            {current === 0 && (
                                                <div className="d-flex justify-content-between">
                                                    <p className="para-step">Note : Please fill all the details to confirm your payment</p>
                                                    <Button type="primary" onClick={() => next()}>
                                                        Next
                                                    </Button>
                                                </div>
                                            )}
                                            {current !== 0 && (
                                                <Button type="primary" onClick={() => next()}>
                                                    Next
                                                </Button>
                                            )}
                                        </>
                                    )}

                                    {current === steps.length - 1 && (
                                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                            Confirm Payment
                                        </Button>
                                    )}

                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="card-container-summary">

                                    <div className="card-div shadow-sm">
                                        <div class="card text-dark rounded-3">
                                            <div class="card-header bg-white"><h5>Order summary</h5></div>
                                            <div class="card-body d-flex justify-content-between align-item-center py-3 m-0">
                                                <h5 className="">Business</h5>
                                                <div className="business-div">
                                                    <h5>SAR 250 <span>/ Year</span></h5>
                                                    <p>You save 10%</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="feature-plan">
                                                <p>Features included in business plan.</p>

                                                <ul >
                                                    <li>
                                                        <img src={Circle} alt="" />
                                                        <span>All limited links</span>
                                                    </li>
                                                    <li>
                                                        <img src={Circle} alt="" />
                                                        <span>Own analytic program</span>
                                                    </li>
                                                    <li>
                                                        <img src={Circle} alt="" />
                                                        <span>Chat Support</span>
                                                    </li>
                                                    <li>
                                                        <img src={Circle} alt="" />
                                                        <span>Optimize Hashtags</span>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <div className="price-summary">
                                                    <h5>Price Summary</h5>
                                                    <hr />

                                                    <ul className="d-flex flex-column">
                                                        <li className="justify-content-between">
                                                            <p>Plan Price</p>
                                                            <p>SAR 250</p>
                                                        </li>
                                                        <li className="justify-content-between">
                                                            <p>VAT Total</p>
                                                            <p>SAR 10</p>
                                                        </li>
                                                        <li className="justify-content-between total-price">
                                                            <p>Total Price</p>
                                                            <p>SAR 260</p>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>

    )
}

export default Index
