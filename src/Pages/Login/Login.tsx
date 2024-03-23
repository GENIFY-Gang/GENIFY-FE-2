import React, { useState, useMemo } from "react";
import { Input, Button, Form, notification } from "antd";
import { ExclamationCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { GenifyService } from "../../API";
import TermsAndConditionModal from "./t&cModal";

const Login = () => {
  const genifyService = new GenifyService();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [form] = Form.useForm();


  const handleSubmit = async () => {
    
    try {
      const values = await form.validateFields();
      console.log("Form values:", values);
      const response = await genifyService.login(values);
      console.log(response, "res");
      const dataString = JSON.stringify(response);
      notification.success({
        message: `Successfull`,
        description: 'Login Successful',
        placement:"bottomRight",
      });
      setShowModal(true);
      window.localStorage.setItem("isLoggedIn","true");
      window.localStorage.setItem("loggedData",dataString)
     

    } catch (err) {
      notification.error({
        message: 'Error',
        description: 'Invalid username or password',
        placement: 'bottomRight',
        icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
      });
    }
  };

  const tAndCModal = useMemo(() => (
    <TermsAndConditionModal
      isVisible={showModal}
      onClose={()=>setShowModal(false)}
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
                rules={[{ required: true, message: "Please enter your username" }]}
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
                rules={[{ required: true, message: "Please enter your password" }]}
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
              <Button type="default" htmlType="submit"  className="rounded-full">
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
