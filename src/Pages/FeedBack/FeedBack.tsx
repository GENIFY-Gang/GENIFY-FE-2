import { GenifyService } from "../../API";
import { Button, Form, Input, Layout, Radio, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import NavigationBar from "../Navigation/NavigationBar";
import { Content } from "antd/es/layout/layout";
import Footer from "../Footer/Footer";
import FeedbackFormItems from "./schema";

const FeedBack = () => {
  const genifyService = new GenifyService();
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      // Extracting values from the object and formatting into the desired array structure
      const dataArray = [];
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const value = values[key];
          // If the value is an array, concatenate it to dataArray, otherwise wrap it in an array
          dataArray.push(Array.isArray(value) ? value : [value]);
        }
      }
      const newDataArray = dataArray.map((innerArray) => innerArray[0]);

      // Sending the data directly without wrapping in an object
      const response = await genifyService.feedbackForm([newDataArray]);

      notification.success({
        message: `Success`,
        description:
          "Thank you for your feedback! Your input has been successfully submitted. We appreciate you taking the time to share your thoughts with us.",
        placement: "bottomRight",
      });
      form.resetFields();
    } catch (error) {
      notification.error({
        message: "Error",
        description:
          "An error occurred while processing your request. Please try again later.",
        placement: "bottomRight",
        icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
      });
    }
  };

  return (
    <Layout style={{background:"white"}}>
      <NavigationBar /> {/* NavigationBar as header */}
      <Content style={{ marginTop: '64px',background:"white" }}>

      <div className="container mx-auto pt-8 px-4 mt-28">
      <Form form={form}>
            <FeedbackFormItems />
          </Form>
          <Button className="input" onClick={handleSubmit}>
            Submit
          </Button>
      </div>
      </Content>
      <Footer bottomFooter={true}/>
    </Layout>
  );
};

export default FeedBack;
