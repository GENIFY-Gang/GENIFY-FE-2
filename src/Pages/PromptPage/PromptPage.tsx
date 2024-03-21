import React, { useState } from "react";
import { Button, Form, Input, Spin, notification } from "antd";
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
import { CLIENT_RENEG_LIMIT } from "tls";

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

      notification.error({
        message: "Error",
        description: "This is not a valid prompt",
        placement: "bottomRight",
        icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
      });
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
    <>
      <div>
        <NavigationBar />
        {/* Other content of your Generator page */}
      </div>
      <div className="container mx-auto pt-8 px-4 mt-24">
        <h1 className="text-4xl font-bold mb-4">GENIFY</h1>
        <h2 className="text-3xl font-bold mb-4">Prompt Generator</h2>
        <div className="flex items-center justify-center mt-14">
          <div
            className="bg-gray-300 border border-black p-2 relative rounded-l-3xl"
            style={{
              color: "white",
              width: "610px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form form={form}>
              <Form.Item name="input_text">
                <Input.TextArea
                  placeholder="To generate a well-structured prompt, press “Generate”"
                  id="input_text"
                  name="input_text"
                  className="font-mono"
                  style={{
                    width: "605px",
                    height: "495px",
                    backgroundColor: "#D9D9D9",
                    borderColor: "#D9D9D9",
                    marginTop: "20px",
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
                className="bg-red-400 text-white rounded-full"
              >
                Generate
              </Button>
            </div>
          </div>
          <div
            className="bg-gray-300 border border-black p-2 relative rounded-r-3xl"
            style={{
              color: "white",
              width: "610px",
              height: "500px",
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
              className="bg-blue-400 text-white rounded-full ml-2 absolute right-5 top-2"
            >
              Copy
            </Button>
            <div className="overflow-y-auto w-full h-full text-black flex flex-col items-center justify-center">
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
      </div>
      <Footer />
    </>
  );
};

export default PromptGenerator;
