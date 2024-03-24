// FeedbackFormItems.js
import React from "react";
import { Form, Input, Radio } from "antd";

const FeedbackFormItems = () => {
  return (
    <>
      <Form.Item
        name="interFace_rate"
        className="form-item-box"
        label="How would you rate the user interface of the Genify web tool?"
        rules={[
          {
            required: true,
            message: "Please select a value",
          },
        ]}
      >
        <Radio.Group>
          {["Excellent", "Good", "Average", "Poor", "Very Poor"].map(
            (value) => (
              <Radio key={value} value={value}>
                {value}
              </Radio>
            )
          )}
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="recommend"
        className="form-item-box"
        label="How likely are you to recommend Genify to others?"
        rules={[
          {
            required: true,
            message: "Please select a value",
          },
        ]}
      >
        <Radio.Group>
          {[
            "Very Likely",
            "Likely",
            "Neutral",
            "Unlikely",
            "Very Unlikely",
          ].map((value) => (
            <Radio key={value} value={value}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="difficulty"
        className="form-item-box"
        label="Have you encountered any difficulties while using Genify?"
        rules={[
          {
            required: true,
            message: "Please select a value",
          },
        ]}
      >
        <Radio.Group>
          {["Yes", "No"].map((value) => (
            <Radio key={value} value={value}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="domainExpert"
        className="form-item-box"
        label="For Domain Experts (ML)"
      >
        <Input.TextArea
          id="name"
          name="name"
          className="custom-input"
          style={{ height: "100px" }}
        />
      </Form.Item>

      <Form.Item
        name="accuracy"
        className="form-item-box"
        label="How satisfied are you with the accuracy of prompt generation in Genify?"
        rules={[
          {
            required: true,
            message: "Please select a value",
          },
        ]}
      >
        <Radio.Group>
          {[
            "Very Likely",
            "Likely",
            "Neutral",
            "Unlikely",
            "Very Unlikely",
          ].map((value) => (
            <Radio key={value} value={value}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="fine_tuning"
        className="form-item-box"
        label="How intuitive do you find the process of fine-tuning language models with Genify?"
        rules={[
          {
            required: true,
            message: "Please select a value",
          },
        ]}
      >
        <Radio.Group>
          {[
            "Extremely Intuitive",
            "Intuitive",
            "Neutral",
            "Not Intuitive",
            "Not at all Intuitive",
          ].map((value) => (
            <Radio key={value} value={value}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="comparing"
        className="form-item-box"
        label="In your opinion, how does Genify compare to similar tools in the market?"
        rules={[
          {
            required: true,
            message: "Please select a value",
          },
        ]}
      >
        <Radio.Group>
          {["Much Better", "Better", "Similar", "Worse", "Much Worse"].map(
            (value) => (
              <Radio key={value} value={value}>
                {value}
              </Radio>
            )
          )}
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="performance"
        className="form-item-box"
        label="How reliable do you find the performance of Genify under heavy usage?"
        rules={[
          {
            required: true,
            message: "Please select a value",
          },
        ]}
      >
        <Radio.Group>
          {[
            "Extremely Reliable",
            "Reliable",
            "Neutral",
            "Unreliable",
            "Extremely Unreliable",
          ].map((value) => (
            <Radio key={value} value={value}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="expectations"
        className="form-item-box"
        label="To what extent does Genify meet your expectations for customizing language models?"
        rules={[
          {
            required: true,
            message: "Please select a value",
          },
        ]}
      >
        <Radio.Group>
          {[
            "Exceeds Expectations",
            "Meets Expectations",
            "Neutral",
            "Below Expectations",
            "Far Below Expectations",
          ].map((value) => (
            <Radio key={value} value={value}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="overallExp"
        className="form-item-box"
        label="How essential do you think Genify could be for industry applications?"
        rules={[
          {
            required: true,
            message: "Please select a value",
          },
        ]}
      >
        <Radio.Group>
          {[
            "Very Essential",
            "Essential ",
            "Neutral",
            "Not Essential",
            "Not at all Essential",
          ].map((value) => (
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
