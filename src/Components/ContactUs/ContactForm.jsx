import React, { useEffect, useState } from "react";
import { Breadcrumb, Select, Form, Input, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import LocationIcon from "../../Assets/icons/Icon metro-location.png";
import Phone from "../../Assets/icons/Icon material-phonelink-ring.png";
import Mail from "../../Assets/icons/Icon material-email.png";
import Plane from "../../Assets/icons/Group 2601.svg";
import Recaptcha from 'react-recaptcha';

const { Option } = Select;


const callback = () => {
    console.log("capcha");
}

const ContactForm = () => {

    const validateMessages = {

    };

    const onFinish = (values) => {
        console.log(values);
    };

    //hooks
    const [formSubmit, setfromSubmit] = useState(false);

    const location = useHistory();

    useEffect(() => {
        console.log("effect");
        return location.listen(() => {
            setfromSubmit(false);
        });
    });

    const history = useHistory();
    console.log(location);
    console.log(history);


    const handleSubmit = (e) => {
        setfromSubmit(true);
        // e.preventDefault();
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 100 }}>
                <Option value="86">+92</Option>
                <Option value="87">+93</Option>
                <Option value="87">+94</Option>
                <Option value="87">+95</Option>
                <Option value="87">+96</Option>
                <Option value="87">+97</Option>
            </Select>
        </Form.Item>
    );

    return (
        <React.Fragment>

            <section className="contact-us">
                <Breadcrumb className="">
                    <Breadcrumb.Item className="link-distory-div "><Link className="links-history" to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link className="links-history-current" to="/Contact Information">Contact Us</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div className='about-us-div text-center'>
                    <h1>Contact Us</h1>
                    <div className=''></div>

                    <p>If you have any queries in your mind please send us a message or email us which is given below..</p>
                </div>

                <section className="contact-container justify-content-center text-start m-auto w-100">

                    <div className="d-flex flex-wrap-sm justify-content-between contact-div-item">

                        <div className=" contact-layout">

                            {formSubmit ? (
                                <div className="thanks-message text-center">
                                    <img src={Plane} alt="" />
                                    <h1>Thanks for reaching out</h1>
                                    <p>Your message has been submitted</p>
                                    <p>Our team will get back to you soon</p>
                                    <p>
                                        Your message will be overlooked and you will be contacted{" "}
                                        <br /> from our department within 24 hours.
                                    </p>
                                </div>
                            ) : (


                                <div className="form  ">

                                    <h3>Contact Us</h3>

                                    <Form name="nest-messages" onFinish={onFinish} layout="vertical" className='row' validateMessages={validateMessages}>

                                        <div className="d-flex gx-0 contact-div-item form-div-item ">

                                            <Form.Item
                                                className='col-6 pe-3 '
                                                name={['user', 'name']}
                                                label="First Name"
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                                className='col-6'
                                                name={['user', 'name']}
                                                label="Email"
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </div>
                                      
                                      <div className="contact-div-item gx-0 d-flex">
                                      <Form.Item
                                            className='col-6 pe-3 '
                                            name="phone"
                                            label="Phone Number"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your phone number!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="3314567890"
                                                addonBefore={prefixSelector}
                                                style={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item label="Country" className='col-6 contact-div-item'>
                                            <Select>
                                                <Select.Option value="demo">Select 1</Select.Option>
                                                <Select.Option value="demo">Select 2</Select.Option>
                                                <Select.Option value="demo">Select 3</Select.Option>
                                                <Select.Option value="demo">Select 4</Select.Option>
                                            </Select>
                                        </Form.Item>
                                      </div>
                                        <Form.Item
                                            className='col-6 w-100'

                                            name={['user', 'email']}
                                            label="Subject"
                                            rules={[
                                                {
                                                    type: 'email',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            name="Message"
                                            label="Message"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Naseem Muneer',
                                                },
                                            ]}
                                        >
                                            <Input.TextArea showCount maxLength={100} />
                                        </Form.Item>

                                        <div className=" d-flex justify-content-between recaptch">
                                            <Recaptcha
                                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                                render="explicit"
                                                onloadCallback={callback}
                                            />
                                            <button className="reset-form-btn" >Reset Form</button>
                                        </div>
                                        <Form.Item>
                                            <Button className="w-100 form-btn mt-4" onClick={handleSubmit} type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>

                                </div>
                            )}
                        </div>

                        <div className=" information">
                            <h3 className="text-center">Contact Information</h3>
                            <div className="mt-2 mt-lg-5">
                                <div className="d-flex mb-4">
                                    <img
                                        src={LocationIcon}
                                        alt=""
                                        className="me-4 ci-icon-location"
                                    />
                                    <p>
                                        Mubashir Plaza Near Kips <br /> Academy, Abbotabad
                                    </p>
                                </div>
                                <div className="d-flex mb-4">
                                    <img src={Phone} alt="" className="me-4 ci-icon-phone" />
                                    <p>
                                        +92 343 102 329578 <br />
                                        +92 343 102 329578
                                    </p>
                                </div>
                                <div className="d-flex mb-4">
                                    <img src={Mail} alt="" className="me-4 ci-icon-mail" />
                                    <p>
                                        erpadmin@erp.com <br />
                                        erphead@erp.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <div className="spacer-contact"></div>
        </React.Fragment>
    );
};

export default ContactForm;
