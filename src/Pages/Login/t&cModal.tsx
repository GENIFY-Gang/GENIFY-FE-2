// App.tsx
import { Button, Checkbox, Modal } from "antd";
import React, { FC, useState } from "react";

const TermsAndConditionMOdal: FC<{
  isVisible: boolean;
  onClose: () => void;
}> = ({ isVisible, onClose }) => {
  const [isChecked, setisChecked] = useState<boolean>(true);

  const logSystem = () => {
    window.location.href = "/prompt-generator";
    onClose();
  };

  return (
    <Modal
      centered
      width={"700px"}
      open={isVisible} // Changed 'open' to 'visible'
      onCancel={() => onClose()}
      footer={null} // No footer for this modal
      style={{
        borderRadius: "20px", 
    }}
    
    >
      <div
        style={{
          maxHeight: "400px",
          overflowY: "auto",
          textAlign: "center",
          backgroundColor: "white",
          
        }}
      >
        {" "}
        <h2 className="text-2xl font-bold">Terms and Conditions</h2>
        <div
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            backgroundColor: "white",
            marginTop : "10px"
          }}
        >
          {" "}
          {/* Added div for scrolling */}
          <ol style={{ textAlign: "left", paddingLeft: "40px" }}>
            <li style={{ marginTop: "10px" }}>
              <strong>Acceptance of Terms:</strong>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-24px",
                  marginTop: "5px",
                }}
              >
                <li style={{ marginBottom: "5px" }}>
                  &bull; By signing in, you agree to abide by these Terms and
                  Conditions. If you do not agree with any part of these terms,
                  you should not sign in.
                </li>
              </ul>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong>User Account:</strong>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-24px",
                  marginTop: "5px",
                }}
              >
                <li style={{ marginBottom: "5px" }}>
                  &bull; You are responsible for maintaining the confidentiality
                  of your account credentials. Notify us immediately of any
                  unauthorized use or security breach.
                </li>
              </ul>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong>User Conduct:</strong>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-24px",
                  marginTop: "5px",
                }}
              >
                <li style={{ marginBottom: "5px" }}>
                  &bull; Users must comply with all applicable laws and
                  regulations. Do not engage in any activity that may harm,
                  disrupt, or compromise the security of the platform.
                </li>
              </ul>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong>Data Privacy:</strong>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-24px",
                  marginTop: "5px",
                }}
              >
                <li style={{ marginBottom: "5px" }}>
                  &bull; Your personal information will be handled in accordance
                  with our Privacy Policy. By signing in, you consent to the
                  collection, use, and sharing of your data as outlined in the
                  Privacy Policy.
                </li>
              </ul>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong>Content Usage:</strong>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-24px",
                  marginTop: "5px",
                }}
              >
                <li style={{ marginBottom: "5px" }}>
                  &bull; You are solely responsible for any content you post or
                  share. Do not post content that violates the rights of others
                  or is unlawful, harmful, or offensive.
                </li>
              </ul>
            </li>

            <li>
              <strong>Intellectual Property:</strong>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-24px",
                  marginTop: "5px",
                }}
              >
                <li style={{ marginBottom: "5px" }}>
                  &bull; All content and materials on the platform, unless
                  otherwise stated, are the intellectual property of the
                  platform.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div style={{ textAlign: "left", marginTop: "50px" }}>
        <Checkbox onClick={() => setisChecked(false)}>
          By signing in, I acknowledge that I have read, understood, and agree
          to be bound by these terms and conditions.
        </Checkbox>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          onClick={logSystem}
          disabled={isChecked}
          style={{
            marginRight: "10px",
            backgroundColor: isChecked ? "#454443" : "#24605A",
            borderColor: isChecked ? "#454443" : "#24605A",
            color: "white",
          }}
        >
          Accept
        </Button>
        <Button
          onClick={() => onClose()}
          className="bg-red-400 text-white"
          style={
            {
              // backgroundColor: "#ff0000",
              // borderColor: "#363538",
              // color: "white",
            }
          }
        >
          Decline
        </Button>
      </div>
    </Modal>
  );
};

export default TermsAndConditionMOdal;
