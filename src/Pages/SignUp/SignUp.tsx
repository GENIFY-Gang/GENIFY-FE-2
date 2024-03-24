import React, { useState } from "react";
import { Input, Button, Form, notification } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { GenifyService } from "../../API";
import { Link } from "react-router-dom";

const SignUp = () => {
  const genifyService = new GenifyService();
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      const updatedValues = {
        ...values,
        role: "user",
      };

      const response = await genifyService.register(updatedValues);

      notification.success({
        message: `Successfull`,
        description: "SignUp SuccessFull",
        placement: "bottomRight",
      });
      handleReset();
      return response;
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 h-screen flex items-center sign-up-phrase">
        <div className="grid grid-rows-3">
          <h1 className="text-left text-4xl text-white font-semibold ml-6 self-start">Unlock your creativity with <span className="word-genify">Genify</span></h1>
          <h2 className="text-left text-3xl ml-6 self-end mt-2 sign-up-phrase-mini">where system prompts meet</h2>
          <h2 className="text-left text-3xl ml-6 self-end mt-1 sign-up-phrase-mini">limitless possibilities</h2>
        </div>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="w-80">
          <h1 className="text-center mb-5 text-1xl">
            WELCOME TO
          </h1>
          <h2 className="text-center mb-8 text-4xl font-semibold">Genify</h2>
          <Form form={form} onFinish={handleSubmit}>
            <div className="mb-4">
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username" },
                ]}
              >
                <Input
                  type="text"
                  placeholder="User Name"
                  className="rounded-full"
                />
              </Form.Item>
            </div>
            <div className="mb-4">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email" },
                  {
                    pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Email"
                  className="rounded-full"
                />
              </Form.Item>
            </div>
            <div className="mb-4">
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  className="rounded-full"
                />
              </Form.Item>
            </div>
            <div className="mb-4">
              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Password Not Match Please Try Again")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  className="rounded-full"
                />
              </Form.Item>
            </div>
            <div className="text-center">
              <Button type="default" htmlType="submit" className="mt-2 rounded-full" size="large">
                Sign Up
              </Button>
            </div>
          </Form>
          <div className="text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="link-text">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
