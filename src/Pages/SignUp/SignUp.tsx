import React, { useState } from "react";
import { Input, Button, Form, notification } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { GenifyService } from "../../API";

const SignUp = () => {
  const genifyService = new GenifyService();
  const [form] = Form.useForm();


  const handleReset = () =>{
    form.resetFields()
  }

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      const updatedValues = {
        ...values,
        role: "user",
      };

      const response = await genifyService.register(updatedValues);

      notification.info({
        message: `Notification`,
        description: 'Sign Up Successfully Created',
      });
      handleReset()
      return response;

    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 h-screen bg-black text-white flex items-center justify-center text-5xl">
        <h1 className="text-center font-poppins">GENIFY</h1>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="w-80">
          <h1 className="text-center mb-8 text-2xl font-bold">WELCOME TO GENIFY</h1>
          <h2 className="text-center mb-8 text-2xl font-poppins">Sign Up</h2>
          <Form form={form} onFinish={handleSubmit}>
            <div className="mb-4">
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please input your username!" }]}
              >
                <Input type="text" placeholder="User Name"  className="rounded-full" />
              </Form.Item>
            </div>
            <div className="mb-4">
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input type="text" placeholder="Email"  className="rounded-full" />
              </Form.Item>
            </div>
            <div className="mb-4">
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password
                  placeholder="Password"
                  iconRender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                  className="rounded-full"
                />
              </Form.Item>
            </div>
            <div className="mb-4">
              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Password Not Match Please Try Again!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  iconRender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                  className="rounded-full"
                />
              </Form.Item>
            </div>
            <div className="text-center">
              <Button type="default" htmlType="submit"  className="rounded-full">
                Sign Up
              </Button>
            </div>
          </Form>
          <div className="text-center mt-4">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
