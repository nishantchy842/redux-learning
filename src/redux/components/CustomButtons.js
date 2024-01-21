import { Button, Modal, Checkbox, Form, Input } from 'antd'
import React, { useState } from 'react'

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const CustomButtons = () => {
  const [isModalOpen,setIsModelOpen]=useState(false);
  const showModal=()=>{
    setIsModelOpen(true);
  };
  const handleOk=()=>{
    setIsModelOpen(false);
  };
  const handleCancel=()=>{
    setIsModelOpen(false);
  };
  return (
    <div>
        <Button onClick={showModal} style={{border:'1px solid black',borderRadius:'10px 10px 10px 10px',width:'90px',height:'40px' }}>
            Add Event
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Modal>
    </div>
  )
}

export default CustomButtons;