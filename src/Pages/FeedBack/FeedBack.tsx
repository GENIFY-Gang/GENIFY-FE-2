import { GenifyService } from "../../API";
import { Button, Form, Input, Radio, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import NavigationBar from "../Navigation/Navigation";

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
    <div>
      <NavigationBar />

      <div className="container mx-auto pt-8 px-4 mt-28">
        <Form form={form}>
          <Form.Item
            name="input_text"
            className="form-item-box" // Apply the box styling directly to the Form.Item component
            label="Name" // Move label inside Form.Item for consistency
          >
            <Input.TextArea
              placeholder="What specific features do you find most valuable or beneficial?"
              id="name"
              name="name"
              className="custom-input"
            />
          </Form.Item>
          <Form.Item
            name="overallExp"
            className="form-item-box"
            label="How would you rate your overall experience with Genify?"
            rules={[
              {
                required: true,
                message: 'Please select your overall experience with Genify',
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
        <Button className="input" onClick={handleSubmit}>
          submit
        </Button>
      </div>
    </div>
  );
};

export default FeedBack;
