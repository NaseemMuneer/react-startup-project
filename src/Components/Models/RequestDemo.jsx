import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import Recaptcha from 'react-recaptcha';
import '../../Styles/_RequestDemo.scss';
const { Option } = Select;

const callback = () => {
    console.log("capcha");
}

const onFinish = (values) => {
    console.log(values);
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },

};

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
    </Form.Item>
);

const handleSubmit = (e) => {
    // e.preventDefault();
};

function RequestDemo() {
    return (

        <>
            <div className='container-fluid model-container-div'>
                <h2>Request Demo Form</h2>
                <p>For the prism demo fill the details below to get your demo.</p>
                <Form name="nest-messages" onFinish={onFinish} layout="vertical" className='row ' validateMessages={validateMessages}>

                    <Form.Item label="Full Name" className='col-6'>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail" className='col-6'
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number" className='col-6'
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item label="Country" className='col-6'>
                        <Select>
                            <Select.Option value="demo">Select 1</Select.Option>
                            <Select.Option value="demo">Select 2</Select.Option>
                            <Select.Option value="demo">Select 3</Select.Option>
                            <Select.Option value="demo">Select 4</Select.Option>
                        </Select>
                    </Form.Item>


                    <Form.Item label="Company" className='col-6'>
                        <Input />
                    </Form.Item>

                    <Form.Item label="No Of Users" className='col-6'>
                        <Input />
                    </Form.Item>
                    <div className=" d-flex justify-content-between recaptch gx-0">
                        <Recaptcha
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            render="explicit"
                            onloadCallback={callback}
                        />
                        <button className="reset-form-btn bg-transparent border-0 text-danger" >Reset Form</button>
                    </div>

                    <Form.Item >
                        <Button className="w-100 form-btn-submit" onClick={handleSubmit} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                </Form>

            </div>

        </>
    )

}

export default RequestDemo;
