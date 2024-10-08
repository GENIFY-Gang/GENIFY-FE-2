import React, { useState } from "react";
import { Button, Form, Input, Spin, notification, Layout } from "antd";
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  RocketOutlined,
  CopyOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { GenifyService } from "../../API";
import { Link } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import Footer from "../Footer/Footer";
import '../../AMain/Main.css';
import axios from "axios";

const { Content } = Layout;

const PromptGenerator = () => {
  const genifyService = new GenifyService();
  const [form] = Form.useForm();
  const [promptText, setPromptText] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const handlePrompt = async () => {
    try {
      const values = await form.validateFields();
      setPromptText("");
      setLoading(true);

      const response:any = await genifyService.promptPost(values);

      setLoading(false);
      setPromptText(response[0]?.generated_text);

      notification.info({
        message: `Notification`,
        description: "Prompt Sent",
        placement: 'bottomRight',
        icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      });
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error) && error.response) {
        notification.error({
          message: "Error",
          description: error.response.data.error || "This is not a valid prompt",
          placement: "bottomRight",
          icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
        });
      } else {
        // Display a generic error notification
        notification.error({
          message: "Error",
          description: "This is not a valid prompt",
          placement: "bottomRight",
          icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
        });
    }
    }
  };

  const handleCopyPrompt = () => {
    if (promptText) {
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = promptText;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);

      notification.success({
        message: "Copied",
        description: "Prompt text copied to clipboard",
        placement: "bottomRight",
      });
    } else {
      notification.error({
        message: "Error",
        description: "No prompt text available to copy",
        placement: "bottomRight",
        icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
      });
    }
  };

  return (
    <Layout style={{background:"white"}}>
      <NavigationBar />
      <Content className="container mx-auto pt-8 px-4 mt-40" style={{background:"white"}}>
        <h1 className="text-4xl font-semibold mb-4 poppins-font prompt-title">System Prompt Generator</h1>
        <div className="flex items-center justify-center mt-14 input-container">
          <div
            className="border border-black p-2 relative rounded-l-3xl text-area-color no-right-border left-container-prompt"
            style={{
              color: "white",
              width: "38.125rem",
              height: "31.25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form form={form} style={{width: "100%"}}>
              <Form.Item name="input_text">
                <Input.TextArea
                  placeholder="To generate a well-structured prompt, press “Generate”"
                  id="input_text"
                  name="input_text"
                  className="font-mono text-area-2"
                  style={{
                    width: "100%",
                    height: "30.25rem",
                    marginTop: "20px",
                    backgroundColor: "#f0faf3",
                    borderColor: "#f0faf3",
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "20px",
                  }}
                />
              </Form.Item>
            </Form>
            <div className="absolute bottom-0 right-0 mb-4 mr-4">
              <Button
                type="primary"
                icon={<RocketOutlined />}
                onClick={handlePrompt}
                size="large"
                className="text-black rounded-full generate-button"
              >
                Generate
              </Button>
            </div>
          </div>
          <div
            className="border border-black p-2 relative rounded-r-3xl text-area-color right-prompt-container"
            style={{
              color: "white",
              width: "38.125rem",
              height: "31.25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="primary"
              icon={<CopyOutlined />}
              onClick={handleCopyPrompt}
              className="text-white rounded-full ml-2 absolute right-5 top-2 copy-button"
            >
              Copy
            </Button>
            <div className="overflow-y-auto w-full h-full text-black flex flex-col items-center justify-center mt-10">
              <Spin
                spinning={loading}
                tip="GENIFY Is Typing..."
                indicator={
                  <LoadingOutlined
                    style={{ fontSize: 50, color: "#1890ff" }}
                    spin
                  />
                }
              />
              <pre className="overflow-y-auto text-left w-full flex-grow">
                {promptText}
              </pre>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default PromptGenerator;
