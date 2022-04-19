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

function StepTwo() {
    const [form] = Form.useForm();
    return (
        <>
            <Form name="nest-messages" form={form} onFinish={onFinish} layout="vertical" className='row' validateMessages={validateMessages}>
                <Form.Item label="Company" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="number Of Branches" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="Number Of Users" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="Position" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="CR Number" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="Number Of Customers" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="Number Of Supplies" className='col-6'>
                    <Input />
                </Form.Item>

                <Form.Item label="Business Type" className='col-6'>
                    <Select>
                        <Select.Option value="demo">Select 1</Select.Option>
                        <Select.Option value="demo">Select 2</Select.Option>
                        <Select.Option value="demo">Select 3</Select.Option>
                        <Select.Option value="demo">Select 4</Select.Option>
                    </Select>
                </Form.Item>

            </Form>
        </>
    )
}

export default StepTwo;
