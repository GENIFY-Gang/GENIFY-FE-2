import React, { useEffect, useState } from "react";
import NavigationBar from "../Navigation/NavigationBar";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Spin, notification, Layout } from "antd";
import { GenifyService } from "../../API";
import { ExclamationCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import Footer from "../Footer/Footer";
import { useRoleData } from "../UserData/UserData";
import axios from "axios";

const { Content } = Layout;

const Documentation = () => {
  const [value, setValue] = useState(``);

  const [edit, setEdit] = useState<boolean>(true);
  const [getCallAPI, setGetCallAPI] = useState<boolean>(true);
  const [loading, setLoading] = useState(true);
  const genifyService = new GenifyService();
  const roleData = useRoleData() as any;

  const isAdmin = roleData?.storedData?.role === "admin";

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  useEffect(() => {
    if (getCallAPI) {
      setLoading(true);
      genifyService
        .getDocumentData()
        .then((data: any) => {
          setValue(data?.documentation?.content);
          setGetCallAPI(false);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, [getCallAPI]);

  const handleSubmit = async () => {
    const data = { content: value };
    try {
      const response = await genifyService.getUpdateDocumentData(data);

      notification.success({
        message: `Success`,
        description: "Document Successfully Updated",
        placement: "bottomRight",
      });
      setGetCallAPI(true);
    } catch (error) {       
      if (axios.isAxiosError(error) && error.response) {
        notification.error({
          message: "Error",
          description: error.response.data.error || "An error occurred while processing your request. Please try again later.",
          placement: "bottomRight",
          icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
        });
      } else {
        // Display a generic error notification
        notification.error({
          message: "Error",
          description: "An error occurred while processing your request. Please try again later.",
          placement: "bottomRight",
          icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
        });
    }
    }
  };

  return (
    <Layout style={{ background: "white" }}>
      <NavigationBar />
      <Content style={{ marginTop: "64px", background: "white" }}>
        {isAdmin ? (
          <p style={{ fontSize: "60px", marginTop: "50px",fontFamily:'Poppins'}}>
            Edit Documentation
          </p>
        ) : (
          <p style={{ fontSize: "60px", marginTop: "50px",fontFamily:'Poppins' }}>Documentation</p>
        )}
        {isAdmin && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "40px",
              marginRight: "40px",
            }}
          >
            <Button
              onClick={() => setEdit(false)}
              type="default"
              size="large"
              style={{
                marginRight: "10px",
                backgroundColor: "#24605A",
                borderColor: "#24605A",
                color: "white",
                borderRadius: "40px",
                fontFamily:'Poppins'
              }}
            >
              Edit
            </Button>
            <Button
              className="ml-2"
              size="large"
              onClick={() => {
                setEdit(true);
                handleSubmit();
              }}
              style={{
                backgroundColor: "#363538",
                borderColor: "#363538",
                color: "white",
                borderRadius: "40px",
                fontFamily:'Poppins'
              }}
              type="default"
            >
              Save
            </Button>
          </div>
        )}
        <div>
          <Spin
            size="large"
            spinning={loading}
            style={{ marginTop: "200px" }}
            indicator={<LoadingOutlined style={{ fontSize: 140 }} spin />}
          />
          <ReactQuill
            className={edit ? "blurred-editor" : "focused-editor"}
            readOnly={edit}
            theme="snow"
            modules={module}
            value={value}
            onChange={setValue}
            style={{ height: "600px",marginTop:"10px"}}
          />
        </div>
      </Content>
      <Footer marginTop={true} />
    </Layout>
  );
};

export default Documentation;
