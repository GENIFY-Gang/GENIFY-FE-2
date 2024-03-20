import React, { useState, useMemo } from "react";
import { Input, Button, Form, notification } from "antd";
import { ExclamationCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { GenifyService } from "../../API";
import TermsAndConditionModal from "./t&cModal";
import axios from "axios";

const Login = () => {
  const genifyService = new GenifyService();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  console.log("username",username);
  console.log("password",password);
  

  const handleSubmit = async () => {
    
    try {
      const values = await form.validateFields();
      console.log("Form values:", values);
      setUsername(values.username)
      setPassword(values.password)
      const response = await genifyService.login(values);
      console.log(response, "res");

      notification.info({
        message: `Notification`,
        description: 'Login Successfully Created',
        placement:"bottomRight",
      });
      setShowModal(true)
     

    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'An error occurred while processing your request. Please try again later.',
        placement: 'bottomRight',
        icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
      });
    }
  };

  const handleLogin = async () => {
    try {
        const response = await  genifyService.login({ username, password });
        // If the request is successful, handle the login
        console.log('Login successful:', response);
        setShowModal(true);
    } catch (error) {
        // If there's an error (e.g., invalid credentials), handle it
        console.error('Login failed:', error);
        setError('Invalid username or password.');
    }
};

  const tAndCModal = useMemo(() => (
    <TermsAndConditionModal
      isVisible={showModal}
    />
  ), [showModal, setShowModal]);


  return (
    <div className="flex">
      <div className="w-1/2 h-screen bg-black text-white flex items-center justify-center text-5xl">
        GENIFY
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="w-80">
        <h1 className="text-center mb-8 text-2xl font-bold">WELCOME TO GENIFY</h1>
          <h2 className="text-center mb-8 text-2xl font-poppins">Login</h2>
          <Form form={form} onFinish={handleSubmit}>
            <div className="mb-4">
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please enter your username!" }]}
              >
                <Input
                  type="text"
                  placeholder="User Name"
                  id="username"
                  name="username"
                  className="rounded-full"
                />
              </Form.Item>
            </div>
            <div className="mb-4">
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please enter your password!" }]}
              >
                <Input.Password
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="rounded-full"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </div>
            <div className="text-center">
              <Button type="default" htmlType="submit"  className="rounded-full" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </Form>
          <div className="text-center mt-4">
            Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
          </div>
        </div>
      </div>
      {tAndCModal}
    </div>
  );
};

export default Login;
