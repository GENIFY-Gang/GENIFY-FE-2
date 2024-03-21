import React, { useEffect, useState } from "react";
import NavigationBar from "../Navigation/NavigationBar";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Spin, notification } from "antd";
import { GenifyService } from "../../API";
import { ExclamationCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import Footer from "../Footer/Footer";

const Documentation = () => {
  const [value, setValue] = useState(``);

  const [edit, setEdit] = useState<boolean>(true);
  const [getCallAPI, setGetCallAPI] = useState<boolean>(true);
  const [loading, setLoading] = useState(true);
  const genifyService = new GenifyService();

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

  console.log(value, "value");

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
    <>
      <div>
        <NavigationBar />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop:"120px", marginRight:"40px"}}>
  <Button onClick={() => setEdit(false)} type="default" size="large">
    Edit
  </Button>
  <Button
    className="ml-2"
    size="large"
    onClick={() => {
      setEdit(true);
      handleSubmit();
    }}
    type="default"
  >
    Save
  </Button>
</div>

      <div className="mt-6">
        <ReactQuill
          className={edit ? "blurred-editor" : "focused-editor"}
          readOnly={edit}
          theme="snow"
          modules={module}
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="overflow-y-auto w-full h-full text-black flex flex-col items-center justify-center">
        <Spin
          spinning={loading}
          indicator={
            <LoadingOutlined style={{ fontSize: 50, color: "#1890ff" }} spin />
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default Documentation;
