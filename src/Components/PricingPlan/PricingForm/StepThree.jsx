import React, { useState } from 'react';
import {
    Form, Input, InputNumber, Button,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    AutoComplete,
} from 'antd';

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

function StepThree() {
    const [form] = Form.useForm();
    return (
        <>
            <Form name="nest-messages" form={form} onFinish={onFinish} layout="vertical" className='row' validateMessages={validateMessages}>
                   
                    <Form.Item label="Country" className='col-6'>
                        <Select>
                            <Select.Option value="demo">Select 1</Select.Option>
                            <Select.Option value="demo">Select 2</Select.Option>
                            <Select.Option value="demo">Select 3</Select.Option>
                            <Select.Option value="demo">Select 4</Select.Option>
                        </Select>
                    </Form.Item>
                <Form.Item label="Address" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="City" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="State" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="Postal/Zip Code" className='col-6'>
                    <Input />
                </Form.Item>

            </Form>
            <div className=' para-div-pad'></div>

        </>
    )
}

export default StepThree;
