// FeedbackFormItems.js
import React from 'react';
import { Form, Input, Radio } from 'antd';

const FeedbackFormItems = () => {
  return (
    <>
      <Form.Item
        name="input_text"
        className="form-item-box"
        label="Name"
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
          {[1, 2, 3, 4, 5].map((value) => (
            <Radio key={value} value={value}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default FeedbackFormItems;
