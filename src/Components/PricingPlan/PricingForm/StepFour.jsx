import React, { useState } from 'react';
// import validator from 'validator';
import MasterCard from '../../../Assets/icons/master-card.png'
import VisaCard from '../../../Assets/icons/visa-card.png'
import {
    Form, Input,DatePicker, Switch,Select,Checkbox,
} from 'antd';

import { InfoCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select
            style={{
                width: 70,
            }}
        >
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
    </Form.Item>
);

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const onFinish = (values) => {
    console.log(values);
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 25,
            offset: 0,
        },
    },
};

function StepThree() {
    const [errorMessage, setErrorMessage] = useState('')

    const [currentValue, setCurrentValue] = useState(true)
    const switchCheck = () => {
        setCurrentValue(!currentValue)
    }
    const [form] = Form.useForm();

    return (
        <>
            <Form name="nest-messages" form={form} onFinish={onFinish} layout="vertical" className='row' validateMessages={validateMessages}>

                <div className='card-accept'>
                    <h5>We Accept</h5>
                    <div className='d-flex '>
                        <img src={MasterCard} alt="" />
                        <img src={VisaCard} alt="" />
                    </div>

                </div>

                <Form.Item label="Name On Card" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="Credit Card Number" className='col-6'>
                    <Input />
                </Form.Item>

                <div className='d-flex p-0 w-100'>
                    <Form.Item label="Expiry Date" className='col-3'>
                        <DatePicker className="date-picker"  placeholder="DD - MM - YYYY"/>
                    </Form.Item>

                    <div className='d-flex credit-img px-3'>
                        <Form.Item className=''>

                            <Form.Item className='cvc-number'
                                label="CVC"
                                tooltip={{ title: 'CSV number is mentioned on back of your card', icon: <InfoCircleOutlined /> }}
                            >
                                <Input placeholder="" />
                            </Form.Item>
                        </Form.Item>

                    </div>
                </div>
                <div className='d-flex flex-column switch-on w-25 p-0'>
                    <span className='p-0 auto-new'>Auto Renew</span>
                    <div className='d-flex gap-2' >
                        <Switch onClick={switchCheck} />
                        <p>{currentValue ? "Off" : "On"}</p>
                    </div>
                </div>


                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        <p>By checking this box. You agree to ERP’s terms and services and confirm you have read ERP’s
                            privacy policy. You also agree to receive emails from ERP regarding product or service updates
                            or any other marketing material. To ensure continuous service, your membership will be auto-renewed
                            unless canceled.
                        </p>
                    </Checkbox>
                </Form.Item>

            </Form>
        </>
    )
}

export default StepThree;
