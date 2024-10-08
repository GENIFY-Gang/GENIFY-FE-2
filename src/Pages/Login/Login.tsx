import React, { useState, useMemo } from "react";
import { Input, Button, Form, notification,Layout } from "antd";
import { ExclamationCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { GenifyService } from "../../API";
import TermsAndConditionModal from "./t&cModal";
import axios from "axios";
import NavigationBar from "../Navigation/NavigationBar";
import { Content } from "antd/es/layout/layout";
import Footer from "../Footer/Footer";

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
        message: `Welcome to Genify!`,
        description: "You have successfully logged into the Genify AI Prompt Generator!",
        placement:"bottomRight",
      });
      setShowModal(true);
      window.localStorage.setItem("isLoggedIn","true");
      window.localStorage.setItem("loggedData",dataString)
     

    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        notification.error({
          message: "Error",
          description: err.response.data.error || "Invalid username or password",
          placement: "bottomRight",
          icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
        });
      } else {
        // Display a generic error notification
        notification.error({
          message: "Error",
          description: "Invalid username or password",
          placement: "bottomRight",
          icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
        });
    }
    }
  };

  const tAndCModal = useMemo(() => (
    <TermsAndConditionModal
      isVisible={showModal}
      onClose={()=>setShowModal(false)}
    />
  ), [showModal, setShowModal]);


  return (
    <>
    <Layout style={{ background: "white" }}>
    <NavigationBar/>
    <Content style={{ background: "white" }}>
    <div className="flex mt-4">
      <div className="w-1/2 h-screen flex items-center sign-up-phrase">
        <div className="grid grid-rows-3">
          <h1 className="text-left text-4xl text-white font-semibold ml-6 self-start">Unlock your creativity with <span className="word-genify">Genify</span></h1>
          <h2 className="text-left text-3xl ml-6 self-end mt-2 sign-up-phrase-mini">where system prompts meet</h2>
          <h2 className="text-left text-3xl ml-6 self-end mt-1 sign-up-phrase-mini">limitless possibilities</h2>
        </div>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center poppins-font">
        <div className="w-80">
        <h1 className="text-center mb-5 text-1xl">WELCOME TO</h1>
          <h2 className="text-center mb-8 text-4xl font-semibold">Genify</h2>
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
              <Button type="default" htmlType="submit"  className="mt-2 rounded-full" size="large">
                Login
              </Button>
            </div>
          </Form>
          <div className="text-center mt-6">
            Don't have an account? <a href="/signup" className="link-text">Sign Up</a>
          </div>
        </div>
      </div>
      {tAndCModal}
    </div>
    </Content>
    </Layout>
    </>
  );
};

export default Login;
